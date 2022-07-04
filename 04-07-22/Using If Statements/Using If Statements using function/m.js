let score = 75;
let msg = '';

function congratulate () {
    msg +='Congratulations !<br/><br/>';
}
if (score >= 50) {
    congratulate();
    msg +='Proceed to the next level';
}
let el = document.getElementById('answer');
el.innerHTML = msg;