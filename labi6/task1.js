function extractData(element) {
    let paragraphs = [];
    let body = element.querySelector('body');

    for (let child of body.children) {
        if (child.tagName == 'P') {
            paragraphs.push(child.textContent.trim());
        }
    }

    return paragraphs;
}

const data = extractData(document.documentElement);
console.log(data);
