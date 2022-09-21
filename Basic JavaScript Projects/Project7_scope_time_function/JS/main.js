alert("js is working")//check to see if js is linked and working
var x = 21//making a global var

function localFunction() {//making a function that will have a local var
     var num1 = 16
    console.log (x + num1)//using local var and global var to do math

}
localFunction()//calling localFunction
function globalFunction() {//making a function that will use the global var and try to use local var but will fail
    console.log (x + num1)

}
globalFunction()//calling globalFunction

function dateFunction() { //making a function that will only display if the current time is earlier than 12
    if (new Date().getHours()< 12) {
    document.getElementById("date").innerHTML = "How are you today?"
    }
}

function ifFunction() { //making a function that uses if, else if, and else based on a var value
    var X = 3
    if (X < 5) {
        document.getElementById("input").innerHTML = "X is less than 5"
    }
    else if (X > 5) {
        document.getElementById("input").innerHTML = "X is greater than 5"
    }
    else
        document.getElementById("input").innerHTML = "X is equal to 5"
}

function oldEnoughFunction() {//fucntion to check the age of a person and print onr of 2 outputs
    age = document.getElementById("age_input").value
    if (age >= 18) {
        answer = "You are old enough to play!"
    }

    else {
        answer = "Sorry you are not old enough to play :("
    }
    document.getElementById("output").innerHTML = answer
}

function Time_function() { //function that checks current time and uses thaat time to print one of 3 possible strings
    var Time = new Date().getHours()
    var Reply
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}