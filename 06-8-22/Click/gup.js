let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

let elNote = document.createElement('div');      
elNote.setAttribute('id', 'note');               
elNote.innerHTML = msg;                           
document.body.appendChild(elNote);                

function dismissNote() {                          
  document.body.removeChild(elNote);              
}

let elClose = document.getElementById('close');   
elClose.addEventListener('click', dismissNote, false);