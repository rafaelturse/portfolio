var utils = document.createElement('script').src = 'utils.js';

/* jquery replace version $("body").html($("body").html().replace(/#Resume#/g,'teste')); */

window.onload = function pageLoad() {
    visibility("overlay-loader", true);

    translateProcess();

    visibility("overlay-loader", false);
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

function translateProcess() {
    translate();
    setDefaultTranslateBox();
}

function setDefaultTranslateBox() {    
    if (this.getUrl().includes("?lg=pt-br")) {
        visibility("flag-canada-translate-box-default", false);
        visibility("label-canada-translate-box-default", false);
        visibility("flag-brazil-translate-box-default", true);
        visibility("label-brazil-translate-box-default", true);
    } else {
        visibility("flag-canada-translate-box-default", true);
        visibility("label-canada-translate-box-default", true);
        visibility("flag-brazil-translate-box-default", false);
        visibility("label-brazil-translate-box-default", false);
    }
}

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
}

var mapEn = new Map();
/* BUTTON */
mapEn.set("translate-button.more", "more");
/* LABEL */
mapEn.set("translate-label.backend", "Backend");
mapEn.set("translate-label.database", "Database");
mapEn.set("translate-label.developed-by", "Developed by");
mapEn.set("translate-label.devops", "DevOps");
mapEn.set("translate-label.english", "English");
mapEn.set("translate-label.frontend", "Frontend");
mapEn.set("translate-label.portuguese", "Portuguese");
/* TAGS */
mapEn.set("translate-tags.personal", "Personal");
mapEn.set("translate-tags.career", "Career");
mapEn.set("translate-tags.skill", "Skill");
mapEn.set("translate-tags.music", "Music");
mapEn.set("translate-tags.companies", "Companies");
mapEn.set("translate-tags.education", "Education");
mapEn.set("translate-tags.landscape", "Landscape");
mapEn.set("translate-tags.professional", "Professional");
mapEn.set("translate-tags.data", "Data");
mapEn.set("translate-tags.abroad", "Abroad");
mapEn.set("translate-tags.technical", "Technical");
mapEn.set("translate-tags.technology", "Technology");
mapEn.set("translate-tags.systems", "Systems");
mapEn.set("translate-tags.articles", "Articles");
mapEn.set("translate-tags.design", "Design");
mapEn.set("translate-tags.photos", "Photos");
mapEn.set("translate-tags.runnig", "Runnig");
mapEn.set("translate-tags.portfolio", "Portfolio");
/* TEXT */
mapEn.set("translate-text.articles.describe", "Articles and thoughts almost always about technology and software development, but also about places, music, films, series, books and everything else");
mapEn.set("translate-text.celebrate-describe", "* don't make fun of me! I can moderate this ... lol");
mapEn.set("translate-text.professional-education-short-describe", "Education, courses, languages and certificates");
mapEn.set("translate-text.professional.short-describe", "Information about education, career and profile");
mapEn.set("translate-text.resume.describe", "Easy to find. > Technical Page, Data Section > Resume. See in the page or download if you want, in .PDF or .DOCX");
mapEn.set("translate-text.resume.short-describe", "Professional developer resume to download");
mapEn.set("translate-text.systems.describe", "The best reasons for you to convince yourself that you can no longer be without a strong internet identity and a modern and secure system");
mapEn.set("translate-text.technical.describe", "Information about my development skills, programming languages, charts and other dev stuffs");
mapEn.set("translate-text.technical.short-describe", "Information about development skills and programming languages");
mapEn.set("translate-text.technical-technology-short-describe", "Techonological level of my systems developer skills");
/* TITLE */
mapEn.set("translate-title.celebrate", "Celebrate");
mapEn.set("translate-title.resume", "Resume");
mapEn.set("translate-title.tags", "Tags");
mapEn.set("translate-title.technical", "Technical");

var mapPtBr = new Map();
/* BUTTON */
mapPtBr.set("translate-button.more", "mais");
/* LABEL */
mapPtBr.set("translate-label.backend", "Backend");
mapPtBr.set("translate-label.database", "Database");
mapPtBr.set("translate-label.developed-by", "Desenvolvido por");
mapPtBr.set("translate-label.devops", "DevOps");
mapPtBr.set("translate-label.english", "Inglês");
mapPtBr.set("translate-label.frontend", "Frontend");
mapPtBr.set("translate-label.portuguese", "Português");
/* TAGS */
mapPtBr.set("translate-tags.personal", "Pessoal");
mapPtBr.set("translate-tags.career", "Carreira");
mapPtBr.set("translate-tags.skill", "Habilidades");
mapPtBr.set("translate-tags.music", "Música");
mapPtBr.set("translate-tags.companies", "Empresas");
mapPtBr.set("translate-tags.education", "Educação");
mapPtBr.set("translate-tags.landscape", "Paisagem");
mapPtBr.set("translate-tags.professional", "Profissional");
mapPtBr.set("translate-tags.data", "Dados");
mapPtBr.set("translate-tags.abroad", "Estrangeiro");
mapPtBr.set("translate-tags.technical", "Técnico");
mapPtBr.set("translate-tags.technology", "Tecnologia");
mapPtBr.set("translate-tags.systems", "Sistemas");
mapPtBr.set("translate-tags.articles", "Artigos");
mapPtBr.set("translate-tags.design", "Design");
mapPtBr.set("translate-tags.photos", "Fotos");
mapPtBr.set("translate-tags.runnig", "Corrida");
mapPtBr.set("translate-tags.portfolio", "Portifólio");
/* TEXT */
mapPtBr.set("translate-text.articles.describe", "Artigos e pensamento quase sempre sobre técnologia e desenvolvimento de software, mas também sobre lugares, música, filmes, séries, livros e tudo mais");
mapPtBr.set("translate-text.celebrate-describe", "* não me zoe! Eu posso moderar isso ... lol");
mapPtBr.set("translate-text.professional-education-short-describe", "Educação, cursos, idiomas e certificados");
mapPtBr.set("translate-text.professional.short-describe", "Informação sobre educação, carreira e perfil");
mapPtBr.set("translate-text.resume.describe", "Fácil de encontrar. > Página Técnica, Sessão de Dados > Currículo. Veja na página ou baixe se quiser, em .PDF ou .DOCX");
mapPtBr.set("translate-text.resume.short-describe", "Currículo para download");
mapPtBr.set("translate-text.systems.describe", "Os melhores motivos para você se convencer de que não pode mais ficar sem uma forte identidade na Internet e um sistema moderno e seguro");
mapPtBr.set("translate-text.technical.describe", "Informação sobre minhas habilidades de desenvolvimento, linguagens de programação, gráficos e outras coisas");
mapPtBr.set("translate-text.technical.short-describe", "Informação sobre minhas habilidades de desenvolvimento e linguagens de programação");
mapPtBr.set("translate-text.technical-technology-short-describe", "Nível tecnológico das minhas habilidades de desenvolvedor de sistemas");

/* TITLE */
mapPtBr.set("translate-title.celebrate", "Comemore");
mapPtBr.set("translate-title.resume", "Currículo");
mapPtBr.set("translate-title.tags", "Etiquetas");
mapPtBr.set("translate-title.technical", "Técnico");