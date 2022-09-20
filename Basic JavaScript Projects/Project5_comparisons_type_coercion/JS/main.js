document.write(typeof 8) // finding what type of var 8 is 

document.write("100" + 60)// writting the sting "100" and added 60 to it which will be turned into a string to make "10060"

document.getElementById("test").innerHTML = isNaN("this should be true") //using NaN to print true because my sting is not a number

document.getElementById("test1").innerHTML = isNaN('390')// using NaN to print false because 390 is a number

document.getElementById("test2").innerHTML = 0/0 // using 0/0 to print NaN because you cant divide nothing by nothing

document.getElementById("pos_infin").innerHTML = 3E310 // printing positive infinity

document.getElementById("neg_infin").innerHTML = -3E310// printing negative infinity

document.write (10 > 5)// using > to print true

document.write (10 < 5)// using < to print false

console.log(10 < 5)// using < to print false to the console

document.write (10 == 10)// using == to print true

document.write (10 == 100)// using == to print false

var A = 10//creating variables
var B = 10
var C = "10"
var D = "11"

document.write (A === B)//using the variables i made to pring true and false using ===, && and ||

document.write (A === D)

document.write (A === C)

document.write (C === D)

document.write (5 > 2 && 6 > 3)

document.write (5 < 2 && 6 > 3)

document.write (5 > 10 || 6 > 3)

document.write (5 > 10 || 3 > 6)

function notFunction() { // making a function to test the ! in order to see if somthing is false
    document.getElementById("not").innerHTML = !(10 > 20)
}


