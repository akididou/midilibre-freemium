
//Get text 
var text = document.querySelector('script[type="application/ld+json"]').text;
text = text.trim()
text = text.replaceAll(/\\n/g, "<br/>");

// Get JSON 
var json = JSON.parse(text);
console.log('json', json)

// Get Article 
var article = json.articleBody

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded() {
    const el = document.createElement('button');
    el.innerHTML = 'Free';
    el.setAttribute('id', "hackedBtn");
    el.style.cssText += 'position: fixed;top: 0px;right: 20px;z-index: 10000;background: #43a047;border: 0;color: white;height: 50px;padding: 0 10px;cursor: pointer;';
    document.body.appendChild(el);


    var checkPageButton = document.getElementById('hackedBtn');
    checkPageButton.addEventListener('click', function () {
        changeArticle()
    }, false);
}


// Change HTML
function changeArticle() {
    console.log('crack ?')
    document.querySelector('.article-full__body').innerHTML = article;
}



