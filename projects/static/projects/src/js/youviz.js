// npm packages
import Plotly from 'plotly.js-dist'; //external
import 'hammerjs';
import { Dropzone } from "dropzone"; //external
const dayjs = require('dayjs-with-plugins');
import { createPopper } from '@popperjs/core';

// 1-step workaround for these npm packages
import './jquery';
import './bootstrap-table'
import './bootstrap'

// selected bootstrap modules
//import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, Scrollspy, Tab, Toast, Tooltip} from 'bootstrap';

/*import Alert from '../bootstrap/js/dist/alert';
import Button from '../bootstrap/js/dist/button';
import Carousel from '../bootstrap/js/dist/carousel';
import Collapse from '../bootstrap/js/dist/collapse';
import Dropdown from  '../bootstrap/js/dist/dropdown';
import Modal from '../bootstrap/js/dist/modal';
import Offcanvas from '../bootstrap/js/dist/offcanvas';
import Popover from  '../bootstrap/js/dist/popover';
import Scrollspy from '../bootstrap/js/dist/scrollspy';
import Tab from '../bootstrap/js/dist/tab';
import Toast from '../bootstrap/js/dist/toast';
import Tooltip from '../bootstrap/js/dist/tooltip';*/

// sass entry point
import '../scss/projects.scss';

// other files
//import '../fix/mapbox-gl-unminified.js.map';
//import '../fix/base64-arraybuffer.es5.js.map';
//import '../fix/dropzone.mjs.map';
//import '../fix/performance-now.js.map';
var m1 = require("../fix/mapbox-gl-unminified.js.map");
var m2 = require("../fix/base64-arraybuffer.es5.js.map");
var m3 = require("../fix/dropzone.mjs.map");
var m4 = require("../fix/performance-now.js.map");

// custom js

// the root object
window.Handler = {
    js:{},
    css:{}
};
 
Handler.alert = function(value) {
    Handler.navigator.rename(value[0], value[1]);
}

// ex: viz-5-editpane
Handler.elID = function(componentName, id, role) {
    return componentName + '-' + id + '-' + role;
}
 
Handler.timeRefresh = function(tstamp, tar) {
    //var relativeTime = require('dayjs/plugin/relativeTime');
    //dayjs.extend(relativeTime);
    tar.innerHTML = dayjs(tstamp).fromNow();
    setInterval(function() {
        tar.innerHTML = dayjs(tstamp).fromNow();
    }, 60000);
}
 
 // share button
Handler.shareListener = function(btnSelector, resSelector, title, text, url) {
    const shareData = {
        title: title,
        text: text,
        url: url
    }
    const btn = document.querySelector(btnSelector);
    //const resultPara = document.querySelector(resSelector);
    
    if(!btn) return; 
    
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData);
            //resultPara.textContent = 'MDN shared successfully';
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    });
}

/*
function showVizOffcanvas() {
    var element = document.querySelector(".dropdown-item.active");
    var offcanvasID =  element.getAttribute("offcanvasID");
    var offcanvas = document.getElementById(offcanvasID);
    var vizOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
    vizOffcanvas.show();
}

function vizOffcanvasMaximize(c, oc) {
    document.querySelector(oc).classList.toggle('h-100');
}*/

class NavTarget {
    constructor(component, id, name) {
        this.component = component;
        this.id = Number(id);
        this.name = name;
    }
    
    get compID() {
        return this.component + '-' + this.id;
    }
    
    get editElementID() {
        return Handler.elID(this.component, this.id, 'edit');
    }
    
    get tabTriggerElementID() {
        return Handler.elID( this.component, this.id, 'tab');
    }
    
    get copyElementID() {
        return Handler.elID(this.component, this.id, 'copy');
    }
}

//TODO: Handle component-key combinations
class Navigator {
    constructor() {
        //this.navigateCallback = callback;
        this.targets = [];
        this.selected = -1;
        this.showNav = false;
        this.showEdit = false;
    }
    
    _navigationChanged(name, navTar) {
        const e = new CustomEvent('navigationChanged', {
            detail: {
                name: name,
                navigator: this,
                active: this.targets[this.selected], 
                index: this.targets.findIndex(t => t.id == navTar.id),
                count: this.targets.length,
                navTar: navTar
            }
        });
        document.dispatchEvent(e);
    }

    get active() {
        return this.targets[this.selected];
    }
    
    set active(id) {
        if(id === "undefined") {
            return;
        } else {
            var i = this.targets.findIndex(t => t.id == id);
            if(i >= 0) {
                this.selected = i;
                this._navigationChanged("active", this.targets[this.selected]);
            }
        }
    }
    
    get all() {
        return this.targets;
    }

    get count() {
        return this.targets.length;
    }
    
