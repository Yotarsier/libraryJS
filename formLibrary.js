
function createInput(id, type, placeholder, value) {
    //    document.write("<input id= '" + id + "' type='" + type + "' placeholder= '" + placeholder  + "' value='" + value + "'>");
    
    var nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("id", id);
    nuevoInput.setAttribute("type", type);

    var elBody = document.getElementsByTagName("body")[0];
    elBody.appendChild(nuevoInput);
    
    if (typeof placeholder !== 'undefined')   // Cuando NO tiene placheholder: 
    {
        nuevoInput.setAttribute("placeholder", placeholder);       
    }
    if (typeof value !== 'undefined') {
        nuevoInput.setAttribute("value", value);
    }
}