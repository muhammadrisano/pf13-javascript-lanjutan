const ajax = new XMLHttpRequest()
ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')
ajax.send()

ajax.onreadystatechange = ()=>{
    if(ajax.status === 200){
        const hasil = JSON.parse(ajax.responseText)
        hasil.map((item)=>{
            console.log(`Nama: ${item.name}`)
            console.log(`Nomor HP: ${item.phone}`)
        })
    }else{
        console.log('ada error')
    }
}

getDataUser('GET','https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    // res.map
})
.catch((err)=>{
    console.log(err)
})