    add(component, id, name) {
        //skip if already added to avoid gui errors
        var indexIfAlreadyAdded = this.targets.findIndex(t => t.id == id);
        if (indexIfAlreadyAdded >= 0) {return;}
        var i = this.targets.findIndex(t => t.id > Number(id));
        if (i < 0) {
            this.targets.push(new NavTarget(component, id, name));
            i = this.targets.length - 1;
        } else {
            this.targets.splice(i, 0, new NavTarget(component, id, name));
        }
        //this.selected = i;
        this._navigationChanged("add", this.targets[i]);
        //this.active = id;
    }
    
    addAndReset(component, id, name) {
        //skip if already added to avoid gui errors
        var indexIfAlreadyAdded = this.targets.findIndex(t => t.id == id);
        if (indexIfAlreadyAdded >= 0) {return;}
        this.add(component, id, name);
        this.active = this.targets[0].id;
    }

    remove(id) {
        var i = this.targets.findIndex(t => t.id == id);
        if(i){
            var tar = this.targets.splice(i, 1);
            this._navigationChanged("remove", tar[0]);
            if(this.targets.length === 0) {
                this.active = "undefined";
            }
        }
    }
        
    forward() {
        if(this.selected >= 0) {
            this.selected = this.selected + 1;
            if(this.selected >= this.targets.length) {
                this.selected = 0;
            }
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }

    back() {
        if(this.selected >= 0) {
            this.selected = this.selected - 1;
            if(this.selected < 0) {
                this.selected = this.targets.length - 1;
            }
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }
    
    /*
    jump(index) {
        if(index >= 0 && index < this.targets.length) {
            this.selected = index;
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }*/
    
    jump(key) {
        var tar = this.targets.find(t => t.id == key);
        if(tar !== "undefined") {
            this.selected = this.targets.findIndex(t => t.id == tar.id);
            this._navigationChanged("active", tar);
        }  
    }
    
    rename(key, name) {
        var tar = this.targets.find(t => t.id == key);
        if(tar !== "undefined") {
            tar.name = name;
            this._navigationChanged("name", tar);
        }   
    }
    
    // needed to catch single param call from django-unicorn view
    /*rename(arry) {
        this.rename(arry[0], arry[1]);   
    }*/
    
    toggleNav() {
        this.showNav = !this.showNav;
        this._navToggled();
    }
    
    openNavIfClosed() {
        if(!this.showNav) {
            this.showNav　= true;
        this._navToggled();
        }
    }
    
    closeNavIfOpen() {
        if(this.showNav) {
            this.showNav　= false;
        this._navToggled();
        }
    }
    
    reset() {
        alert(this.targets.length > 0);
        if (this.targets.length > 0) {
            this.active = this.targets[0].id;
        }
    }
    
    _navToggled() {
        const e = new CustomEvent('navToggled', {
            detail: {
                name: 'navToggled',
                navigator: this,
                showNav: this.showNav
            }
        });
        document.dispatchEvent(e);    
    }
    
    toggleEdit() {
        this.showEdit = !this.showEdit;
        this._editToggled();
    }
    
    openEditIfClosed() {
        if(!this.showEdit) {
            this.showEdit　= true;
        this._editToggled();
        }
    }
    
    closeEditIfOpen() {
        if(this.showEdit) {
            this.showEdit　= false;
        this._editToggled();
        }
    }
    
   
    
    _editToggled() {
        const e = new CustomEvent('editToggled', {
            detail: {
                name: 'editToggled',
                navigator: this,
                showEdit: this.showEdit
            }
        });
        document.dispatchEvent(e);    
    }
    
};

Handler.navigator = new Navigator();
 
Handler.text_truncate = function(str, length, ending) {
    if (length == null) {
        length = 8;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - 1) + ending;
    } else {
        return str;
    } 
}

Handler.addTab = function(navTar, index) {
    //make tab button
    const bli = document.createElement('li');
    const b = document.createElement('button');
    b.id = navTar.tabTriggerElementID; //id="{{vid}}-tab"
    b.textContent = navTar.name;
    b.classList.add("dropdown-item");
    b.setAttribute("data-bs-toggle", "tab");
    b.setAttribute("data-bs-target", "#"+navTar.compID);
    b.setAttribute("role", "tab");
    b.setAttribute("type", "button");
    b.setAttribute("aria-controls", navTar.compID);
    b.setAttribute("index", index);
    b.setAttribute("navTarID", navTar.id);
    b.setAttribute("onclick", "event.preventDefault(); Handler.navigator.jump(" + navTar.id + ");");
    
    //make copy anchor
    const ali = document.createElement('li');
    const a = document.createElement('a');
    a.id = navTar.copyElementID; //id="viz-{{viz.pk}}-copy" 
    a.textContent = "Copy " + navTar.name;
    a.classList.add("dropdown-item");
    a.setAttribute("href", "#");
    a.setAttribute("onclick", "Unicorn.call('app', 'copyViz', '" + navTar.id + "');"); //unicorn:click="copyViz({{viz.pk}})
    a.setAttribute("index", index);
    
    //eh
    //TODO
    
    //add
    const ul = document.getElementById("tabButtons");
    var navTarCount = Handler.navigator.count;
    
    if (ul != null) {
        //ul.appendChild(bli);
        const topFixedItemsCount = 1;
        ul.insertBefore(bli, ul.children[topFixedItemsCount + index]);
        bli.appendChild(b);

        //ul.appendChild(ali);
        const midFixedItemsCount = 3;
        ul.insertBefore(ali, ul.children[topFixedItemsCount + midFixedItemsCount + navTarCount + index]);
        ali.appendChild(a);
    }
}

document.addEventListener('navigationChanged', (e) => {
    switch(e.detail.name) {
        case "active": 
            // update navpanel text & show active tab 
            var element = document.getElementById("btnGroupDrop1");
            element.childNodes[0].nodeValue = Handler.text_truncate(e.detail.navigator.active.name) + " ";
            var t = document.getElementById(e.detail.active.tabTriggerElementID);
            //bootstrap.Tab.getOrCreateInstance(t).show();
            Tab.getOrCreateInstance(t).show();
            break;
        case "add":
            // add Tab & Copy buttons
            var element = document.getElementById("vizCount");
            element.innerHTML = e.detail.count + " vizs";
            Handler.addTab(e.detail.navTar, e.detail.index);
            break;
        case "remove":
            // remove Tab & Copy buttons
            var element = document.getElementById("vizCount");
            element.innerHTML = e.detail.count + " vizs";
            document.getElementById(e.detail.navTar.id).remove();
            break;
        case "name":
            // update navpanel, Tab & Copy buttons 
            var element = document.getElementById("btnGroupDrop1");
            element.firstChild.data = Handler.text_truncate(e.detail.navTar.name);
            document.getElementById(e.detail.navTar.tabTriggerElementID).innerHTML = e.detail.navTar.name;
            document.getElementById(e.detail.navTar.copyElementID).innerHTML = 'Copy ' + e.detail.navTar.name;
            break;
    }
});
document.addEventListener('navToggled', (e) => {
    switch(e.detail.name) {
        case "navToggled": 
            //alert("navToggled");
            //bootstrap.Collapse.getOrCreateInstance(document.getElementById("leftPanel")).toggle();
            Collapse.getOrCreateInstance(document.getElementById("leftPanel")).toggle();
            
            // adn nav pane
            document.getElementById("navbar").classList.toggle("open");
            //document.getElementById("navbar_container").classList.toggle("main-content");
            //document.getElementById(e.detail.navigator.active.navElementID).classList.toggle("open");
            // is small screen call dropup, else call left panel
            break;
    }
});

document.addEventListener('editToggled', (e) => {
    switch(e.detail.name) {
        case "editToggled": 
            // toggle right panel
            //bootstrap.Collapse.getOrCreateInstance(document.getElementById("rightPanel")).toggle(); 
            Collapse.getOrCreateInstance(document.getElementById("rightPanel")).toggle(); 
            
            // ...and edit panes
            const l = document.querySelectorAll(".test-edit");
            for (let i = 0; i < l.length; i++) {
                l[i].classList.toggle("open");
            }
            
            //document.getElementById("bottom-navbar").classList.toggle("dynamic");
            
            //document.getElementById(e.detail.navigator.active.editElementID).classList.toggle("open");
            break;
    }
});

// Change DOM on screen size change
Handler.mediaQuery = function(query, handleYes, handleNo) {
    // ex: "(max-width: 700px)"
    var x = window.matchMedia(query);
    var f = function() {
        (x.matches) ? handleYes() : handleNo();
    }
    // call once immediately then listen
    f();
    x.addListener(f);
}

// Change style on screen size change
Handler.mediaQueryStyle = function(param) {
    var {query, elem, attr, yesStyle, noStyle} = param;
    var e = document.querySelector(elem);
    Handler.mediaQuery(
        query, 
        ()=>{ e.style.setProperty(attr, yesStyle); }, 
        ()=>{ e.style.setProperty(attr, noStyle); },
    );
}
/*
Handler.offset = function(el) {
    box = el.getBoundingClientRect();
    docElem = document.documentElement;
    return {
        top: box.top + window.pageYOffset - docElem.clientTop,
        left: box.left + window.pageXOffset - docElem.clientLeft
    };
}

Handler.fixToViewport = function(el, top, left) {
    var e = document.querySelector(el);
    e.css("left", leftOffset - element.offset().left);
    e.css("top", topOffset - element.offset().top);   
}*/

// Change DOM on screen size change
Handler.mediaQuerySwitch = function(param) {
    var {query, elem, yesParent, noParent} = param;
    var e = document.querySelector(elem);
    var y = document.querySelector(yesParent);
    var n = document.querySelector(noParent);
    Handler.mediaQuery(
        query, 
        ()=>{ /*if (n.contains(e))*/ y.appendChild(e); }, 
        ()=>{ /*if (y.contains(e))*/ n.appendChild(e); },
    );
}

Handler.showTab = function(query) {
    const t = document.querySelector(query);
    Tab.getOrCreateInstance(t).show();
}

Handler.showTabInsideEdit = function(query) {
    Handler.showTab(query); 
    Handler.navigator.openEditIfClosed();
}

Handler.showTabInsideNav = function(query) {
    Handler.showTab(query); 
    Handler.navigator.openNavIfClosed();
}

Handler.vizInit = function (node) {
    //get plot div, tab
    var d = node.dataset;
    var vid = "viz-" + d.yvId;
    var plot_div = "plotBox-" + vid;
    var plot_div_el = document.getElementById(plot_div);
    var tab_div = vid + "-tab";
    //var tab_div_el = document.getElementById(tab_div);

    //get json
    var json_el = document.getElementById("youviz:data:" + vid);
    var json = JSON.parse(json_el.textContent);

    //make plot
    var data = json.plot_data;
    var layout = json.plot_layout;
    //var config = {responsive: true};
    //layout.height = 392;
    layout.width = plot_div_el.clientWidth;
    layout.height = plot_div_el.clientHeight;
    
    layout.margin.t = 15;
    layout.margin.b = 68;
    layout.margin.r = 10;
    layout.showlegend = true;
    layout.legend = {
        x: 1,
        xanchor: 'right',
        y: 1,
        bgcolor: '#00000000',
    };
    layout.clickmode = 'none';
    layout.dragmode = false;
    
    var config = {displayModeBar: false, scrollZoom: false};
    Plotly.react(plot_div, data, layout, config);

    // popover setup
    const list = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    list.map((el) => {
      let opts = {
        animation: false,
      }
      if (el.hasAttribute('data-bs-content-id')) {
        opts.content = document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML;
        opts.html = true;
        opts.sanitize = false;
      }
      //new bootstrap.Popover(el, opts);
      new Popover(el, opts);
    })

    //var yvmodals = document.getElementsByClassName("yvmodal");
    var yvmodals = document.querySelectorAll('.yvmodal.viz');
    var body = document.getElementById("body");
    for (let i = 0; i < yvmodals.length; i++) {
        body.appendChild(yvmodals[i]); 
    }

    let observer = new ResizeObserver(entries => {
        for(let entry of entries) {
            // only respond if displayed to save cpu
            if (window.getComputedStyle(plot_div_el, null).getPropertyValue("display") != "none") {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                        var update = {
                            width: plot_div_el.clientWidth,
                            height: plot_div_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                } else {
                    if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                        var update = {
                            width: plot_div_el.clientWidth,
                            height: plot_div_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                }
            }
        }
    });
    
    let midPanel = document.getElementById('midPanel');
    observer.observe(midPanel);
    
    // add listener to generated dom
    var tab_div_el = document.getElementById(tab_div);
    tab_div_el.addEventListener('shown.bs.tab', function (event) {
        if (event.target.id === tab_div) { // newly activated tab
        //event.relatedTarget // previous active tab
            if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                var update = {
                    width: plot_div_el.clientWidth,
                    height: plot_div_el.clientHeight
                };
                Plotly.relayout(plot_div, update);
            }
        }
    });
    
    //nested datatable init
    
    $('#table').bootstrapTable(); // init via javascript

    // datatable modal
    // append modals to prevent z-layer issues
    var yvmodals = document.querySelectorAll('.yvmodal');
    var body = document.getElementById("body");
    for (let i = 0; i < yvmodals.length; i++) {
        body.appendChild(yvmodals[i]); 
    }
    /*
    Handler.mediaQuerySwitch({
        query: '(max-width: 992px)',
        elem: '#switch',
        yesParent: '.offcanvas-bottom',
        noParent: '#rightPanel div',
    });*/
}

Handler.dataframeInit = function (node) {
    var d = node.dataset;
    const m = document.querySelector("#modalTable");
    
    if (m) {
        //bootstrap.Modal.getOrCreateInstance(m).dispose();
        //bootstrap.Modal.getOrCreateInstance(m);
        Modal.getOrCreateInstance(m).dispose();
        Modal.getOrCreateInstance(m);
        document.getElementById("body").appendChild(m);
        var $table = $('#table');

        //var dfScript = document.createElement("script");
        //dfScript.src = '{% static "projects/js/bootstrap-table.min.js" %}';
        //dfScript.addEventListener("load", () => {
        //    Handler.js.bt = true;
        //});
        //node.appendChild(dfScript);
        
        // JQuery for Bootstrap Table compatibility
        let myVar = setInterval(function() {
            if(
                //Handler.scripts['btc'] !== undefined &&
                Handler.js.bt !== undefined &&
                $table.bootstrapTable !== undefined){
                clearInterval(myVar);
                //$(function() {
                //    m.addEventListener('shown.bs.modal',function () {
                //        $table.bootstrapTable('resetView');
                //    });
                //});
            }
        }, 250);
    }
}

Handler.vizreportInit = function (node) {
    var d = node.dataset;
    //get modal
    const mr = document.querySelector("#modalReport");
    if (mr) {
        //bootstrap.Modal.getOrCreateInstance(mr).dispose();
        //bootstrap.Modal.getOrCreateInstance(mr);
        Modal.getOrCreateInstance(mr).dispose();
        Modal.getOrCreateInstance(mr);
        document.getElementById("body").appendChild(mr);

        // init vizs
        //var arr = document.querySelectorAll(".yv-vizreport div script");
        var arr = document.querySelectorAll(".yv-vizreport");
        for (var n = 0; n < arr.length; n++) {
            
            //get plot div, tab
            const rep = arr[n];
            const rid = rep.id;
            const plot_div = "plotBox-report-" + rid;
            const plot_div_el = document.getElementById(plot_div);
            
            //get json
            const json_el = document.getElementById("youviz:data:report-" + rid);
            const json = JSON.parse(json_el.textContent);

            //make plot
            const data = json.plot_data;
            const layout = json.plot_layout;
            //var config = {responsive: true};
            const plot_div_outer_el = document.getElementById(rid);
            layout.width = plot_div_outer_el.clientWidth;
            //layout.height = plot_div_outer_el.clientHeight;
            layout.height = 250;
            layout.margin.t = 15;
            layout.margin.b = 68;
            layout.margin.r = 10;
            layout.showlegend = true;
            layout.legend = {
                x: 1,
                xanchor: 'right',
                y: 1,
                bgcolor: '#00000000',
            };
            layout.clickmode = 'none';
            layout.dragmode = false;
            const config = {displayModeBar: false, scrollZoom: false};
            Plotly.react(plot_div, data, layout, config);
            
            //add resize listener
            /*window.addEventListener("resize", (event) => {
             if (window.getComputedStyle(plot_div_el).display !== "none") {
                 var update = {
                    width: plot_div_el.clientWidth,
                    height: plot_div_el.clientHeight
                 };
                 if(update.width !== 0 && update.height !== 0) Plotly.relayout(plot_div, update);
                 //eval(script.innerHTML);
             }
            });*/
            let observer = new ResizeObserver(entries => {
                for(let entry of entries) {
                    if (entry.contentBoxSize) {
                        // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                        //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                        if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                            const update = {
                                width: plot_div_outer_el.clientWidth,
                                height: plot_div_outer_el.clientHeight
                            };
                            Plotly.relayout(plot_div, update);
                        }
                    } else {
                        if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                            const update = {
                                width: plot_div_outer_el.clientWidth,
                                height: plot_div_outer_el.clientHeight
                            };
                            Plotly.relayout(plot_div, update);
                        }
                    }
                }
            });

