function sentenceFunction() {//made a fucntion with 5 variables and will concatenate the first 4 into 1 that will be the final var
    var part1 = "This is "
    var part2 = "a part "
    var part3 = "of a "
    var part4 = "whole sentence."
    var sentence = part1.concat(part2, part3, part4)
    document.getElementById("concat").innerHTML = sentence
}

function sliceFunction() {//made function that slices a string then converts the slice to uppercase
    //and then searches the original string for "Luis"
    var sentence1 = "Luis is the worst COD player I've ever seen"
    var section = sentence1.slice(12,28)
    var sectionUpper = section.toUpperCase()
    var sectionSearch = section.search("Luis")
    document.getElementById("slice").innerHTML = sectionUpper
    document.getElementById("search").innerHTML = sectionSearch
}

function toStringFunction() {//made function that converts a number to a string
    x = 376
    document.getElementById("toString").innerHTML = x.toString()
}

function percisionFunction() {//made function that give the var z to the percision that i decide
    var z = 1784.9886623916740976
    document.getElementById("per").innerHTML = z.toPrecision(10)
}

function fixedFunction() {//made function that only give 5 numbers after the decimal point
    var a = 4.3323556
    document.getElementById("fixed").innerHTML = a.toFixed(5)
}

function primFunction() {//made function that gives the primative value of a var
    var b = "primative"
    document.getElementById("prim").innerHTML = b.valueOf()
}