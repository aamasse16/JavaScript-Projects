//this var keeps track of whos turn it is
let activePlayer = 'X'
//this array stores an array of moves, we use this to determine win conditions
let selectedSquares = []

//this function is for placing an x or an o in a square
function placeXorO(squareNumber) {
    //this condition ensures a square hasnt been selected already
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        //this var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber)
        //this condition checks whos turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to X the X.png is palced in html
            select.style.backgroundImage = 'url("images/x.png")'
            //active player may only be X or O so if not X must be O
        } else {
            //if active player is not === to X then its equal to O
            select.style.backgroundImage = 'url("images/o.png")'
        }
        //squareNumber and activePlayer area concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer)
        //this calls a function to check for any win conditions
        checkWinConditions()
        //this condition is for changing the active player
        if (activePlayer === 'X'){
            //if active player is X change it to O
            activePlayer ='O'
            //if active player is anything other than 'X'
        } else {
            //change active player to X
            activePlayer = 'X'
        }
        //this fuunction plays palcement sound
        audio('./media/place.mp3')
        //this condition checks to see if its the computers turn
        if (activePlayer === 'O') {
            //this function disables clicking for computers turn
            disableClick()
            //this function waits 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn() }, 1000)
        }
        //returning true is needed for our computersTurn() fucntion to work
        return true
    }
    //this function results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false
        //this var stores a random number 0-8
        let pickASquare
        //this condition allows our loop to keep trying if a square is already selected
        while (!success) {
            //a random number 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9))
            //if the random number evaluated returns true the square hasnt been selected yet
            if (placeXorO(pickASquare)) {
                //this line calls the function
                placeXorO(pickASquare)
                //this changes our boolean and ends the loop
                success = true
            }
        }
    }
}

//this function parses the selectSquares array to search for a win condition
//drawLine(function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    //X 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    //X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    //X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    //X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    //X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    //X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    //X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine (100, 508, 510, 90)}
    //X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    //X 0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2X')) {drawWinLine(50, 100, 558, 100)}
    //O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    //O 6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    //O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    //O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    //O 2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    //O 6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine (100, 508, 510, 90)}
    //O 0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //this condition checks for a tie if none of the above conditions are met and 
    //9 squares are filled the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie.mp3')
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function() { resetGame() }, 500)
    }
    //this function checks if an array includes 3 strings. it is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 var will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 var we pass are all included in out array then
        //true is returned and out else if condition executes the drawLine() function
        if (a === true && b === true && c === true) {return true;}
    }
}