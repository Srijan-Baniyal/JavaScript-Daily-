let pass = 50;
let score = 90;

let hasPassed = score >= pass;

let el = document.getElementById('answer');
el.textContent = 'Level passed:' + hasPassed;