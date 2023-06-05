console.log("JS OK");

const list = document.getElementById("list");

const listElements = ['pane','latte','insalata','pollo'];

let Startlist = '<ul>'
let i = 0;
//
//for (i=0; i < listElements.length; i++) {
//
//  Startlist += `<li>${listElements[i]}</li>`;
//  console.log(listElements[i])
//}
//
//let Endlist = '</ul>';
//list.innerHTML = Startlist + Endlist;
while (i < listElements.length){
  Startlist += `<li>${listElements[i]}</li>`;
  i++;
  console.log(listElements[i])
  
}
let Endlist = '</ul>';
list.innerHTML = Startlist + Endlist;

