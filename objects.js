// const phone = {
//     brand :"Apple",
//     model :"iphone 13",
//     price : 700,
//     getDetails: function() {
//         return "The brand of this phone is " + this.brand + " and its cost is " + this.price;
// }
// };
// for (let key in phone){
//     console.log(key, phone[key])
// }

const school = [{
    name:"Max",
    age: 15,
}]
school.forEach(el =>{
    console.log(el.name, el.age)
})
school.name = "Wantam"
school.age = 16

console.log(school)


const person = {
    name:"John",
    age:30,
    gender:"male",
}

console.log(person.name)
person.name = "Joseph"
console.log(person.name)

person.country = "USA"
console.log(person.country)

delete person.gender
console.log(person)
for (let key in person){
    console.log(key, person[key])
}


const car = {
    make:"toyota",
    model:"corolla",
    year:2024
}

console.log(car.make)

for (let key in car){
    console.log(key, car[key])
}
console.log(car["model"])


const student = {
    name:"Mr Max",
    greet:function(){
        return ("Hello, " + this.name)
    }
}
console.log(student.greet())

const novel = {
    title:"The Alchemist ",
    author:"Dexter Govana",
    year:1998,
    getSummary:function(){
        return(this.title + this.author +this.year)
    }
}
console.log(novel.getSummary())

const user = {
    username:"Max",
    email:"mrmax011@gmail.com",
    profile:{
        age:15,
        country:"USA",
        interests:["coding", "music", "gaming"]
    },
    printUser:function(){
        return(this.username + this.email + this.profile.interests)
    }
}
console.log(user.printUser())
// console.log (user)
console.log(user.profile.age)
for (let key in user){
    // console.log(key, user[key])
}


const student1 = {
    name:"Mr Max",
    age:15
}

const student2 = {
    interests:"Swimming",
    favoriteFood:"Pizza"
}

const merged = Object.assign({}, student1, student2)
console.log(merged)