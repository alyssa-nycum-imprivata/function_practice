// console.log("Hello World");

// let dogName = "Ada Grace"
// let ownerName = "Kristen"

// console.log(`${dogName} is owned by ${ownerName}`);

// dogName = "Raleigh"
// ownerName = "Margaret"

// console.log(`${dogName} is owned by ${ownerName}`);

// dogName = "Francis"
// ownerName = "Jane"

// console.log(`${dogName} is owned by ${ownerName}`);

function dogOwners (dogName, ownerName) {
    console.log(`${dogName} is owned by ${ownerName}`);
}

dogOwners("Ada Grace", "Kristen");
dogOwners("Raleigh", "Margaret");
dogOwners("Francis", "Jane");

dogOwners("Raleigh", "Margaret");
dogOwners();

function randomNumbers (num) {
    const newNumber = Math.random() * num;
    console.log(newNumber);
}

randomNumbers(5);
randomNumbers(5);

const addGreen = function (domElement) {
    const element = document.querySelector(domElement)

    element.classList.add("green")
}

addGreen("#impure");