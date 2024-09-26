//SOAL 1
for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Jawaban soal 1");
//SOAL 2
for (i = 0; i < 10; i++) {
  if (i % 2) console.log(i);
}

console.log("Jawaban soal 2");

//SOAL 3
for (i = 0; i < 10; i++) {
  if (i % 2 === 0) console.log(i);
}

console.log("Jawaban soal 3");

//SOAL 4
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);
console.log("Jawaban soal 4");

//SOAL 5
let array2 = [5, 2, 4, 1, 3, 5];
console.log(array2.sort());
console.log("Jawaban soal 5");

//SOAL 6
let array3 = [
  "selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];
for (i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}
console.log("Jawaban soal 6");

//SOAL 7
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 === 0) {
    console.log(array4[i]);
  }
}
console.log("Jawaban soal 7");

//SOAL 8
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];

console.log(kalimat.join(" "));
console.log("Jawaban soal 8");

//SOAL 9
var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);
console.log("Jawaban soal 9");
