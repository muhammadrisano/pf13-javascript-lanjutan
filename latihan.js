// latiahn
// 1. buat sebuah function dengan nama gabungNama memiliki 2 parameter firsName dan lastName 
// dan dibuat dalam proses asyncronous (menggunakan setTimeOut) dan dihandle menggunakan promise
// 10 menit (sampai 11.19)

// gabungNama('risano', 'akbar) 
// output risano akbar


// const gabungNama =(fistName, lastName)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(fistName && lastName){
//                 const hasil = `${fistName} ${lastName}`
//                 resolve(hasil)
//             }else{
//                 reject('input salah')
//             }
            
//         }, 1000)
   
//     })
// }

// const result = gabungNama('risano', 'akbar')
// result
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// gabungNama('risano', 'akbar')
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

const gabungNama =(fistName, lastName)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(fistName && lastName){
                const hasil = `${fistName} ${lastName}`
                resolve(hasil)
            }else{
                reject('input salah')
            }
            
        }, 3000)
   
    })
}

const printApp = async()=>{
    try{
    console.log('perintah 1')
    const hasil = await gabungNama('risano', 'akbar')
    console.log(hasil)
    const hasil2 = await gabungNama('budi', 'tanjung')
    console.log(hasil2)
    console.log('perintah 4')

    }catch(err){
        console.log(err)
    }finally{
        console.log('applikasi selsai')
    }
    


}
printApp()