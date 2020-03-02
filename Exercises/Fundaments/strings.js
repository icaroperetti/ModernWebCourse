const school = "Cod3r"

console.log(school.charAt(4)) //Returns the letter in the position 4
console.log(school.charAt(5)) //Return the last letter if the position doesn't exist

console.log(school.charCodeAt(3))
console.log(school.indexOf('3'))

console.log(school.substring(1))
console.log(school.substring(0, 3)) //First three letters

//Concatenation
console.log('School '.concat(school).concat("!"))
console.log('School ' + school + "!")

//Replace
console.log(school.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(' , ')) //Inserts into an array