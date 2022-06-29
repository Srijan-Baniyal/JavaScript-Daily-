let randomNum = Math.floor ((Math.random() * 70) + 9);

let el = document.getElementById('info');
el.innerHTML = `<h2>Random number</h2></p>${randomNum}</p>`;