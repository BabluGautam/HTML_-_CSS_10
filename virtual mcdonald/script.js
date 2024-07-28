// // // localStorage.setItem('favoriteColor', 'blue');


// // let color = localStorage.getItem('favoriteColor');
// // console.log(color); // Outputs: blue

// // localStorage.clear();



// // index.js
// // let API_KEY = "API_KEY"
// // let container = document.getElementById("container")

// // function getData() {
// //   let searchParam = document.getElementById("searchParam").value

// //   // get the data
// //   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}`)
// //     .then(function (res) {
// //       return res.json()
// //     })
// //     .then(function (res) {
// //       displayData(res.Search)
// //     })
// //     .catch(function (err) {
// //       console.log(err)
// //     })
// // }

// // function displayData(moviesList) {
// //   container.innerHTML = ""

// //   if (!moviesList || moviesList.length === 0) {
// //     let notFoundDiv = document.createElement("div")
// //     notFoundDiv.textContent = "No Results Found"
// //     container.appendChild(notFoundDiv)
// //   } else {
// //     moviesList.map((movie) => {
// //       let movieCard = document.createElement("div")
// //       movieCard.className = "card"

// //       // Create Image
// //       let posterElement = document.createElement("img")
// //       posterElement.src = movie.Poster

// //       // Create Title
// //       let titleElement = document.createElement("p")
// //       titleElement.textContent = "Title : " + movie.Title

// //       // Create Year
// //       let yearElement = document.createElement("p")
// //       yearElement.textContent = "Year : " + movie.Year

// //       // Create IMDB ID;
// //       let idElement = document.createElement("p")
// //       idElement.textContent = "IMDB-ID : " + movie.imdbID

// //       // Create Type
// //       let typeElement = document.createElement("p")
// //       typeElement.textContent = "Type : " + movie.Type

// //       movieCard.append(
// //         posterElement,
// //         titleElement,
// //         yearElement,
// //         idElement,
// //         typeElement
// //       )

// //       movieCard.addEventListener("click", function (e) {
// //         localStorage.setItem("imdbID", movie.imdbID)
// //         location.href = "moviedetails.html"
// //       })

// //       container.append(movieCard)
// //     })
// //   }
// // }

// // index.js
// let main = document.getElementById("main")
// let URL = `https://fakestoreapi.com/products`

// const init = async () => {
//   try {
//     let res = await fetch(URL)
//     let data = await res.json()
//     displayData(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// init()

// const displayData = (data) => {
//   data.forEach(function (product) {
//     let productCard = document.createElement("div")
//     productCard.className = "product-card"

//     let productImg = document.createElement("img")
//     productImg.src = product.image

//     let title = document.createElement("p")
//     title.innerText = product.title

//     let price = document.createElement("p")
//     price.innerText = "INR : " + product.price

//     productCard.append(productImg, title, price)

//     main.append(productCard)
//   })
// }

async function fetchUserData(url) {
  try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
  } catch (error) {
      console.error( error);
  }
}

fetchUserData('https://fakestoreapi.com/products');