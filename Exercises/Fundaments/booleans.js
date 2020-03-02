let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!true) //False
console.log(!!true) //True

console.log('True...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('False...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('To finish!...')
console.log(!!('' || null || 0 || ' '))

let name = 'Ícaro' //If it's empty, return unknow
console.log(name || 'Unknow')