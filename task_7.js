let array = ['1', 'f', '4', 'b', null, '1', '2']
let oddIndex = 0
let evenIndex = 0

array.forEach((item, i) => {
    if ((i + 1) & 1) {
        oddIndex++;
    } else {
        evenIndex++;
    }
});

console.log(`Четных элементов - ${evenIndex}, Нечетных - ${oddIndex}`)