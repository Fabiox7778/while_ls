let i = 0;
let result = 1;

while (result <= 30) {
    result+= i;
    i++;
    console.log(`${result} + ${i}`)
}
console.log(`soma final foi: ${result + i}, números usados foram ${i}`)