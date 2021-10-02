const inputText = document.querySelector(".text-input");
const outputText = document.querySelector(".text-output");
const translateButton = document.querySelector(".translate-btn");

let apiURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function translationURL(url){
    return apiURL + "?" + "text=" + url;
}

function clickHandler(){
    console.log("shit works");
    let urlText = inputText.value;

    fetch(translationURL(urlText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
}

translateButton.addEventListener("click", clickHandler);