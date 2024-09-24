let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportadress = structuredClone(passportWithAddress);

passportadress.address.city = "Bobryisk"
console.log(passportWithAddress.address.city);
console.log(passportadress.address.city);
