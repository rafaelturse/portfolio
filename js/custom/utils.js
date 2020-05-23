/* PAGE LOAD */
window.onload = function pageLoad() {
    /* DATA */
    if (window.location.href.includes('#interest')) { 
        doClick('interest') 
    } else if (window.location.href.includes('#focus')) { 
        doClick('focus') 
    } else if (window.location.href.includes('#resume')) { 
        doClick('resume') 
    } 

    /* TECHNOLOGY TABLE */
    if (window.location.href.includes('#backend')) { 
        doClick('backend') 
    } else if (window.location.href.includes('#frontend')) { 
        doClick('frontend') 
    } else if (window.location.href.includes('#database')) { 
        doClick('database') 
    } else if (window.location.href.includes('#devops')) { 
        doClick('devops') 
    }
}

/* URL */
function getUrl() {
    return window.location.href;
}

/* TEXT */
function showText(itemModifyClass, itemModifyText, text) { 
    if (!classExists(itemModifyClass)) {
        doClick(itemModifyClass);
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
function doClick(id) { document.getElementById(id).click(); }

/* VISIBILITY 
document.getElementById(item).style.visibility = "visible";
document.getElementById(item).style.visibility = "hidden";
*/
function visibility(item, status) {
    if (status) {
        document.getElementById(item).style.display = "inline";
    } else {
        document.getElementById(item).style.display = "none";
    }
}