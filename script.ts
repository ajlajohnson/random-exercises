interface Pet {
    name: string;
    hasFourLegs: boolean;
    type: string;
    tricks: string;
    age: number;
}

let pets: Pet[] = [
    { name: "Charlie", hasFourLegs: true, type: "cat", tricks: ["lights self on fire", "eats a lot"], age: 3 },
    { name: "Mayor", hasFourLegs: true, type: "dog", tricks: ["snoot", "spin", "down", "roll over", "wait"], age: 1 },
    { name: "Jake", hasFourLegs: false, type: "ape", tricks: ["play dead", "speak", "duplication"], age: 26 },
    { name: "Bubbles", hasFourLegs: false, type: "fish", tricks: ["makes bubbles", "play dead"], age: 2 }
];


const returnTrickPets = (array: Pet[]): Pet[] => {
    let emptyArray: Pet[] = [];
    array.forEach((pet) => {
        if (pet.tricks.length > 2) {
            return emptyArray.push(pet)
        }
    });
    return emptyArray
}