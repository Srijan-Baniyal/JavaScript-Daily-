let today = new Date();
let year = today.getFullYear();

let el = document.getElementById('footer');
el.innerHTML = `<p>Copyright &copy;${year}</p>`;

let al = document.getElementById('lower');
al.innerHTML = '<p>This text is writen by JavaScript</p>';