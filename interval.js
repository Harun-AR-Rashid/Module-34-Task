console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

let halima = 0;
const harunId = setInterval(() => {
    halima++;
    console.log(harunId, halima);
    if(halima > 7)
        clearInterval(harunId)


}, 2000)