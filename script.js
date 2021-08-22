const inputEl = document.querySelector('textarea');
const outputEl = document.querySelector('#output');
const btnTranslate = document.querySelector('button');
const basicURL = 'https://api.funtranslations.com/translate/yoda.json'

const translate = () => {
    const inputText = inputEl.value;
    const finalURL = basicURL + '?text=' + encodeURI(inputText);
    
    fetch(finalURL).then((response) => response.json()).then((res) => {
        outputEl.innerText = res.contents.translated;
    }).catch(() => alert('some error occured, please try after sometime!'))

}

btnTranslate.addEventListener('click', translate)