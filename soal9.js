const input = require('readline-sync')

var jumlahData = input.questionInt("Masukkan jumlah data: ")
var dataArr = []
var undoubledArr = []

for (var i = 1; i <= jumlahData; i++) {
    var data = input.question("Masukkan data ke-" + i + ": ")
    dataArr.push(data)
}

// Saat masih ada yang bernilai ganda maupun tidak
console.log("Data-data tersebut: ")
console.log(dataArr)

for (var j = 0; j < dataArr.length; j++) {
    for (var k = j + 1; k < dataArr.length; k++) {
        if (dataArr[j] === dataArr[k]) {
            dataArr.splice(k, 1)
        }
    }
    undoubledArr.push(dataArr[j])
}

// Saat sudah tidak ada data yang bernilai ganda
console.log("Jadi, data-data tersebut jika tidak ada yang bernilai ganda adalah ")
console.log(undoubledArr)