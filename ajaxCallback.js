const handleDataUser = (users) => {
    const hasil = users;
  hasil.map((item) => {
    console.log(`Nama : ${item.name}`);
    console.log(`Nomor Phone :  ${item.phone}`);
  });
}
const getDataUser = (method, url, callback) => {
  const ajax = new XMLHttpRequest();
  ajax.open(method, url);
  ajax.send();

  ajax.onreadystatechange = () => {
    if (ajax.status === 200) {
      const hasil = JSON.parse(ajax.responseText);
      callback(hasil);
    } else {
      console.log("ada error");
    }
  };
};



getDataUser("GET", "https://jsonplaceholder.typicode.com/users", handleDataUser);
