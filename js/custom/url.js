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

function setUrlToEnglish() {
    window.location.replace("https://www.rafaelturse.ca?lg=en");
}

function setUrlToPortuguese() {
    window.location.replace("https://www.rafaelturse.ca?lg=pt-br");
}