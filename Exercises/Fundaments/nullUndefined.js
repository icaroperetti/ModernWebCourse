let value //Not inicializated
console.log(value) //Undefined

value = null //No value
console.log(value)
    //console.log(value.toString()) // Error!

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined //Don't do this
console.log(product.price)
console.log(product)

product.price = null //No Price
console.log(!!product.price)
console.log(product)