            //let midPanel = document.getElementById('midPanel');
            observer.observe(plot_div_el);
            
            // resize on modal.show
            mr.addEventListener('show.bs.modal', function (event) {
                if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                    const update = {
                        width: plot_div_el.clientWidth,
                        height: plot_div_el.clientHeight
                    };
                    Plotly.relayout(plot_div, update);
                }
            });
        }
        
        //qr code
        /*
        var qrcode = new QRCode(document.getElementById("viz-qrcode-{{vid}}"), {
            text: "{{report.get_absolute_url}}",
            width: 60,
            height: 60,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });*/
        
        // share button
        /*
        const shareData = {
            title: '{{report.name}}',
            text: 'Check out this data vizualization on YouViz!',
            url: '{{report.get_absolute_url}}'
        }
        const btn = document.querySelector('#report-button-share');
        const resultPara = document.querySelector('#report-share-result');
        // Share must be triggered by "user activation"
        btn.addEventListener('click', async () => {
            try {
                await navigator.share(shareData);
                //resultPara.textContent = 'MDN shared successfully';
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        });
        */
        Handler.shareListener('#report-button-share', 'null', 'Report', 'Check out this data vizualization on YouViz!', 'https://youviz.app');
    }
}

Handler.dsThumbInit = function (node) {
    var d = node.dataset;
    // init vizs
    //var arr = document.querySelectorAll(".yv-vizreport div script");
    var s = "#carousel-".concat(d.yvId, " .yv-dsthumb");
    var arr = document.querySelectorAll(s);
    for (var n = 0; n < arr.length; n++) {

        //get plot div, tab
        const thumb = arr[n];
        const thumbid = thumb.id;
        const plot_div = "plotBox-dsthumb-" + thumbid;
        const plot_div_el = document.getElementById(plot_div);

        //get json
        const json_el = document.getElementById("youviz:data:dsthumb-" + thumbid);
        const json = JSON.parse(json_el.textContent);

        //make plot
        const data = json.plot_data;
        const layout = json.plot_layout;
        //var config = {responsive: true};
        //const plot_div_outer_el = document.getElementById(thumbid);
        const plot_div_outer_el = thumb.parentElement;
        layout.width = plot_div_outer_el.clientWidth;
        //layout.height = plot_div_outer_el.clientHeight;
        //layout.height = 250;
        //layout.margin.t = 15;
        //layout.margin.b = 68;
        //layout.margin.r = 10;
        layout.showlegend = false;
        //if(layout.xaxis.visible) layout.xaxis.visible = false; 
        if(layout.xaxis.showticklabels){
            layout.xaxis.showticklabels = false;
        }
        //if(layout.yaxis.visible) layout.yaxis.visible = false;
        if(layout.yaxis.showticklabels){ 
            layout.yaxis.showticklabels = false;
        }
        /*layout.legend = {
            x: 1,
            xanchor: 'right',
            y: 1,
            bgcolor: '#00000000',
        };*/
        layout.clickmode = 'none';
        layout.dragmode = false;
        layout.hovermode = false;
        const config = {displayModeBar: false, scrollZoom: false};
        
        //var img_jpg= document.querySelector('#jpg-export');
        Plotly.react(plot_div, data, layout, config);
        
        // static image in jpg format
        /*

        .then(
            function(gd)
             {
              Plotly.toImage(gd,{height:300,width:300})
                 .then(
                     function(url)
                     {
                         img_jpg.src = url;
                     }
                 )
            });
            */

        //add resize listener
        /*window.addEventListener("resize", (event) => {
         if (window.getComputedStyle(plot_div_el).display !== "none") {
             var update = {
                width: plot_div_el.clientWidth,
                height: plot_div_el.clientHeight
             };
             if(update.width !== 0 && update.height !== 0) Plotly.relayout(plot_div, update);
             //eval(script.innerHTML);
         }
        });*/
        let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                } else {
                    if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                }
            }
        });

        //let midPanel = document.getElementById('midPanel');
        observer.observe(plot_div_el);

        // resize on modal.show
        /*
        mr.addEventListener('show.bs.modal', function (event) {
            const update = {
                width: plot_div_el.clientWidth,
                height: plot_div_el.clientHeight
            };
            Plotly.relayout(plot_div, update);
        });*/

    }
}
 
