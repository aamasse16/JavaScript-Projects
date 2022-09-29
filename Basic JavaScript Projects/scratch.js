alert ("js is workin")

alert(document.getElementById("p1").innerHTML)

let ages = [4, 7, 48, 18, 78, 32]
let numOver32 = ages.some(myFunction)

document.getElementById("some").innerHTML = numOver32
function myFunction(value, index, array) {
return value > 32
}