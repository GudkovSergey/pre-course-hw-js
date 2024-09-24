let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let newPassport = structuredClone(passportMarried);
newPassport.married = true;
console.log(passportMarried);
console.log(newPassport);