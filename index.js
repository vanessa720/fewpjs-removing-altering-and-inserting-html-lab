let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
newHeader.innerHTML = "Vanessa is the champion!";