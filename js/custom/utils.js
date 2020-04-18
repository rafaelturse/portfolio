/* TEXT */
function showText(itemModifyClass, itemModifyText, text) { 
    if (!classExists(itemModifyClass)) {
        doCLick(itemModifyClass);
        addClass(itemModifyClass);
    }
    
    document.getElementById(itemModifyText).innerText = text;
}

function hideText(id){ document.getElementById(id).innerText = ''; }

/* CLASS */
function addClass(item) { document.getElementById(item).classList.add("active"); }
function removeClass(item) { document.getElementById(item).classList.remove("active"); }

function classExists(item) { return document.getElementById(item).classList.contains("active"); }

/* ACTION */
function doCLick(id) { document.getElementById(id).click(); }