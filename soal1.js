const input = require('readline-sync')

var nilai = input.questionInt("Masukkan nilaimu di sini: ")

if (nilai >= 90) {
    console.log('Nilai Anda A')
} else if ((nilai >= 80) && (nilai < 90)) {
    console.log('Nilai Anda B')
} else if ((nilai >= 70) && (nilai < 80)) {
    console.log('Nilai Anda C')
} else if ((nilai >= 60) && (nilai < 70)) {
    console.log('Nilai Anda D')
} else {
    console.log('Nilai Anda E')
}