function parityСheck (array) { // Parity check - проверка на четность
let oddIndex = 0
let evenIndex = 0

    array.forEach((item, i) => {
        if(i & 1){
            evenIndex++
        } else {
            oddIndex++
        }
    })

    return console.log(`Четных элементов - ${evenIndex}, Нечетных - ${oddIndex}`)
}

parityСheck(['1', 'f', '4', 'b', null, true, undefined, 50])