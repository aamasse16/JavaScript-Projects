function callLoop() {//made a function with a while loop inside
    let num = ""
    let X =1
    while (X < 11) { //loop counts to 10
        num += "<br>" + X
        X++
    }
    document.getElementById("loop").innerHTML = num
}

let word = "words"//using .length to measure my string
let wordLength = word.length

document.getElementById("str").innerHTML = wordLength

let players = ["Erling Haaland", "John Stones", "Phil Foden", "KDB",]//made a for loop to list out player names on dif lines
let content = ""
let y
function forLoop() {
    for (y = 0; y < players.length; y++) {
        content += players[y] + "<br>"
    }
    document.getElementById("List_of_players").innerHTML = content
}

function arrayFunction() {// made an array and then pulled data from array and put it in my string
    let smell = []
    smell[0] = "awful"
    smell[1] = "great"
    smell[2] = "decent"
    document.getElementById("array").innerHTML = "Today you are smelling "
    + smell[0] + "."
}

function constantFunction() {// made a function with a object useing const  
    const gpu = {type:"3090", brand:"Nvidia", series:"30-series"}
    gpu.price = "$1500"
    gpu.type = "3080 ti"
    document.getElementById("constant").innerHTML = "You want an " + gpu.brand
    + " " + gpu.type + " for " + gpu.price + "?"
}

let p = returnFunction(5, 3)//used return to print my math function

function returnFunction(x, z) {
    return x + z
}
document.getElementById("return").innerHTML = p

let player = {//made an object using let and printed the properties using a method/funciton
    name: "Erling Haaland",
    num: "9",
    age: "22",
    description : function() {
        return this.name + " is a " + this.age + " year old soccer player and he wears the number " + this.num + " jersy."
    }
}
document.getElementById("erling").innerHTML = player.description()

let text = ""//made a for loop and used a break and then changed it to a continue
for(let i = 0; i < 5; i++) {
    if(i === 3) continue
    text += i + "<br>"
}
document.getElementById("break").innerHTML = text