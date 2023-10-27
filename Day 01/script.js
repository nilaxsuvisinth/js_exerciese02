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
const student={
    name:"Nilax",
    age: 24
}
const course={
    book:"Web Design",
    pages: 27
}
//spread operator - ES06
let studentCourse={...student, ...course};

 //9
  //How do you check if an object  has a specific property say address? If there an address , log(address is there) in console if not (‘address not found)
  const person6 ={
    name: "nilax",
    age:24,
    city:"Mallavi"
  };
  if ("address" in person6) {
    console.log("Address is there:", person6.address);
  } else {
    console.log("Address not found");
  }
  //10
  //Create an object  book with properties fo title author and year and then convert it into a JSON string
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 2022
  };
  const jsonString = JSON.stringify(book);
  console.log(jsonString);
  //11
  //
  const students = [
    {
      name: "nilax",
      age: 24,
      gpa: 3.1
    },
    {
      name: "sankar",
      age: 22,
      gpa: 2.0
    },
    {
      name: "kajuran",
      age: 24,
      gpa: 3.0
    },
  ];
  console.log(students);