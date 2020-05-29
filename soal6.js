const input = require('readline-sync')

function rekursif(x, y) {
    if ((x == y) || (x < y)) {
        return 0
    } else {
        return x + rekursif(x - y, y)
    }
}

var bil1 = input.questionInt("Masukkan angka pertama: ")
var bil2 = input.questionInt("Masukkan angka kedua: ")

total = rekursif(bil1, bil2)

console.log("Total fungsi rekursif: " + total)