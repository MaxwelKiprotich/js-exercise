let ageStudent = 15

switch(true){
    case (ageStudent <=12):
       console.log("You're a kid")
       break
    case (ageStudent >=13 && ageStudent <= 18):
       console.log("You're a teenager")
       break
    case (ageStudent >=19 && ageStudent <=35):
        console.log("You're a youth")
        break
    case (ageStudent >=36 && ageStudent <=60):
        console.log("You're an adult")
        break
    case (ageStudent >60):
        console.log("You're a senior citizen")
        break
    default:
        console.log("You're too young")
}




let num = 27

switch(true){
    case(num % 2===0):
    console.log("Number is even")
    break
    default:
        console.log("Number is odd")

}

let grade = 79

switch(true){
    case(grade >=90):
    console.log("A")
    break
    case(grade <=89 &&  grade >= 80):
    console.log("B")
    break
    case (grade >=70 && grade <= 79):
    console.log("C")
    break
    case(grade >=60 && grade <= 69):
    console.log("D")
    break
    default:
    console.log("F")
}

let a = 40
let b = 50
let c = 60

if(a > b && a > c){
    console.log("a is larger")
}
else if(c > a && c > b){
    console.log("c is larger")
}
else {
    console.log("b is larger")
}

