function getTarget(e) {
    if (!e){
        e=window.event;
    }
    return e.targets || e.SrcElement
}

function itemDone(e) {
    let target, elParent, elGrandparent;
    target = getTarget(e)
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode
    elGrandparent.removeChild(elParent)

    if (e.preventDefault) {
        e.preventDefault()
    }else {
        e.returnValue = false;
    }
}

let el = document.getElementById('Shopping List')
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e)
    }, false);
}else {
    el.attachEvent('onclik', function(e){
        itemDone(e);
    });
}