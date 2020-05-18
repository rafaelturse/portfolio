/* jquery replace version $("body").html($("body").html().replace(/#Resume#/g,'teste')); */

window.onload = function pageLoad() {
    translate();
}

function getUrl() {
    return window.location.href;
}

function translate() {
    var all = document.getElementsByTagName("*");

    for (var i=0; i < all.length; i++) {
        if (document.getElementById(all[i].id) != null) {
            if (document.getElementById(all[i].id).id.includes("##")) {
                if (this.getUrl().includes("?lg=pt-br")){
                    document.getElementById(all[i].id).innerHTML = mapPtBr.get(all[i].id);
                } else {
                    document.getElementById(all[i].id).innerHTML = mapEn.get(all[i].id);
                }
            }
        }
    }
}

var mapEn = new Map();
mapEn.set("##button.more##", "more");
mapEn.set("##title.resume##", "Resume");
mapEn.set("##text.resume.describe##",   "Easy to find. > Technical Page, Data Section > Resume." 
                                      + " See in the page or download if you want, in .PDF or .DOCX");

var mapPtBr = new Map();
mapPtBr.set("##title.resume##", "Currículo");
mapPtBr.set("##button.more##", "mais");
mapPtBr.set("##text.resume.describe##",   "Fácil de encontrar. > Página Técnica, Sessão de Dados > Currículo." 
                                        + " Veja na página ou baixe se quiser, em .PDF ou .DOCX");