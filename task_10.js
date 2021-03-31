function checkNum(num) {
    if (num <= 1000) {
        let flag = true
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = false
                break
            }
        }
        if (flag == true){
            return console.log('Простое число')
        } else {
            return console.log('Составное число')
        }
    } else {
        return console.log('Данные неверны')
    }
}

checkNum(100)