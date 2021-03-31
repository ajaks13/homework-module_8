let content = prompt("Введите значение")
let content2 = (+content)

if (content2 !== content2) {       // тут же проверяем на NaN
    console.log("Упс, кажется, вы ошиблись")
} else if (content % 2 == 0) {
    console.log(`Число - ${content2} - четное`)
} else {
   console.log(`Число - ${content2} - нечетное`)
}
