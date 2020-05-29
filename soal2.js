const input = require('readline-sync')

//fungsi ganjil atau genap
function ganjilAtauGenap(num) {
    if (num % 2 == 0) {
        console.log("Bilangan " + num + " merupakan bilangan genap.")
    } else {
        console.log("Bilangan " + num + " merupakan bilangan ganjil.")
    }
}

var bil = input.questionInt("Masukkan bilangan: ")

//pengimplementasian fungsi ganjil atau genap
ganjilAtauGenap(bil)