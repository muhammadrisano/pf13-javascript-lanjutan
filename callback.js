function penjumlahan(val1, val2, callback) {
  setTimeout(() => {
    const result = val1 + val2;
    callback(result);
  }, 1000);
}

// console.log("perintah 1");
penjumlahan(10, 15, function (hasil) {
  const hasilPenjumlahan = hasil 
//   pengurangan(hasilPenjumlahan, 100, function (hasil) {});
});
// console.log("perintah 3");

//   const biodata = ['ngoding', 'joging']
//   biodata.map(function(item){
//     console.log(item)
//   })
