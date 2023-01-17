const animals: string[] = ["monkey", "orangutan", "gorilla", "goat", "giraffe"];

console.log(animals);

const object: { name: string; age: number; isOldEnoughToDrive: boolean } = {
    name: "Alesa",
    age: 26,
    isOldEnoughToDrive: true
};

console.log(object);

function input(input: string): string {
    return `Hi ${input}`;
}

for (const animal of animals) {
    console.log(input(animal));
}