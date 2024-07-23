let container = document.getElementById("container");

let data = [];

fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((res) => res.json())
  .then((json) => console.log(json));
displayData(data);

function displayData(data) {
data.forEach((jewelery) =>{
 let container = document.createElement("div");
});
}
