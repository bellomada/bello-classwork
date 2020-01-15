// function product(a, b) {
//     return 7*5;
// }
//     console.log( product());




// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);

// function myFunction(a, b){
//     return a*b;
// }
// var x= myFunction(3, 5)*2;
// console.log(x);

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel)
// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }
// function showOk(){
//     alert("are you sure u want to go there?")
// }

// function showCancel(){
//     alert("do want to log out?")
// }

// ask("Do ypu want to go there or not?", showOk , showCancel)

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// welcome();



// // Grade Check
// function gradeSystem(){
// let grade= document.getElementById("score").value;
// if(grade<0 || grade>100){
//     console.log("out of range");
    
// }
// else if(grade>=0 && grade<40){
//     console.log("f");
    
// }
// else if(grade>=40 && grade<46){
//     console.log("E");
    
// }
// else if(grade>=46 && grade<50){
// console.log("D");
// }

// else if(grade>=50 && grade<60){
//     console.log("C");
// }

// else if(grade>=60 && grade<70){
//     console.log("B");
// }
   
//     else{
//         console.log("A");
        
//     }
// }

// document.write("hello"); 

// the Square of a Number
function squareNumber(x){
    return Math.pow(x, 2);
}
let result=squareNumber(5);
alert(`the result of squaing 5 is: ${result} `);

// The Half of a Number 
let halfNumber= y =>{
    return y/2;
}

let answer= halfNumber(11);
alert(`Half of 11 is:${answer}` );


// The Percentage  of a Numbert 
let percentOf = (a, b) =>{
    return (a/b)*100
}

let percentage = percentOf(20, 90);
alert(`20 is ${percentage}% of 90`);


// The Area Of a Circle 
function areaOfCircle(r){
return Math.PI * Math.pow(r, 2);
}

let circle = areaOfCircle(13);
alert(`The area for a circle with radius 13 is ${circle}`);

// To two Decimal places 
let twoPlaces = circle.toFixed(2);
alert(` leaving the answer to two Decimal Places ${twoPlaces}`);

// calculator 
function calculator(number){

   let halfResult =  halfNumber(number);
  let squareResult = squareNumber(halfResult);
  let areaOfSquareResult = areaOfCircle(squareResult);
  let percentageOfAareaSquareResult = percentOf(areaOfSquareResult, squareResult); 
  alert(percentageOfAareaSquareResult);

}

calculator(4);


var customerName = prompt("Please enter your name", "<name goes here>");

if (customerName!= null) {

    document.getElementById("welcome").innerHTML = "Hello " + customerName + "! How are you today?";

}