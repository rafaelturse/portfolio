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

function setTargetUrl(i) {
    window.location.replace(urls.get(i) + getUrlLanguage(getUrl()));
}

function getUrlLanguage(url) {
    urlParameters = url.split('?');
    
    for (i = 0; i < urlParameters.length; i++) {
        if (languages.get(urlParameters[i])) {
            return languages.get(urlParameters[i]);
        }
    }

    return '';
}

var languages = new Map();
languages.set("english", "?lg=en");
languages.set("portuguese", "?lg=pt-br");
languages.set("lg=en", "?lg=en");
languages.set("lg=pt-br", "?lg=pt-br");

var urls = new Map();
urls.set("home", "https://www.rafaelturse.ca");
urls.set("professional", "https://www.rafaelturse.ca/pgs/professional.html");
urls.set("professional-career", "https://www.rafaelturse.ca/pgs/professional.html#career");
urls.set("professional-education", "https://www.rafaelturse.ca/pgs/professional.html#education");
urls.set("professional-personal", "https://www.rafaelturse.ca/pgs/professional.html#personal");
urls.set("technical", "https://www.rafaelturse.ca/pgs/technical.html");
urls.set("technical-backend", "https://www.rafaelturse.ca/pgs/technical.html#backend");
urls.set("technical-database", "https://www.rafaelturse.ca/pgs/technical.html#database");
urls.set("technical-data", "https://www.rafaelturse.ca/pgs/technical.html#data");
urls.set("technical-devops", "https://www.rafaelturse.ca/pgs/technical.html#devops");
urls.set("technical-focus", "https://www.rafaelturse.ca/pgs/technical.html#focus");
urls.set("technical-frontend", "https://www.rafaelturse.ca/pgs/technical.html#frontend");
urls.set("technical-interest", "https://www.rafaelturse.ca/pgs/technical.html#interest");
urls.set("technical-landscape", "https://www.rafaelturse.ca/pgs/technical.html#landscape");
urls.set("technical-resume", "https://www.rafaelturse.ca/pgs/technical.html#resume");
urls.set("technical-technology", "https://www.rafaelturse.ca/pgs/technical.html#technology");