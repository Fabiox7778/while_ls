i = 0;
result = 0;

while (result <= 40) {
    result+= i;
    i++;
    console.log(`${result} + ${i}`)
}
console.log(`soma final foi: ${result}, números usados foram ${i}`)