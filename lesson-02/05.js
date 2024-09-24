let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newpassport = passport;
newpassport.name = "ivan";
console.log(passport.name);
console.log(newpassport.name);