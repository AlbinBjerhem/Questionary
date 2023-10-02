'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive")


// const interface = "Audio"

// const private = 545

// const if = 23
/*

function logger() {
  console.log("My name is Albin");
}
// calling / running / invoking funcion
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const appleorangeJuice = fruitProcessor(2, 4);
console.log(appleorangeJuice);



function describeCountry(country, population, capitalCity) {
  const myFunction = `${country} has ${population} million people and its capital is ${capitalCity}.`
  return myFunction
}

const sweden = describeCountry("Sweden", 10, "Stockholm");
console.log(sweden)

const norway = describeCountry("Norway", 5, "Oslo");
console.log(norway)

const denmark = describeCountry("Denmark", 6, "Copenhagen");
console.log(denmark)


function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}
const age2 = calcAge2(1991);
console.log(age1, age2);



function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china = percentageOfWorld1(1441);
console.log(china);

const sweden = percentageOfWorld1(10);
console.log(sweden);

const norway = percentageOfWorld1(5);
console.log(norway);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;

}
const china2 = percentageOfWorld2(1441);
console.log(china2);

const sweden2 = percentageOfWorld2(10);
console.log(sweden2);

const norway2 = percentageOfWorld2(5);
console.log(norway2);



const calcage3 = birhYear => 2037 - birhYear;
const age3 = calcage3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Albin"))
console.log(yearsUntilRetirement(1980, "Bob"));


const percentageOfWorld3 = population => (population / 7900) * 100;
const china = percentageOfWorld3(1441);
console.log(china)
const sweden = percentageOfWorld3(10);
console.log(sweden)
const norway = percentageOfWorld3(5);
console.log(norway);



function cutFruitPieces(fruit) {
  return fruit * 3;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitProcessor(2, 3));


function percentageOfWorld1(population) {
  return (population / 7900) * 100;
};

function describePopulation(country, population) {
  const populationPercent = percentageOfWorld1(population)
  const answer = `${country} has ${population} million people, which is about ${populationPercent}`
  console.log(answer)
};

describePopulation("China", 1441)
*/

const calAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear)
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  return retirement;

}

console.log(yearsUntilRetirement(1991, "Albin"));
console.log(yearsUntilRetirement(1950, "Mike"));