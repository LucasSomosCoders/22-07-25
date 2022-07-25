const para = document.createElement("p");
const text = document.createTextNode("Nuevo parrafo ");
const text2 = document.createTextNode(" mas texto");
para.appendChild(text);
para.appendChild(text2);

const divPadre = document.getElementById("div1");
// divPadre.appendChild(para);
// divPadre.appendChild(text);

const parrChild = document.getElementById('p2');
divPadre.insertBefore(para, parrChild);

// parrChild.remove();
// para.removeChild(text);

// replacedNode = parentNode.replaceChild(newChild, oldChild);
const replacedNode = divPadre.replaceChild(para, parrChild);