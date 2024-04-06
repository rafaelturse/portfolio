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

/* ACTION */
function doClick(id) { document.getElementById(id).click(); }