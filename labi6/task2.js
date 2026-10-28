function prettify(document) {
    let divs = document.querySelectorAll('div');

    for (let div of divs) {
        for (let node of div.childNodes) {
            if (node instanceof Text && node.textContent.trim() != '') {
                let paragraph = document.createElement('p');
                paragraph.textContent = node.textContent.trim();
                node.replaceWith(paragraph);
            }
        }
    }
}

prettify(document);
console.log(document.body.innerHTML);
