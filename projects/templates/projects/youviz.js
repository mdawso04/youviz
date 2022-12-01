{% load static %}

// import scripts for side-effects = global variables = only
// static import
import '{% static "projects/js/bootstrap.bundle.min.js" %}';
import '{% static "projects/js/hammer.min.js" %}'; 
import '{% static "projects/js/jquery-3.5.1.min.js" %}';
import '{% static "projects/js/dropzone.min.js" %}';
import '{% static "projects/js/plotly-2.14.0.min.js" %}';

// var
//import './qrcode.min.js';

// the root object
window.Handler = {
    js:{},
    css:{}
};

/*
// and module.exports ones
async function require(path) {
    let _module = window.module;
    window.module = {};
    await import(path);
    let exports = module.exports;
    window.module = _module; // restore global
    return exports;
}
(async () => { // top-level await cannot come soon enough…
    window.BootstrapTable = await require("./bootstrap-table.min.js");
    //Handler.scripts['bts']=true;
    if(BootstrapTable !== undefined){
        Handler.js.bt = true;
    }
})();
*/



// ex: viz-5-editpane
Handler.elID = function(componentName, id, role) {
    return componentName + '-' + id + '-' + role;
}

/*function elementUpdate(u) {
    //update tab name on viz edit
    for (var n = 0; n < u.length; n++) {
        var id = u[n][0];
        var value = u[n][1];
        document.getElementById(id).innerHTML = value;
    }
}*/

function showVizOffcanvas() {
    var element = document.querySelector(".dropdown-item.active");
    var offcanvasID =  element.getAttribute("offcanvasID");
    var offcanvas = document.getElementById(offcanvasID);
    var vizOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
    vizOffcanvas.show();
}

function vizOffcanvasMaximize(c, oc) {
    document.querySelector(oc).classList.toggle('h-100');
}

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
    rename(arry) {
        this.rename(arry[0], arry[1]);   
    }
    
    toggleNav() {
        this.showNav = !this.showNav;
        this._navToggled();
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
        length = 10;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
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
    b.setAttribute("onclick", "Handler.navigator.jump(" + navTar.id + "); event.preventDefault();");

    //make copy anchor
    const ali = document.createElement('li');
    const a = document.createElement('a');
    //a.id = id; //id="viz-{{viz.pk}}-tab-copy" 
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
    
    //ul.appendChild(bli);
    const topFixedItemsCount = 1;
    ul.insertBefore(bli, ul.children[topFixedItemsCount + index]);
    bli.appendChild(b);
    
    //ul.appendChild(ali);
    const midFixedItemsCount = 3;
    ul.insertBefore(ali, ul.children[topFixedItemsCount + midFixedItemsCount + navTarCount + index]);
    ali.appendChild(a);
}

//Handler.navigator_rename = Handler.navigator.rename;

document.addEventListener('navigationChanged', (e) => {
    switch(e.detail.name) {
        case "active": 
            // navpanel gui update
            document.getElementById("btnGroupDrop1").childNodes[0].nodeValue = Handler.text_truncate(e.detail.navigator.active.name, 5) + " ";
            // change tab
            //todo
            // left panel gui update
            /*for (const li of document.querySelectorAll("#leftNavList li.active")) {
                li.classList.remove("active");
            }*/
            //document.getElementById(e.detail.navigator.active.tabElementID).classList.add("active");
            //var tabTrigger = document.querySelector('#tabButtons li:first-child a')
            var t = document.getElementById(e.detail.active.tabTriggerElementID);
            bootstrap.Tab.getOrCreateInstance(t).show();
            
            break;
        case "add":
            // navpanel gui update
            document.getElementById("vizCount").innerHTML = e.detail.count + " vizs";
            
            // left panel gui update
            //const li = document.createElement('li');
            //li.id = e.detail.navTar.id;
            //li.classList.add("list-group-item");
            //li.textContent = e.detail.navTar.name;
            //document.getElementById("leftNavList").appendChild(li);
            Handler.addTab(e.detail.navTar, e.detail.index);
            /*Handler.addTab(
                e.detail.navTar.tabTriggerElementID, 
                e.detail.navTar.id,
                e.detail.navTar.name, 
                e.detail.index
            );*/
            break;
        case "remove":
            // navpanel gui update
            document.getElementById("vizCount").innerHTML = e.detail.count + " vizs";
            
            // left panel gui update
            document.getElementById(e.detail.navTar.id).remove();
            break;
        case "name":
            // navpanel gui update
            // left panel gui update
            document.getElementById(e.detail.navTar.id).innerHTML = e.detail.navTar.name;
            alert(document.getElementById("btnGroupDrop1"));
            document.getElementById("btnGroupDrop1").innerHTML = e.detail.name;
            break;
    }
});
document.addEventListener('navToggled', (e) => {
    switch(e.detail.name) {
        case "navToggled": 
            //alert("navToggled");
            bootstrap.Collapse.getOrCreateInstance(document.getElementById("leftPanel")).toggle();
            document.getElementById(e.detail.navigator.active.editElementID).classList.toggle("open");
            // is small screen call dropup, else call left panel
            break;
    }
});

