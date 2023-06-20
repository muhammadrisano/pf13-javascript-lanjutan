// function penjumlahan(val1, val2, callback) {
//     setTimeout(() => {
//       const result = val1 + val2;
//       callback(result);
//     }, 1000);
//   }

const penjumlahan = (val1 ,val2)=>{
    return new Promise((resolve, reject)=>{

        if(isNaN(val1) || isNaN(val2)){
            reject('parameter harus number')
        } 
        setTimeout(()=>{
            const hasil = val1 + val2;
            resolve(hasil)
        },2000)
    })
}

penjumlahan(10, 20)
.then((res)=>{
    console.log('ini then yg di jalankan')
    console.log(res)
})
.catch((err)=>{
    console.log('ini catch yg di jalankan')
    console.log(err)
})



