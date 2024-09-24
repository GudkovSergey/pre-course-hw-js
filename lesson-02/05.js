let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newpassport = Object.assign({},passport);
newpassport.name = "Ivan";
console.log(passport.name);
console.log(newpassport.name);