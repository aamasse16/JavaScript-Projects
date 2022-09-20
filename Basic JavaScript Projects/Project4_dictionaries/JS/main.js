function myDictionary() { //creating a dictionary function
    var players = { // this var is a kvp with players as the value and their numbers as the key
        9: "Erling Haaland",
        17: "KDB",
        47: "Phil Foden",
        20: "Bernardo Silva"
    }
    delete players[9] // deleting players[9]
    document.getElementById("Dictionary").innerHTML = players[9] //selecting players[9] which we just deleted will result in undefined
}