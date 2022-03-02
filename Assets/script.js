let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let popups1 = document.getElementById("popup1")
let popups2 = document.getElementById("popup2")
let popups3 = document.getElementById("popup3")
let popups4 = document.getElementById("popup4")

let btnclose1 = document.getElementById('btnclose1');
let btnclose2 = document.getElementById('btnclose2');
let btnclose3 = document.getElementById('btnclose3');
let btnclose4 = document.getElementById('btnclose4');

let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");

btn1.addEventListener("click",()=>{
  popups1.classList.add("shows");
  popups1.classList.remove("hides");
  popups2.classList.add("hides");
  popups3.classList.add("hides");
  popups4.classList.add("hides");
});
btn2.addEventListener("click",()=>{
  popups2.classList.add("shows");
  popups2.classList.remove("hides");
  popups3.classList.add("hides");
  popups4.classList.add("hides");
  popups1.classList.add("hides");

 

});
btn3.addEventListener("click",()=>{
  popups3.classList.add("shows");
  popups3.classList.remove("hides");
  popups4.classList.add("hides");
  popups2.classList.add("hides");
  popups1.classList.add("hides");
});
btn4.addEventListener("click",()=>{
  popups4.classList.add("shows");
  popups4.classList.remove("hides");
  popups3.classList.add("hides");
  popups2.classList.add("hides");
  popups1.classList.add("hides");
});
const close = ()=>{
  
  popups4.classList.add("hides");
  popups3.classList.add("hides");
  popups2.classList.add("hides");
  popups1.classList.add("hides");
}
btnclose1.addEventListener("click",close);
btnclose2.addEventListener("click",close);
btnclose3.addEventListener("click",close);
btnclose4.addEventListener("click",close);



// cannot spot the bug
// let x;

// const show = (x)=>{
  
//   x.style.display = "block"
  
// }

// song1.addEventListener("click", show(document.getElementById("pre1")));
//song2.addEventListener("click", show(document.getElementById("pre2")));

song1.addEventListener("click",()=>
{
  document.getElementById("pre1").style.display = "block"
});
song2.addEventListener("click",()=>
{
  document.getElementById("pre2").style.display = "block"
});
song3.addEventListener("click",()=>
{
  document.getElementById("pre3").style.display = "block"
});
song4.addEventListener("click",()=>
{
  document.getElementById("pre4").style.display = "block"
});