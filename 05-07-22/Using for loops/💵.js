let score = [24, 32, 17];
let arrayLenght = score.length;
let roundnumber = 0;
let msg = '';
let i;

for (i = 0; i < arrayLenght; i++ ){

    roundnumber = (i + 1);

    msg += ' Round ' + roundnumber + ':';

    msg += score[i] + "<br />";
}

document.getElementById('answer').innerHTML = msg
