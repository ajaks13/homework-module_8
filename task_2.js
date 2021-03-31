let x = 10>15

console.log(x)
console.log(typeof(x))

if (typeof x === 'number') {
    console.log(`${x} — число`)

} else if (typeof x === 'string') {
    console.log(`${x} — строка`)

} else if (typeof x === 'boolean') {
    console.log(`${x} — булево значение`)

} else {
    console.log(`${x} — Тип данных не определён`)
}