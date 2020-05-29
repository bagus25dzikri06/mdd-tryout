const input = require('readline-sync')

//fungsi oengurutan angka
function compare(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    } else {
        return 0
    }
}

var arrAngka = []
var jumlahNilai = 0
var nilaiMaksimum, nilaiMinimum
var jumlahAngka = input.questionInt("Masukkan jumlah data angka: ")

for (var i = 1; i <= jumlahAngka; i++) {
    var dataAngka = input.questionInt("Data ke-" + i + ": ")
    arrAngka.push(dataAngka)
}

//pengurutan data angka
arrAngka.sort(compare)
    //angka maksimum
nilaiMaksimum = arrAngka[arrAngka.length - 1]
    //angka minimum
nilaiMinimum = arrAngka[0]

//menghitung total nilai dan rata-rata
for (var i = 0; i < arrAngka.length; i++) {
    jumlahNilai += arrAngka[i]
}

var rataRata = jumlahNilai / jumlahAngka

console.log("Nilai maksimum: " + nilaiMaksimum)
console.log("Nilai minimum: " + nilaiMinimum)
console.log("Nilai rata-rata: " + rataRata)