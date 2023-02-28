let carPrices = [9000, 4000, 16000, 15000, 22000, 37000, 70000, 55000, 40000]

    

let from = prompt('from') // 20000
let to = prompt('to') // 40000


let filtered = carPrices.filter(price => price >= from && price <= to)
console.log(filtered)














