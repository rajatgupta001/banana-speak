var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="

function convertedText(text)
{
    return url + "text";
}

function clickHandler()
{
    fetch(convertedText(txtInput.value))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener("click", clickHandler());
