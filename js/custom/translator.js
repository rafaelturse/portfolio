var utils = document.createElement('script').src = 'utils.js';

/* jquery replace version $("body").html($("body").html().replace(/#Resume#/g,'teste')); */

window.onload = function pageLoad() {
    translate();
}

/*
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
*/

function setLanguage(language) {
    if (language === 'english') {
        window.location.replace("https://www.rafaelturse.ca?lg=en");
    } else if (language === 'portuguese') {
        window.location.replace("https://www.rafaelturse.ca?lg=pt-br");
    }
}

function translate() {
    var all = document.getElementsByTagName("*");
    var targets = null;

    visibility("overlay-loader", true);

    for (var i=0; i < all.length; i++) {
        if (all[i].className.length > 0) {
            if (all[i].className.includes("translate-")) {
                targets = document.getElementsByClassName(all[i].className);

                for (var j=0; j < targets.length; j++) {
                    if (this.getUrl().includes("?lg=pt-br")) {
                        targets[j].innerHTML = mapPtBr.get(targets[j].className);
                    } else {
                        targets[j].innerHTML = mapEn.get(targets[j].className);
                    }        
                }
            }
        }
    }

    visibility("overlay-loader", false);
}

var mapEn = new Map();
/* BUTTON */
mapEn.set("translate-button.more", "more");
/* LABEL */
mapEn.set("translate-label.english", "English");
mapEn.set("translate-label.portuguese", "Portuguese");
/* TEXT */
mapEn.set("translate-text.articles.describe", "Articles and thoughts almost always about technology and software development, but also about places, music, films, series, books and everything else");
mapEn.set("translate-text.professional.short-describe", "Information about education, career and profile");
mapEn.set("translate-text.resume.describe", "Easy to find. > Technical Page, Data Section > Resume. See in the page or download if you want, in .PDF or .DOCX");
mapEn.set("translate-text.technical.describe", "Information about my development skills, programming languages, charts and other dev stuffs");
mapEn.set("translate-text.technical.short-describe", "Information about development skills and programming languages");
/* TITLE */
mapEn.set("translate-title.resume", "Resume");
mapEn.set("translate-title.technical", "Technical");

var mapPtBr = new Map();
/* BUTTON */
mapPtBr.set("translate-button.more", "mais");
/* LABEL */
mapPtBr.set("translate-label.english", "Inglês");
mapPtBr.set("translate-label.portuguese", "Português");
/* TEXT */
mapPtBr.set("translate-text.articles.describe", "Artigos e pensamento quase sempre sobre técnologia e desenvolvimento de software, mas também sobre lugares, música, filmes, séries, livros e tudo mais");
mapPtBr.set("translate-text.professional.short-describe", "Informação sobre educação, carreira e perfil");
mapPtBr.set("translate-text.resume.describe", "Fácil de encontrar. > Página Técnica, Sessão de Dados > Currículo. Veja na página ou baixe se quiser, em .PDF ou .DOCX");
mapPtBr.set("translate-text.technical.describe", "Informação sobre minhas habilidades de desenvolvimento, linguagens de programação, gráficos e outras coisas");
mapPtBr.set("translate-text.technical.short-describe", "Informação sobre minhas habilidades de desenvolvimento e linguagens de programação");
/* TITLE */
mapPtBr.set("translate-title.resume", "Currículo");
mapPtBr.set("translate-title.technical", "Técnico");
