const input = require('readline-sync')

var dataJumlah = 0
var data = input.question("Masukkan angka untuk dijumlahkan: ")
var dataAngka = parseInt(data)

if (data === '=') {
    dataJumlah
} else {
    dataJumlah += dataAngka
}

console.log("Hasil jumlah: " + dataJumlah)