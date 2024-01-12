const myBody= document.body;
myBody.style.backgroundColor = "teal";
console.log(myBody);
const box2= document.getElementById('box2');
console.log(box2);
const divs= document.getElementsByTagName('div');
console.log(divs);

// console.dir(document.body.childNodes[1]);
// document.querySelector("box1")
// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let newBtn = document.createElement("button");
// newBtn.innerText = "i am button";
// console.log(newBtn);

let btn1= document.querySelector("#btn1")
// btn1.onclick= () =>{
//    let x=55
//    x++;
//     console.log(x);
// }
// btn1.onclick = (evt) =>{
//     console.log(handler1)
// }
btn1.addEventListener("click", () => {
    console.log("button was clicked");
});
btn1.addEventListener("click", () => {
    console.log("handler 2");
});


let ourBtn = document.querySelector("#mode");
let currMode = "light";
 
ourBtn.addEventListener("click", () => {
   if(currMode === "light"){
   currMode= "dark";
   document.querySelector("body").style.backgroundColor= "black";
}else{
  currMode = "light";
  document.querySelector("body").style.backgroundColor= "white";
}
console.log(currMode);
});
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    printAge: function(){
        console.log("age=  ", this.age);
    },
  };
 console.log(person.age);
  let a= 50;
  console.log(a);
setTimeout(() => {
    console.log("abcdd")
}, 2000);