const janji = "";

const isiPromiseGetDataUser = function(resolve, reject){
    const user = [
        {name: 'risano', email: 'risano@mgail.com'},
        {name: 'budi', email: 'budi@gmail.com'}
    ]
    resolve(user)
}




function getDataUser(){ 
    return new Promise(isiPromiseGetDataUser)
}


const cobaGetUser = getDataUser()
cobaGetUser
.then((res)=>{
    
})


const resultUser = new Promise(function(resolve, reject) {
    const user = [
      { name: "risano", email: "risano@mgail.com" },
      { name: "budi", email: "budi@gmail.com" },
    ];
    resolve(user)
  });

resultUser.then((res) => {
  console.log(res);
});
