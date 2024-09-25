// SOAL 1
let namalengkap = 'Kukuh Wicaksono';
console.log(namalengkap);



// SOAL 2
let word = 'JavaScript ';
let second = 'is ';
let third = 'awesome';

let outputGabunganVariable = word + second + third;
console.log(outputGabunganVariable);


// SOAL 3
let hello = 'Hello';
let world = 'World!!';

let output = `${hello} ${world}`;
console.log(output);


// SOAL 4
let panjang_PersegiPanjang = "8";
let lebar_PersegiPanjang = "5";

let strInt_panjang = parseInt(panjang_PersegiPanjang);
let strInt_lebar = parseInt(lebar_PersegiPanjang);

let kelilingPersegiPanjang = 2 * (strInt_panjang + strInt_lebar);
console.log(kelilingPersegiPanjang);



// SOAL 5
let sentences = 'wah javascript itu keren sekali'; 

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14); 
let thirdWords = sentences.substring(15, 18); 
let fourthWords = sentences.substring(19, 24); 
let fifthWords = sentences.substring(25); 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);


// SOAL 6
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence.substring(0, 1); 
var exampleSecondWord = sentence.substring(2, 4);
var thirdWord = sentence.substring(5, 10); 
var fourthWord = sentence.substring(11, 13); 
var fifthWord = sentence.substring(14, 16); 
var sixthWord = sentence.substring(17, 23); 
var seventhWord = sentence.substring(24, 26); 
var eighthWord = sentence.substring(27); 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);


// SOAL 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);



// SOAL 8 
var nilaiDoe = 91;

if (nilaiDoe >= 80) {
    console.log('A');
} else if (nilaiDoe >= 70) {
    console.log('B');
} else if (nilaiDoe >= 60) {
    console.log('C');
} else if (nilaiDoe >= 50) {
    console.log('D');
} else {
    console.log('E');
}


// SOAL 9
let angka = 2;

let angkaAngka = angka === 2 ? "angka nya 2" : "bukan angka 2";
console.log(angkaAngka);



// SOAL 10
var traffic_lights = "red";
switch (traffic_lights) {
    case 'red': 
        console.log('berhenti');
        break;
    case 'yellow': 
        console.log('hati-hati');
        break;
    case 'green': 
        console.log('berjalan');
        break;
    default: 
        console.log('error');
}
