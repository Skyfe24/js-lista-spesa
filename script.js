console.log("JS OK");

const result = document.getElementById('lista');

const listElements = ['pane','latte','insalata','pollo'];

let printList= ' ';
//
//for (i=0; i < listElements.lenght; i++) {
//
//  printList += `<li>${listElements[i]}</li>`;
 // 
//  
//
//  
//}
//result.innerHTML = printList;
while (printList <listElements.lenght){
  printList += `<li>${listElements[i]}</li>`;
  i++;
}
result.innerHTML = printList;