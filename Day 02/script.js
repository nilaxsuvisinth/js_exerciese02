//01 <<==========>>

// function fullName() {
//     var firstName = "Leo"
//     var lastName = "Das";
//     var fullName = firstName + " " + lastName;
//     console.log(fullName);
// }
// fullName();

//02 <<==========>>
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

var myfullName = fullName("Nilax", "Suvisinth");
console.log(myfullName); 

//03 <<==========>>
function addNumbers(x, y) {
    return x + y;
}

var output = addNumbers(2, 7);
console.log(output); 

//04 <<==========>>
function areaOfRectangle(length, width) {
    return length * width;
}

var length = 3;
var width = 12;
var area = areaOfRectangle(length, width);
console.log(area)

//05 <<==========>>

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

var length = 2;
var width = 7;
var perimeter = perimeterOfRectangle(length, width);
console.log(perimeter);

//06 <<==========>>

function volumeOfRectangular(length, width, height) {
    return length * width * height;
}

var length = 2;
var width = 7;
var height = 20;
var volume = volumeOfRectangular(length, width, height);
console.log(volume);