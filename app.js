"use strict";
const animals = ["monkey", "orangutan", "gorilla", "goat", "giraffe"];
console.log(animals);
const o = {
    name: "Alesa",
    age: 26,
    isOldEnoughToDrive: true
};
console.log(o);
function greeter(input) {
    return `Hi ${input}`;
}
for (const animal of animals) {
    console.log(greeter(animal));
}
