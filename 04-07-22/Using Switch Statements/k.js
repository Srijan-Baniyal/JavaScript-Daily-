let msg;
let level = 4;
let ald = 'This text was Writen by Javscript';

switch (level) {
    case 1:
        msg = 'Good Luck for the first test !!'
        
        break;

    case 2:
        msg = 'Second of three - keep going!';
        
        break;

    case 3:
        msg = 'Final Round, almost there!';
        
        break;

    default:
        msg = 'Good Luck!';
        break;
}

let el = document.getElementById('halo');
el.textContent = msg;

let al = document.getElementById('1');
al.textContent = ald;