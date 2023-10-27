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


//arrow funtion - interduce 2016 - ES6

let sum=(a,b)=>a+b;
console.log(sum(20,7))

//04 <<==========>>
function areaOfRectangle(length, width) {
    return length * width;
}

var area = areaOfRectangle(3, 12);
console.log(area)

// OR    //arrow funtion
let area1=(l,w)=>l*w;
console.log(area1(12,3))

//05 <<==========>>

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

var perimeter = perimeterOfRectangle(2, 7);
console.log(perimeter);

// OR    //arrow funtion
let area2=(l,w)=>2*(l+w);
console.log(area2(12,3))


//06 <<==========>>

function volumeOfRectangular(length, width, height) {
    return length * width * height;
}

var volume = volumeOfRectangular(2, 7, 20);
console.log(volume);

// OR    //arrow funtion

let volume1=(a,b,c)=>a*b*c;
console.log(volume1(2,7,20))

//07 <<==========>>

function areaOfCircle(r){
    const PI=3.14;
    return PI*r
}
let area3 = areaOfCircle(7);
console.log(area3)

//08 <============>

function circumOfCircle(radius){
    return 2* Math.PI*radius
}
console.log(circumOfCircle(5))

//09  <=================>

function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const celsiusTemperature = 25; 
  const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
  

//10  <===============>

function calculateBMI(weightKg, heightM) {
    const bmi = weightKg / (heightM * heightM);
    return bmi;
  }
  
  function classifyWeight(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  

  const weight = 70;
  const height = 1.75; 
  
  const bmi = calculateBMI(weight, height);
  const weightCategory = classifyWeight(bmi);
  
  console.log(`Weight: ${weight} kg, Height: ${height} m`);
  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(weightCategory);
  