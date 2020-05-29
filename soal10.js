const input = require('readline-sync')

var dataNama = []
var jumlahDataNama = input.questionInt("Masukkan jumlah data orang: ")

for (var i = 1; i <= jumlahDataNama; i++) {
    //Memasukkan data nama dan usia
    var nama = input.question("Masukkan nama orang ke-" + i + ": ")
    var usia = input.questionInt("Masukkan usia nama ke-" + i + ": ")

    //Mem-filter data nama berdasarkan usia
    if (usia < 21) {
        var data = nama + " (" + usia + " tahun)"
        dataNama.push(data)
    }
}

//Menampilkan data nama yang berusia di bawah 21 tahun
console.log(dataNama)