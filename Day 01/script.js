//01
let empty = {

};
console.log(empty)

//02
/*let person={
    name: "nilax",
    age: 24,
    introduceYou: "Hello my name is"
} 

console.log(person.introduceYou+" "+person.name);
*/

//02
let person={
    name: "nilax",
    age: 24,
    introduceYou: function(){console.log("Hello my name is"+" "+this.name)}
}
person.introduceYou()

//03
let person1={
    greetStudent: function(student){console.log(`Hello ${student.name} Welcome to the Coding School`)}
}
person1.greetStudent({name:"nilax"})

//04
let person2={
    name:"Nilax",
    age: 24
}
console.log(person2.age)
console.log(person2["age"])

//05
let person3={
    name:"Nilax",
    age: 20
}
person3.email =("nilaxsuvisinth27@gmail.com")

//06
var person4={
    name: "Nilax",
    age: 24
} 
delete person4.name;
console.log(person4)

//07
let person5={
    name:"Nilax",
    age: 24,
    gender: "Male",
    address: "Mallavi"
}
//in operater
console.log("name"in person5);

//has own property
console.log(person5.hasOwnProperty("age"))

//08
