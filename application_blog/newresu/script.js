function addNewWEField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField'); 
newNode.setAttribute('rows',3);
let weOb=document.getElementById('we');
let weAddButtonOb=document.getElementById('weAddButton');
weOb.insertBefore(newNode,weAddButtonOb);
}