Handler.componentInit = async function(node_array) {
    node_array.forEach((node) => {
        if(Handler[node.dataset.yvInit]){
            Handler[node.dataset.yvInit](node);
        }

        // activate button
        if(node.dataset.yvButton != ""){
            if(document.querySelector(node.dataset.yvButton)){
                document.querySelector(node.dataset.yvButton).disabled = false;
            }
        }
    });
}

Handler.loadYVComponents = async function (rootElementID) {
    
    let nodeList;
    
    if(rootElementID) {
        nodeList = document.querySelectorAll(rootElementID.concat(" ", ".yv-component"));
    }
    else {
        nodeList = document.querySelectorAll(".yv-component");
    }
    
    const nodes = Array.from(nodeList);
    
    //1.Sort into groups: data-yv-component ...NEW    
    Handler.components = {};
    
    await Promise.all(nodes.map(async (node) => {
        // get unicorn data, add to node
        const response = await fetch(node.dataset.yvLink);
        node.innerHTML = await response.text();
        var selector = '#' + node.id + ' script[id^="unicorn:data"]';
        var u_script = document.querySelector(selector);
        if(u_script) {
            node.unicorn_data = JSON.parse(u_script.textContent);
        }
        //unicorn init
        Unicorn.componentInit(node.unicorn_data);
        // group components
        var c = node.dataset['yvComponent'];
        if(!Handler.components[c]) {
            Handler.components[c] = {};
        }
        Handler.components[c][node.id] = node;
    }));
    
    Object.keys(Handler.components).forEach((c) => {
        // process by group
        switch(c) {
            case 'viz': 
                Object.values(Handler.components[c]).forEach((v)=>{
                    Handler.navigator.add("viz", v.dataset.yvId, v.unicorn_data.data.viz.name); //node.unicorn_data.data.viz.name
                });
                Handler.navigator.active = Handler.navigator.targets[0].id;
                break;
            case 'report':
                break;
            case 'dataframe':
                break;
        }
        // custom init each item
        Handler.componentInit(Object.values(Handler.components[c]));
    });
        
        //  await givePrizeToPlayer(player);
    //}));
    /*
    var p = new Promise((resolve, reject) => {
        nodes.forEach(async (node) => {
            // get unicorn data, add to node
            fetch("." + node.dataset.yvLink)
            .then(response => {
                return response.text() 
            })
            .then(data => {
                node.innerHTML = data;
                var selector = '#' + node.id + ' script[id^="unicorn:data"]';
                var u_script = document.querySelector(selector);
                if(u_script) {
                    node.unicorn_data = JSON.parse(u_script.textContent);
                }
                //unicorn init
                Unicorn.componentInit(node.unicorn_data);  
                return true;
            })
            .then(dummy => {
                // group components
                var c = node.dataset['yvComponent'];
                if(!Handler.components[c]) {
                    Handler.components[c] = {};
                }
                Handler.components[c][node.id] = node;
            });
        });
        resolve(true);
    });*/
                                            
    //   2.Init: generic, custom  ...SAME
/*    nodes.forEach(async (node) => {
        var node_data = node.dataset;

        //fetch("./" + node_data.yvComponent + "/" + node_data.yvId)
        fetch("." + node_data.yvLink)
        .then(response => {
            return response.text() 
        })
        .then(data => {
            node.innerHTML = data;
            let timer = setInterval(function() {
                if(window.Unicorn !== undefined){
                    // stop loop
                    clearInterval(timer);

                    // init unicorn component for ajax editing
                    var u_script = document.querySelector('#' + node.id + ' script[id^="unicorn:data"]');
                    if(u_script !== undefined) {
                        var u = Unicorn;
                        // init u_component
                        u.componentInit(JSON.parse(u_script.textContent)); 
                        // save u_data for later
                        node.unicorn_data = JSON.parse(u_script.textContent);
                        
                    }

                    // init component to setup after download
                    // TODO - make init support async by default?
                    if(Handler[node_data.yvInit] !== undefined){
                        Handler[node_data.yvInit](node);
                    }

                    // activate button
                    if(document.querySelector(node_data.yvButton) !== undefined){
                        document.querySelector(node_data.yvButton).disabled = false;
                    }
                }
            }, 250);
        });
    });*/
    
}

