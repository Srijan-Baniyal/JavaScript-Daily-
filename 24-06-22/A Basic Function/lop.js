var msg = 'This heading was changed by JavaScript!!';

function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}
updateMessage();