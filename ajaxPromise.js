const getDataUser = (method, url) =>{
    return new Promise((resolve, reject)=>{
        const ajax = new XMLHttpRequest()
        ajax.open(method, url)
        ajax.send()
        
        ajax.onreadystatechange = ()=>{
            if(ajax.status === 200){
                const hasil = JSON.parse(ajax.responseText)
                resolve(hasil)
            }else{
               reject('ada error...')
            }
        }
    })
}




// getDataUser('GET','https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//    const hasil = res
//    hasil.map((item)=>{
//     console.log(`Nama : ${item.name}`)
//     console.log(`Nomor Phone : ${item.phone}`)
//    })
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


async function applikasiRun (){
    try{
        const hasil = await getDataUser('GET','https://jsonplaceholder.typicode.com/users')
        hasil.map((item)=>{
            console.log(`Nama : ${item.name}`)
            console.log(`Phone Number : ${item.phone}`)
        })
    
        const hasilGabungNama = await gabungNama('risano', 'akbar')
        console.log(hasilGabungNama)
    }catch(err){
        console.log(err)
    }
   
}

applikasiRun()