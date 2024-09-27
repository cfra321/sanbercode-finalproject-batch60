//SOAL 1 
function cetakFunction() {
    return "Hallo Nama saya John";
}

console.log(cetakFunction());


//SOAL 2
function myFunction (angka1,angka2){
    return angka1+angka2
}

let angka1 = 20
let angka2 = 7

let output = myFunction(angka1, angka2)
console.log(output)

//SOAL 3
const Hello = () => "Hello";

console.log(Hello()); 

//SOAL 4
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}

console.log(obj.bahasa);

//SOAL 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)


//SOAL 6
let buahArray = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
];

let buahTanpaBiji = buahArray.filter(buah => buah.adaBijinya === false);

console.log(buahTanpaBiji);

//SOAL 7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 
 const { name, brand, year } = phone;
 
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year)

//SOAL 8
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = { 
    ...dataBukuTambahan,
    ...buku
}
  // kode diatas ini jangan di rubah atau di hapus sama sekali
  
  // kode di bawah ini jangan dirubah atau dihapus
  console.log(objOutput) 


//SOAL 9
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
    }
    
    const functionObject = (param) => { return param }

    console.log(functionObject(mobil));
