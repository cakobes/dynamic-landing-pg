// DOM Elements

const time=document.querySelector("#time");
const greeting=document.querySelector("#greeting");
const name=document.querySelector("#name");
const focus=document.querySelector("#focus");

// show time

function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=addZero(today.getMinutes()),
    sec=addZero(today.getSeconds());
// set am or pm
const amPm=hour>=12? "PM" : "AM" ;

// 12HR FORMAT
hour=hour % 12 || 12;

//  outpu time

time.innerHTML=`${hour}:${min}:${sec}`
setTimeout(showTime, 1000);
}

function setGreet() {
    let today=new Date(),
    hour=today.getHours();
    if(hour<12){
        // morning
        document.body.style.backgroundImage=`url("img/morning.jpg")`;
         document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.backgroundPosition = "center";
       document.body.style.backgroundSize = "cover";
        document.body.style.color="white";
        
        greeting.textContent="Good Morning ";
    }else if(hour<18 ){
        // afternoon
        document.body.style.backgroundImage=`url("img/afternoon.jpg")`;
        document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
       document.body.style.color="white";
       
       greeting.textContent="Good Afternoon ";
        
    }else{
        document.body.style.backgroundImage=`url("img/evening.jpg")`;
        document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
       document.body.style.color="white";
       
       greeting.textContent="Good Evening ";
    }
    
}

// get name
function getName(){
    if(localStorage.getItem("name")===null){
        name.textContent="[enter name]";
    }else{
        name.textContent=localStorage.getItem("name");
    }

    
}


// setName


function setName(e) {
if(e.type==="keypress"){
    // Make sure enter is pressed
    if(e.which==13 || e.keyCode==13){
        localStorage.setItem("name",e.target.innerText);
       name.blur();
    }


}else{
    localStorage.setItem("name",e.target.innerText);
}}

// get Focus
function getFocus(){
    if(localStorage.getItem("focus")===null){
        focus.textContent="[enter focus]";
    }else{
        focus.textContent=localStorage.getItem("focus");
    }

    
}
function setFocus(e) {
    if(e.type==="keypress"){
        // Make sure enter is pressed
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem("focus",e.target.innerText);
           focus.blur();
        }
    
    
    }else{
        localStorage.setItem("focus",e.target.innerText);
    }}

name.addEventListener("keypress", setName);
name.addEventListener("blur" ,setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur" ,setFocus);
showTime();
setGreet();
getName();
getFocus();


    function addZero(n) {
        if (n < 10) {
          n= "0" + n;
        }
        return n;
      }
    





// function showTime() {
//     let today=new Date();
//     hour=today.getHours();
//     min=today.getMinutes();
//     sec=today.getSeconds();

//     // set AM or PM

//     const amPm=hour>= 12 ? "PM" : "AM" 

// // 12hr Format
// hour= hour%12 || 12;

// // Output the time

// time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
//  setTimeout(showTime, 1000);

// }

// // add zeros
// function addZero(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
//   }

// //   set background greeting
// function  setBgGreet() {
//     let today=new Date(),
//     hour=today.getHours();
//   if(hour<12){
//     //   morning
//     document.body.style.backgroundImage=`url("img/morning.jpg")`;
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundPosition = "center";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.color="white";



//     greeting.textContent="Good Morning";
//   }else if(hour<18){
// // afternoon
// document.body.style.backgroundImage=`url("img/afternoon.jpg")`;
// greeting.textContent="Good Afternoon";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundPosition = "center";
// document.body.style.backgroundSize = "cover";
// document.body.style.color="white";
//   }else{
//     //   evening
//     document.body.style.backgroundImage=`url("img/evening.jpg")`;
// greeting.textContent="Good Evening";
// document.body.style.color="white";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundPosition = "center";
// document.body.style.backgroundSize = "cover";
// document.body.style.color="white";
//   }

// }
// // Get name function
// function getName(){
//     if(localStorage.getItem("name")===null){
//         name.textContent="[Enter Name]";
//     }else{
//         name.textContent=localStorage.getItem("name");
//     }
// }
// // get Focus
// function getFocus(){
//     if(localStorage.getItem("focus")===null){
//         focus.textContent="[Enter Focus]";
//     }else{
//      focus.textContent=localStorage.getItem("focus");
//     }
// }

// name.addEventListener();

// // run
// showTime();
// setBgGreet();
// getName();
// getFocus();