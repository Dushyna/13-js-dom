//console.log(document.body.innerHTML);
//document.body.innerHTML = `<h1>Hello World</h1>`;
const div1 = document.getElementById('div1');
//console.log(div1.innerHTML);
console.log(div1.id);
div1.style.border = '1px solid black';
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);
console.log(paragraphs[0].textContent);
const a = document.querySelector('#div1');
console.log(a);
console.log(a === div1);
const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1.length);
for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].textContent = `new text ${i+1}`;
}
//const children=div1.childNodes;
const children=div1.children;
console.log(children.length);
for (let i = 0; i < children.length; i++) {
    children[i].style.color = `red`;
}
const newP=document.createElement('p');
const newPText=document.createTextNode('This text was created by special method');
newP.appendChild(newPText);
div1.appendChild(newP);
//div1.insertBefore(newP, document.getElementById('p1'));
//div1.insertBefore(newP, p1);
//div1.insertBefore(newP, children[0]);
//div1.insertBefore(newP, div1.firstElementChild);
//div1.insertBefore(newP, div1.lastElementChild);
//document.body.insertBefore(newP,div1.nextElementSibling);
//document.body.appendChild(newP);
const newP2=document.createElement('p');
const newP2Text=document.createTextNode('This is p2 text');
newP2.appendChild(newP2Text);
div1.replaceChild(newP2,div1.firstElementChild);
div1.removeChild(div1.firstElementChild.nextElementSibling);
window['elem-content'].style.color = 'red';