// LOAD YV-COMPS
window.addEventListener("load", async (event) => {
    Handler.loadYVComponents();
});

var yvmodals = document.querySelectorAll('.yvmodal');
var body = document.getElementById("body");
for (let i = 0; i < yvmodals.length; i++) {
    body.appendChild(yvmodals[i]); 
}

//global toggle to keep offcanvas open while editing data source
var editing_file = false;

//window.addEventListener("deviceorientation", (event) => {
//    var absolute = event.absolute;
//    var alpha    = event.alpha;
//    var beta     = event.beta;
//    var gamma    = event.gamma;
//    alert(alpha);
//}

window.addEventListener("load", (event) => {
    const hammertime = Hammer(document.getElementsByTagName('body')[0]);
    hammertime.on('swipeleft swiperight', (event) => {
        switch(event.type) {
            case 'swipeleft': 
                //alert(event.type);
                Handler.navigator.forward();
                break;
            case 'swiperight':
                //alert(event.type);
                Handler.navigator.back();
                break;
        }
    });
    
    //time refresh
    const trefreshes = document.querySelectorAll('.trefresh');
    for (let i = 0; i < trefreshes.length; i++) {
        Handler.timeRefresh(trefreshes[i].lastElementChild.innerHTML, trefreshes[i].firstElementChild); 
    }
});
 

