let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportadress = Object.assign({},passportWithAddress);
passportadress.address.city = "Bobryisk";
console.log(passportadress.address.city);
console.log(passportWithAddress.address.city);