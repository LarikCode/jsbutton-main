console.log("👋 🌎");

let root = document.getElementById('root');

const label = ["S", "M", "I", "L", "E"];
let position = -1;

function handleClick(e) {
    position = (position + 1) % label.length;
    e.innerText = label[position];
}

console.dir(root);

const newButton = document.createElement("button");

root.appendChild(newButton);

newButton.innerText = 'X';

newButton.classList.add("square");

newButton.setAttribute("onClick", "handleClick(this)");