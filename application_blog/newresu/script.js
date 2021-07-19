function addNewWEField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2'); 
newNode.setAttribute('rows',3);
newNode.setAttribute('placeholder','Enter here')
let weOb=document.getElementById('we');
let weAddButtonOb=document.getElementById('weAddButton');
weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewQField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqField');
newNode.classList.add('mt-2'); 
newNode.setAttribute('rows',3);
newNode.setAttribute('placeholder','Enter here')
let aqOb=document.getElementById('aq');
let aqAddButtonOb=document.getElementById('aqAddButton');
aqOb.insertBefore(newNode,aqAddButtonOb);
}
function generateCV(){
   let nameField=document.getElementById('nameField').value;  
let nameT1=document.getElementById('nameT1');
nameT1.innerHTML=nameField;
//direct
document.getElementById('nameT2').innerHTML=nameField;  
//contact
document.getElementById('contactT').innerHTML=document.getElementById('contactField').value; 
//address
document.getElementById('fbT').innerHTML=document.getElementById('fbField').value; 

document.getElementById('instaT').innerHTML=document.getElementById('instaField').value; 

document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value; 

//objectiv
document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value; 
//we
let wes=document.getElementsByClassName('weField');
let str = "";
let e;
for ( e of wes) {
  str =str + `<li> ${e.value} </li>`
}
document.getElementById('weT').innerHTML=str;
//aq
let aqs=document.getElementsByClassName('eqField');
let str1="";
let r;
for( r of aqs){
    str1 +=`<li> ${r.value} </li>`;
}
document.getElementById('aqT').innerHTML=str1;
//code for img  setting
let file=document.getElementById("imgField").files[0];
console.log(file);
let reader  =new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
//set the img to temlet
reader.onloadend=function(){
document.getElementById("imgTemplate").src=reader.result;
}
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
 //printcv
 function printCV(){
     window.print();
 }