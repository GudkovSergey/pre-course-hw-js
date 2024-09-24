let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newPassport = Object.assign({},passport);
newPassport.name = "ivan";
console.log(passport.name);
console.log(newPassport.name);