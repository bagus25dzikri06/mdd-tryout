const input = require('readline-sync')

var tahun1 = input.questionInt("Masukkan tahun pertamamu di sini: ")
var tahun2 = input.questionInt("Masukkan tahun keduamu di sini: ")
var tahunKabisat = []

for (var i = tahun1; i <= tahun2; i++) {
    if (i % 4 == 0) {
        tahunKabisat.push(i)
    }
}

console.log("Jadi, tahun-tahun kabisatnya adalah: ")
console.log(tahunKabisat)