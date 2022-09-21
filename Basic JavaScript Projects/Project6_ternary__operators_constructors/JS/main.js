function voteFunction() { //this fuction is for the first button and it takes an imput then compairs it to the number 18 
//and if the input is less than it will print that you are too young to vote other wise it will print you are old enough to vote
    var age, canVote // creating variables
    age = document.getElementById("age").value//gets input from text box
    canVote = (age < 18)? "You are too young":"You are old enough"// compairs input to 18
    document.getElementById("vote").innerHTML = canVote + " to vote."//prints canVote based on the comparison
}

function vehicle(make, model, year, color) {// makes function called vehicle with 4 properties
    this.vehicle_make = make//uses "this" to assign "vehicle_''to the make model year and color"
    this.vehicle_model = model
    this.vehicle_year = year
    this.vehicle_color = color
}

var jack = new vehicle("Dodge", "Viper", 2020, "Red")// creates 3 new instances of our vehicle class
var emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var erik = new vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() { // this function prints the color model and year of eriks car
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + 
    " manufactured in " + erik.vehicle_year
}

function people(first, last, age, eye) { //makes function called people with 4 properties
    this.people_first = first //uses "this" to set placeholders for our values
    this.people_last = last
    this.people_age = age
    this.people_eye = eye
}

var aaron = new people ("Aaron", "Masse", 21, "Blue") //creates new 1 instance of our people class
function pplFunction() { // this function prints a small sentence using our new instance of people class
document.getElementById("ppl").innerHTML = aaron.people_first + " " + aaron.people_last + 
" is a " + aaron.people_age + " year old male with " + aaron.people_eye + " eyes."
}

function nestedFunction() {//creates out first fuction that will enhouse our nested function
    var num1 = 2 // makes a var and sets the default value to 1
    function incrementFunction(){ //creates new function nested inside of the first one
        document.getElementById("Nested_Function").innerHTML = (num1++)// gives js a place to insert the value of num1 after it goes through our nested function
    }
    incrementFunction()//calling the the nested function 3 times to increment our number 3 times
    incrementFunction()
    incrementFunction()
}