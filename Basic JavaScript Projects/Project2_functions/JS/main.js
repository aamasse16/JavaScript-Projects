alert("js is working") //im using this alert just to ensure that my js is linked properly and workin

function myFunction() { //making a function

    var sentence = "I am learing so much" //starting my sentence
    sentence += " from this course!"  // using += to concatenate

    document.getElementById("o").innerHTML = sentence //telling my js where in the html to put my new string
}

var myText = document.getElementById("text") // getting text from my p element with the ip = text
    myText.style.color = "red" // making my font red

function thisFunction(num1, num2) { // this function will return num1 times num2
    return num1 * num2
}

document.getElementById("i").innerHTML = thisFunction(4, 4)

