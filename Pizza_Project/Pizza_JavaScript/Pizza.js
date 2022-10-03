function getReceipt () {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>"
    var runningTotal = 0
    var sizeTotal = 0
    var sizeArray = document.getElementsByClassName("size") //finding selected size from the array
    for (var i = 0; i <sizeArray.length; i++) {//
        if (sizeArray[i].checked) {
            var selecetedSize = sizeArray[i].value
            text1 = text1 + selecetedSize + "<br>"
        }
    }
    if (selecetedSize === "Personal Pizza") { //setting the values for each size of pizza and assigning it to selected size
        sizeTotal = 6
    } else if (selecetedSize === "Small Pizza") {
        sizeTotal = 8
    } else if (selecetedSize === "Medium Pizza") {
        sizeTotal = 10
    }else if (selecetedSize === "Large Pizza") {
        sizeTotal = 14 
    }else if (selecetedSize === "Extra Large Pizza") {
        sizeTotal = 16
    }
    runningTotal = sizeTotal //adding selected size to total 
    console.log(selecetedSize + " = $"+sizeTotal+".00")
    console.log("size text1: "+text1)
    console.log("subtotal: $"+runningTotal+".00")
    //those var will be passed on to each function
    getTopping(runningTotal,text1)
}

function getTopping(runningTotal,text1) {//this part is were toppings will be added based on what
    //is selected and the first one is free
    var toppingTotal = 0
    var selecetedTopping = []
    var toppingArray = document.getElementsByClassName("toppings")
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selecetedTopping.push(toppingArray[j].value)
            console.log("selected topping item: ("+toppingArray[j].value+")")
            text1 = text1 + toppingArray[j].value + "<br>"
        }
    }
    var toppingCount = selecetedTopping.length
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1)
    } else {
        toppingTotal = 0
    }
    runningTotal = (runningTotal + toppingTotal)//this section is where the final calculations will be done
    console.log ("total selected topping items: " + toppingCount)
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00")
    console.log("topping text1: "+text1)
    console.log("Purchase Total: "+"$"+runningTotal+".00")
    document.getElementById("showText").innerHTML = text1 //here is where the text will be printed on screen
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+ runningTotal+".00"+"</strong><h3>"
}