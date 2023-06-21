
// const reportError = new Error("terjadi kesalahan")
// console.log(reportError)

// const biodata = {
//     name: 'risano',
//     sayHelo: ()=>{
//         console.log('helo world')
//     }
// }

class Biodata {
    
    constructor(parName, parAge){
        // console.log(`constructor dijalankan dengan nama ${parName}`)
        this.name = parName
        this.age = parAge || 17
    }
    
    sayHelo(youName){
        console.log(`helo apa kabar ${youName} perkenalkan nama saya ${this.name}`)
    }
    showAge(){
        console.log(`umur saya adalah ${this.age}`)
    }
    then(callback){
        callback({name: this.name, age: this.age} )
    }
}

const name1 = new Biodata("budi",20)
// const name2 = new Biodata("putri", 18)

// name1.sayHelo('toni')
name1
.then((result)=>{
    console.log(result)
})
// name1.showAge()
// name2.sayHelo()
// console.log(risano.name)