//using the arrow deffinition

function greet1(){
    console.log("Hello, World!");
}
greet1();

// //using arrow function

const greetWorld = () => {
    console.log("Hello, World!");
}
greetWorld();

// // Function with parameters

const greet = (name , secondName) => {
    console.log("Hello",name , secondName);
}  
greet("Maxwel" , "Kiprotich"); 

//Write a function that calculate the area of a circle

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
let result1 = areaOfCircle(5);
console.log("Area of the circle is:", result1);


//write a function that checks if a number is even or Odd

function EvenOrOdd (number){
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let result = EvenOrOdd(10);
console.log("The number is:", result);

//write a function that returns the square of a number

function square(number1){
    return number1 * number1;
}
let result2 = square(4);
console.log("The square is:", result2);