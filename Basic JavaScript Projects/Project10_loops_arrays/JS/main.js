function callLoop() {
    let num = ""
    let X =1
    while (X < 11) {
        num += "<br>" + X
        X++
    }
    document.getElementById("loop").innerHTML = num
}