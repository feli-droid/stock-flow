items = [];

document.addEventListener("product-submit", (event) => {
  const item = event.detail;
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
});

const URL_console="https://stock-flow-226d2-default-rtdb.firebaseio.com/";
const user={
  name:"andres felipe",
  apellido:"rojas avendaño",
  username:"felis",
  pasworld:"ajkfhpfhbfuob"
}

const https_cliente= fetch(`${URL_console}/user.json`,{
  method:"POST",
  headers:{
    "content-type":"applicacion/json"
  },
  body:JSON.stringify(user)
})
const res= https_cliente.then(data=>data.json());
res.then(data => console.log).catch(err=>console.error)