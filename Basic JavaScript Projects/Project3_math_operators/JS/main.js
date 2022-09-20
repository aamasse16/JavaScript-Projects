alert("js is working") // this is my check to make sure js is linked properly and is working

function mathFunction() { //this function is multiple math operators and will only be displayed when the button is clickced
    var addition = 5 * 5 + 12 - 15 
    document.getElementById("math").innerHTML = "5 * 5 + 12 - 15 = " + addition
}

window.onload = function subtractionFunction() { //everything in this fuction will be displayed once the page loads
    var subtraction = 12 - 4
    document.getElementById("sub").innerHTML= "12 - 4 = " + subtraction // simple subrtaction

    var multiplication = 5 * 8
    document.getElementById("mul").innerHTML = "5 * 8 = " + multiplication // simple multiplicaton

    var divide = 25 / 5
    document.getElementById("divide").innerHTML = "25 / 5 = " + divide // simple division

    var remainder = 6 % 4
    document.getElementById("mod").innerHTML = "If you divide 6 by 4 you get a remainder of " + remainder // simple use of the remainder operator or modulos

    var negation = 9
    document.getElementById("neg").innerHTML = -negation // use of negation or making a number negative

    var inc = 5
    inc++
    document.getElementById("inc").innerHTML = "if you icrement 5 by 1 u get " + inc //incrementation

    var dec = 4
    dec--
    document.getElementById("dec").innerHTML = "if you decrement 4 by 1 u get " + dec //decrementation

    var e = Math.E
    document.getElementById("e").innerHTML = "Eulers number is " + e //use of a math object
}

window.alert(Math.random() * 10) // use of math.random
