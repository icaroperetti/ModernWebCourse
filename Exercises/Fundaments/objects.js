const prod1 = {}
prod1.name = 'Mega Cell Phone'
prod1.price = 4500.00
prod1['Cool discount '] = 0.40 //Avoid attributes with space ( evitar atributos com espaço)

console.log(prod1) //Return the entire object
console.log(prod1.name) //Return the name

const prod2 = {
    name: 'Camiseta',
    price: 200.00
}

console.log(prod2, prod2.name, prod2.price)