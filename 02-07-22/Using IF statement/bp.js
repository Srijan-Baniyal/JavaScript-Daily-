let score = 75;
let msg;

if (score >=50) {
    msg = 'Congratulations!';
    msg += ' Proceed to the next round.';
}

let el = document.getElementById('answer');
el.textContent = msg;

let yo = 'This text was written by JavaScript';

let op =document.getElementById('o');
op.innerText = yo;