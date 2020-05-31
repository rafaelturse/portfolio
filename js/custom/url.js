function getUrl() { return window.location.href; }

function urlIsPortuguese() {
    return getUrl().includes("?lg=pt-br");
}

function urlIsEnglish() {
    return getUrl().includes("?lg=en");
}

function urlIsEnglishOrDefault() {
    return getUrl().includes("?lg=en") || !getUrl().includes("?lg=");
}

function translateByText(text) {
    if (urlIsPortuguese()) {
        return mapPtBr.get(text)
    } else if (urlIsEnglishOrDefault()) {
        return mapEn.get(text);
    }
}

function setLanguageToUrl(language, url) {
    window.location.replace(urls.get(url) + languages.get(language));
}

var languages = new Map();
languages.set("english", "?lg=en");
languages.set("portuguese", "?lg=pt-br");

var urls = new Map();
urls.set("home", "https://www.rafaelturse.ca");
urls.set("professional", "https://www.rafaelturse.ca/pgs/professional.html");
urls.set("technical", "https://www.rafaelturse.ca/pgs/technical.html");
