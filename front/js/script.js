fetch("http://127.0.0.1:5500/api/products")
  .then((response) => response.json())
  .then((data) => {

    let product = document.getElementById("items");

    // Products creation : loop to add each product to DOM
    for (i = 0; i < data.length; i++) {
      product.innerHTML += `
    <a href="./product.html?id=${data[i]._id}">
      <article>
        <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
        <h3 class="productName">${data[i].name}</h3>
        <p class="productDescription">${data[i].description}</p>
      </article>
    </a>`;
    }
  });
