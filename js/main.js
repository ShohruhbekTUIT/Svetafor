const elSvetafor = document.querySelector(".svetafor");

const elGreen = document.querySelector(".col-green");
const elYellow = document.querySelector(".col-yellow");
const elRed = document.querySelector(".col-red");

const elStopBtn = document.querySelector(".stop-btn");


const stop = setInterval(()=>{

setTimeout(()=> {
  elYellow.style.opacity = 0.4;
  elGreen.style.opacity = 1;
},2000)

setTimeout(()=> {
  elGreen.style.opacity = 0.4;
  elYellow.style.opacity = 1;
 },5500)

 setTimeout(()=> {
  elYellow.style.opacity = 0.4;
 },7500)

 setTimeout(()=> {
  elYellow.style.opacity = 1;
 },8000)

 setTimeout(()=> {
  elYellow.style.opacity = 0.4;
 },8500)

 setTimeout(()=> {
  elYellow.style.opacity = 1;
 },9000)

 setTimeout(()=> {
  elYellow.style.opacity = 0.4;
  elRed.style.opacity = 1;
},9500)

 setTimeout(()=> {
  elRed.style.opacity = 0.4;
  elYellow.style.opacity = 1;
 },12000)

 setTimeout(()=> {
  elYellow.style.opacity = 0.4;
 },13500)

 setTimeout(()=> {
  elYellow.style.opacity = 1;
 },14000)

 setTimeout(()=> {
  elYellow.style.opacity = 0.4;
 },14500)

 setTimeout(()=> {
  elYellow.style.opacity = 1;
 },15000)

},15000)

elStopBtn.addEventListener("click", ()=> {
  clearInterval(stop);
})