let container = document.getElementById("container");
let btn=document.getElementById("btn")



let data = [];

function fetchuser(){
  fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    displayData(res);
  });
}


function displayData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = el.title;

    let h1 = document.createElement("h1");
    h1.innerText = `₹${el.price}`;

    let h3=document.createElement("h3")
    h3.innerText=el.description

    let img=document.createElement("img")
    img.src=el.image;
    img.style.width="100px"



    div.append(p,h1,h3,img)
    container.append(div)
  });
}
