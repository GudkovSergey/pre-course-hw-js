
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const result = colors.filter(i=>i==="черный"|| i==="красный"|| i==="желтый").join("-");
    
    return result
}

console.log(createColorString());

