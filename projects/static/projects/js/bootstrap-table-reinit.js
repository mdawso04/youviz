/*!
* 
*/
//
// Scripts
// 
window.addEventListener("DOMContentLoaded", (event) => {
    Unicorn.addEventListener("updated", (component) => {
        $('#table').bootstrapTable();
        alert("updated done: " + component);
    });
});
