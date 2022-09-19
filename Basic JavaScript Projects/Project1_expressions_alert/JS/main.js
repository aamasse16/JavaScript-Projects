window.alert("Hey welcome to my JS learning site!")//telling th browser to use an alert box when the website is first accessed and to print this text in the box

var Sent1 = "This is the beginning of the string, ", Sent2 = "and this is the end of the string."//creating 2 strings

document.write(Sent1 + Sent2)//Concatenating the 2 strings above

var A = 5, B = 6, C = 7 //creating 3 variables

document.write(C + B) //telling the browser to print the sum of C and B (and expression)

function displayDate() {
    document.getElementById("demo").innerHTML = Date()
}