window.addEventListener("load", (event) => {
    var top_nav = document.getElementById("top-nav");
    
    let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if(Handler.top_nav_init) {
                        var height = document.getElementById("top-nav").offsetHeight;
                    
                        var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        r.style.setProperty('--top-nav', height + 'px');
                    } else {
                        Handler.top_nav_init = true;
                    }
                } else {
                    if(Handler.top_nav_init) {
                       var height = document.getElementById("top-nav").offsetHeight;

                        var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        r.style.setProperty('--top-nav', height + 'px');
                    } else {
                        Handler.top_nav_init = true;
                    }
                }
            }
        });
    observer.observe(top_nav);
});
 
/*
window.addEventListener("load", (event) => {
    var midPanel = document.getElementById("midPanel")
 
    let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if(Handler.datasource_info_init) {
                        var width = document.getElementById("midPanel").offsetWidth;
                    
                        //var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        //r.style.setProperty('--t-nav', height + 'px');
                        document.querySelector(".viz-info-panel").style.setProperty('width', width + 'px');
                    } else {
                        Handler.datasource_info_init = true;
                    }
                } else {
                    if(Handler.top_nav_init) {
                       var width = document.getElementById("midPanel").offsetWidth;

                        //var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        document.querySelector(".viz-info-panel").style.setProperty('width', width + 'px!important;');
                    } else {
                        Handler.datasource_info_init = true;
                    }
                }
            }
        });
    observer.observe(midPanel);
});
*/
 