document.addEventListener('editToggled', (e) => {
    switch(e.detail.name) {
        case "editToggled": 
            // toggle right panel
            bootstrap.Collapse.getOrCreateInstance(document.getElementById("rightPanel")).toggle(); 
            
            // ...and edit panes
            const l = document.querySelectorAll(".test-edit");
            for (let i = 0; i < l.length; i++) {
                l[i].classList.toggle("open");
            }
            
            document.getElementById("bottom-navbar").classList.toggle("dynamic");
            
            //document.getElementById(e.detail.navigator.active.editElementID).classList.toggle("open");
            break;
    }
});

/*Handler.navigator.add("viz", 1, "one");
Handler.navigator.add("viz", 2, "two");*/
//Handler.addTab("test_id", "test_name");

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
      new bootstrap.Popover(el, opts);
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
                    var update = {
                        width: plot_div_el.clientWidth,
                        height: plot_div_el.clientHeight
                    };
                    Plotly.relayout(plot_div, update);
                } else {
                    var update = {
                        width: plot_div_el.clientWidth,
                        height: plot_div_el.clientHeight
                    };
                    Plotly.relayout(plot_div, update);
                }
            }
        }
    });
    
    let midPanel = document.getElementById('midPanel');
    observer.observe(midPanel);
    
    // add edit pane to navigation, pick name from u_data
    Handler.navigator.addAndReset("viz", d.yvId, node.unicorn_data.data.viz.name);
    
    // add listener to generated dom
    var tab_div_el = document.getElementById(tab_div);
    tab_div_el.addEventListener('shown.bs.tab', function (event) {
        if (event.target.id === tab_div) { // newly activated tab
        //event.relatedTarget // previous active tab
            var update = {
                width: plot_div_el.clientWidth,
                height: plot_div_el.clientHeight
            };
            Plotly.relayout(plot_div, update);
        }
    });
    
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
        bootstrap.Modal.getOrCreateInstance(m).dispose();
        bootstrap.Modal.getOrCreateInstance(m);
        document.getElementById("body").appendChild(m);
        var $table = $('#table');

        var dfScript = document.createElement("script");
        dfScript.src = '{% static "projects/js/bootstrap-table.min.js" %}';
        dfScript.addEventListener("load", () => {
            Handler.js.bt = true;
        });
        node.appendChild(dfScript);
        
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
        bootstrap.Modal.getOrCreateInstance(mr).dispose();
        bootstrap.Modal.getOrCreateInstance(mr);
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
            //layout.height = 392;
            const plot_div_outer_el = document.getElementById(rid);
            layout.width = plot_div_outer_el.clientWidth;
            layout.height = plot_div_outer_el.clientHeight;
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
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    } else {
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                }
            });

            //let midPanel = document.getElementById('midPanel');
            observer.observe(plot_div_el);
            
            // resize on modal.show
            mr.addEventListener('show.bs.modal', function (event) {
                const update = {
                    width: plot_div_el.clientWidth,
                    height: plot_div_el.clientHeight
                };
                Plotly.relayout(plot_div, update);
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
    }
}

// LOAD YV-COMPS
window.addEventListener("load", (event) => {


    const nodes = document.querySelectorAll(".yv-component");
    nodes.forEach(async (node) => {
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
    });
    
});

//var yvmodals = document.getElementsByClassName("yvmodal");
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
});
 
// sharing app link
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

/*
window.setTimeout( () => {
    Handler.navigator.reset();
}, 2000);*/

window.addEventListener("DOMContentLoaded", (event) => {
    Unicorn.addEventListener("updated", (component) =>{

        switch(component.name) {
            case 'app':
                // data source off canvas
                if (editing_file == true) {
                    var testOffCanvas = document.getElementById("OFFCANVAS");
                    var bsoc = bootstrap.Offcanvas.getOrCreateInstance(testOffCanvas);
                    bsoc.hide();
                }

                // dropdown menus
                var tmd = document.getElementById("tab-more-dropdown");
                if (tmd) {
                    bootstrap.Dropdown.getOrCreateInstance(tmd).dispose();
                    bootstrap.Dropdown.getOrCreateInstance(tmd);
                }

                var usd = document.getElementById("user-settings-dropdown");
                if (usd) {
                    bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    bootstrap.Dropdown.getOrCreateInstance(usd);
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
                    bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    bootstrap.Dropdown.getOrCreateInstance(usd);
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
            case 'report':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
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
 