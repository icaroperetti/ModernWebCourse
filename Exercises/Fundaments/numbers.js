//Pesos
const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))

//"Notas"
const rating1 = 9.871
const rating2 = 6.871

//Total
const total = rating1 * weight1 + rating2 * weight2

//Média
const grade = total / (weight1 + weight2)

console.log(grade.toFixed(2))
console.log(grade.toString(2)) //Putting number 2, it's converted to binary.

console.log(typeof grade)