// sharing app link
/*
const shareApp = {
    //title: '{{report.name}}',
    text: 'Check out YouViz - cool data vizualization app!',
    url: 'https://www.youviz.app/'
}
const btn = document.querySelector('#settings-button-share');
btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareApp);
        //resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
        console.log(`Error: ${err}`);
    }
});
*/

Handler.shareListener('#settings-button-share', 'null', 'YouViz', 'Check out this free data vizualization app!', 'https://youviz.app');
Handler.shareListener('#share-button-share', 'null', 'Report', 'Check out this data vizualization on YouViz!', 'https://youviz.app');
 
 // navbar share
var shareData = document.querySelector("#navbar-button-share")
if(shareData){
    Handler.shareListener('#navbar-button-share', 'null', shareData.dataset.text,  shareData.dataset.text,  shareData.dataset.url);
}

window.addEventListener("DOMContentLoaded", (event) => {
    Unicorn.addEventListener("updated", (component) =>{

        switch(component.name) {
            case 'app':
                // data source off canvas
                if (editing_file == true) {
                    var testOffCanvas = document.getElementById("OFFCANVAS");
                    //var bsoc = bootstrap.Offcanvas.getOrCreateInstance(testOffCanvas);
                    var bsoc = Offcanvas.getOrCreateInstance(testOffCanvas);
                    bsoc.hide();
                }

                // dropdown menus
                var tmd = document.getElementById("tab-more-dropdown");
                if (tmd) {
                    //bootstrap.Dropdown.getOrCreateInstance(tmd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(tmd);
                    Dropdown.getOrCreateInstance(tmd).dispose();
                    Dropdown.getOrCreateInstance(tmd);
                }

                var usd = document.getElementById("user-settings-dropdown");
                if (usd) {
                    //bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(usd);
                    Dropdown.getOrCreateInstance(usd).dispose();
                    Dropdown.getOrCreateInstance(usd);
                }

                //dropzone
                var dzElement = document.querySelector("#drop");
                var myDropzone;
                if (dzElement) {
                    if (dzElement.dropzone) {
                    dzElement.dropzone.destroy();
                    }
                    myDropzone = new Dropzone("#drop");
                };

                //bootstrap table to handle return from file edit
                //bootstrap table
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                
                // navbar share
                var sd = document.querySelector("#navbar-button-share");
                if (sd) {
                    var shareData = sd.dataset;
                    Handler.shareListener('#navbar-button-share', 'null', shareData.text,  shareData.text,  shareData.url);
                }
                
               // list scrolldown
                for (let i = 0; i < component.currentActionQueue[0].partials.length; i++) {
                    if (component.currentActionQueue[0].partials[i].id) {
                        Handler.loadYVComponents("#".concat(component.currentActionQueue[0].partials[i].id));
                    }
                    else if (component.currentActionQueue[0].partials[i].target) {
                        Handler.loadYVComponents("#".concat(component.currentActionQueue[0].partials[i].target));
                    }
                }
                
                break;
            case 'login':
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }

                var usd = document.getElementById("user-settings-dropdown");
                if (usd) {
                    //bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(usd);
                    Dropdown.getOrCreateInstance(usd).dispose();
                    Dropdown.getOrCreateInstance(usd);
                }
                break;
            case 'viz':
                /*
                var arr = document.getElementsByClassName("youVizOnUpdate"); // only refreshed viz/s
                for (var n = 0; n < arr.length; n++) {
                    eval(arr[n].innerHTML); // run script
                }*/
                //Handler.vizInit(document.querySelector('#' + component.id));
                //alert(component.parentNode);
                //alert(component.id);
                //alert(component.root.parentNode);
                Handler.vizInit(component.root.parentNode);
                
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                
                var yvlisteners = document.querySelectorAll('[data-yv-listener="viz"]')
                for (let i = 0; i < yvlisteners.length; i++) {
                    let target = yvlisteners[i].dataset.yvTarget;
                    let value = yvlisteners[i].dataset.yvValue;
                    let el = document.getElementById(target);
                    if(el) {
                        el.value = value;
                    }
                }
                
                break;
            case 'datatable':
                //bootstrap table
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            case 'getmore':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            case 'sourcecontrol':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                Dropzone.options.drop = { // camelized version of the `id`
                    paramName: "document", // The name that will be used to transfer the file
                    maxFilesize: 2, // MB
                };
                break;
            case 'vizreport':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                break;
            case 'filecontrol':
                $('#table').bootstrapTable(); // init via javascript
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            default:
                break;
        }

    });
});
 