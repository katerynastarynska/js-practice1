console.log("Hello world");

let name = "Kate";
let age = 41;
let color = "blue";

const dob = "Nov 2, 1980";

console.log(name + " is " + age + " years old, she was born on " + dob + " and her favourite color is " + color);
console.log(`${name} is ${age} years old, she was born on ${dob} and her favourite color is ${color}`);

let nameHusband = "Andrew";
let ageHusband = 43;
let colorHusband = "green";

const dobHusband = "Dec 7";

if (ageHusband > age) {
    console.log(nameHusband + " is older than " + name);
}

let today = "Nov 2, 1980";
if (today === dob) {
    age = age + 1;
    console.log(name + " will be " + age + " years in a year ");
}

let total = age + ageHusband;
console.log("Sum of " + name + " and " + nameHusband + "'s age is " + total);
console.log(`Sum of ${name} and ${nameHusband}'s age is ${total}`);

let pricePerItem = 500;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerItem * orderedQuantity + deliveryFee;
const message = `You ordered items worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

console.log(message)