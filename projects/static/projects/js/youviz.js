/*

- simplify js code (element search, element update etc)
- manage viz navigation
  - viz name
  - viz count
  - back/forward
  

specifically,

-monitor visible tab/viz
-detect media change/mode
  -update classes
    -viz settings: if small mode offcanvas class, else right panel class
    -viz navigation: if small mode dropup class, else left panel class
  -actions
    -showViz.onclick: if small mode call show offcanvas.show, else call show right panel
    -navigation.onclick: if small mode call show dropup, else call show left panel

navigation object
  getSelected()
  getAll()
  forward()
  back()
  add()
  remove()

navigation target object
  selected: boolean
  name: string
  onclick()

*/


function elementUpdate(u) {
    //update tab name on viz edit
    for (var n = 0; n < u.length; n++) {
        var id = u[n][0];
        var value = u[n][1];
        document.getElementById(id).innerHTML = value;
    }
}

function tabChange(t) {
    var deactivate = document.querySelector(".dropdown-item.active:not("+t+")");
    deactivate.classList.remove("active");

    //var activate = document.querySelector(t);
    //var tab = bootstrap.Tab.getOrCreateInstance(triggerEl);
    //alert(tab);
    //tab.show();
    //activate.classList.add("active");
}

function updateButtonGroup() {

    // update dropdown-item active status
    // bootstrap tab change
    // button name
    // button enable/disable
}

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
    constructor(component, key, name) {
        this.c = component;
        this.k = key;
        this.n = name;
    }
    
    get key() {
        return this.k;
    }
    
    get component() {
        return this.c;
    }
    
    get name() {
        return this.n;
    }
    
    get editElementID() {
        return this.c + '-' + this.k + '-edit';
    }
    
    get tabTriggerElementID() {
        return this.c + '-' + this.k + '-tab';
    }
    
    set name(n) {
        this.n = n;
    }
    
    get id() {
        return this.c + '_' + this.k;
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
                count: this.targets.length,
                navTar: navTar
            }
        });
        document.dispatchEvent(e);
    }

    get active() {
        return this.targets[this.selected];
    }
    
    set active(key) {
        if(key === "undefined") {
            this.selected = -1;
        } else {
            var i = this.targets.findIndex(t => t.key == key);
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
    
    add(component, key, name) {
        var i = this.targets.findIndex(t => t.key == key);
        if(i < 0){
            this.targets.push(new NavTarget(component, key, name));
            this._navigationChanged("add", this.targets[this.targets.length - 1]);
            if(this.targets.length === 1) {
                this.active = key;
            }
        }
    }

    remove(key) {
        var i = this.targets.findIndex(t => t.key == key);
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
    
    rename(key, name) {
        var tar = this.targets.find(t => t.key == key);
        if(tar !== "undefined") {
            tar.name = name;
            this._navigationChanged("name", tar);
        }   
    }
    
    toggleNav() {
        this.showNav = !this.showNav;
        this._navToggled();
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
document.addEventListener('navigationChanged', (e) => {
    switch(e.detail.name) {
        case "active": 
            // navpanel gui update
            document.getElementById("btnGroupDrop1").childNodes[0].nodeValue = e.detail.navigator.active.name + " ";
            // change tab
            //todo
            // left panel gui update
            /*for (const li of document.querySelectorAll("#leftNavList li.active")) {
                li.classList.remove("active");
            }*/
            //document.getElementById(e.detail.navigator.active.tabElementID).classList.add("active");
            //var tabTrigger = document.querySelector('#tabButtons li:first-child a')
            var t = document.getElementById(e.detail.navigator.active.tabTriggerElementID);
            bootstrap.Tab.getOrCreateInstance(t).show();
            
            break;
        case "add":
            // navpanel gui update
            document.getElementById("vizCount").innerHTML = e.detail.count + " vizs";
            
            // left panel gui update
            const li = document.createElement('li');
            li.id = e.detail.navTar.id;
            li.classList.add("list-group-item");
            li.textContent = e.detail.navTar.name;
            document.getElementById("leftNavList").appendChild(li);
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
            //document.getElementById("btnGroupDrop1").innerHTML = e.detail.name;
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
            
            //document.getElementById(e.detail.navigator.active.editElementID).classList.toggle("open");
            break;
    }
});

/*Handler.navigator.add("viz", 1, "one");
Handler.navigator.add("viz", 2, "two");*/

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
    var tab_div_el = document.getElementById(tab_div);

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
    
    // add edit pane to navigation
    Handler.navigator.add("viz", d.yvId, d.yvId);
    
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

        var newScript = document.createElement("script");
        newScript.src = Handler.href.bootstrap_table;
        newScript.addEventListener("load", () => {
            Handler.scripts['bts'] = true;
        });
        node.appendChild(newScript);
        // JQuery for Bootstrap Table compatibility
        let myVar = setInterval(function() {
            if(Handler.scripts['bs'] !== undefined &&
              Handler.scripts['btc'] !== undefined &&
              Handler.scripts['bts'] !== undefined &&
              $table.bootstrapTable !== undefined){
                clearInterval(myVar);
                /*
                $(function() {
                    m.addEventListener('shown.bs.modal',function () {
                        $table.bootstrapTable('resetView');
                    });
                });*/
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
            var rep = arr[n];
            var rid = rep.id;
            var plot_div = "plotBox-report-" + rid;
            var plot_div_el = document.getElementById(plot_div);
            
            //get json
            var json_el = document.getElementById("youviz:data:report-" + rid);
            var json = JSON.parse(json_el.textContent);

            //make plot
            var data = json.plot_data;
            var layout = json.plot_layout;
            //var config = {responsive: true};
            //layout.height = 392;
            var plot_div_outer_el = document.getElementById(rid);
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
            var config = {displayModeBar: false, scrollZoom: false};
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
                        var update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    } else {
                        var update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        Plotly.relayout(plot_div, update);
                    }
                }
            });

            //let midPanel = document.getElementById('midPanel');
            observer.observe(plot_div_el);
            
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
                    u.componentInit(JSON.parse(u_script.textContent)); 
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
 