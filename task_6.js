// Вариант на проверку одинаковых элементов в массиве.
// let arr = [1, 2, 3, 4, 5, 6, 3, 8]
// arr = arr.filter(function (item, index, array) {
//     return index !== array.indexOf(item) || index !== array.lastIndexOf(item);
// });
// console.log(arr);
// if (arr.length == 0) {
//     console.log(false);
// }
// else {
//     console.log(true);
// }

// Вариант на проверку все ли элементы массива одинаковые.
let arr = [7, 7, 7];
let result = true;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] != arr[j]) result = false;
    }

}
if (result == false) {
    console.log('false');
} else {
    console.log('true');
}