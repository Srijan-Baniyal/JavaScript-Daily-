let firstItem = document.getElementById('one');

if(firstItem.hasAttribute('class')) {
    let attr = firstItem.getAttribute('class')

let el = document.getElementById('scriptsResults');
el.innerHTML = "<p> The first item has a class name :' + attr  '</p>"
}