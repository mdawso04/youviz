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

Handler.vizInit = function (node) {
    //get plot div, tab
    var d = node.dataset;
    var vid = "viz-" + d.yvId;
    var plot_div = "plotBox-" + vid;
    var plot_div_el = document.getElementById(plot_div);
    var tab_div = vid;
    var tab_div_el = document.getElementById(tab_div);

    //get json
    var json_el = document.getElementById("youviz:data:" + vid);
    var json = JSON.parse(json_el.textContent);

    //make plot
    var data = json.plot_data;
    var layout = json.plot_layout;
    //var config = {responsive: true};
    layout.height = 370;
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
    Plotly.react(plot_div, data, layout, {displayModeBar: false, scrollZoom: false});

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

    //add resize, tab listeners
    window.addEventListener("resize", (event) => {
     if (window.getComputedStyle(plot_div_el).display !== "none") {
         var update = {
            width: plot_div_el.clientWidth,
            height: plot_div_el.clientHeight
         };
         Plotly.relayout(plot_div, update);
     }
    });
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
        var arr = document.querySelectorAll(".yv-vizreport div script");
        for (var n = 0; n < arr.length; n++) {
            eval(arr[n].innerHTML);
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

    fetch("./" + node_data.yvComponent + "/" + node_data.yvId)
    .then(response => {
        return response.text() 
    })
    .then(data => {
        node.innerHTML = data;
        let timer = setInterval(function() {
            if(window.Unicorn !== undefined){
                // stop loop
                clearInterval(timer);

                // init component to setup after download
                // TODO - make init support async by default?
                if(Handler[node_data.yvInit] !== undefined){
                    Handler[node_data.yvInit](node);
                }

                // init unicorn component for ajax editing
                var u_script = document.querySelector('#' + node.id + ' script[id^="unicorn:data"]');
                if(u_script !== undefined) {
                    Unicorn.componentInit(JSON.parse(u_script.textContent)); 
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
 