console.log("JS OK");

const listElement = document.getElementById('lista');

const prodotti = ['pane','latte','insalata','pollo'];

let printItem = '';

for (i=0; i < prodotti.lenght; i++)
printItem += '<li>prodotti[i]</li>';

listElement.innerHTML = printItem;
