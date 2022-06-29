let saying = 'Home Sweet Home';
let msg = '<h2>lenght</h2><p>' + saying.length + '</p>';
 msg +='<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
 msg +='<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
 msg +='<h2>character index:</h2>' + saying.charAt(12) + '</p>';
 msg +='<h2>First ee</h2><p>' + saying.indexOf('ee') + '</p>';
 msg +='<h2>last e <h2><p>' + saying.lastIndexOf('e') + '</p>';
 msg +='<h2>Character index: 8-14</h2><p>' + saying.lastIndexOf('e') + '</p>';
 msg +='<h2>Replace</h2><p>' + saying.replace('me', 'w') + '</p>';

 let el = document.getElementById('info');
 el.innerHTML = msg;