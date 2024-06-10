const API = "https://dummyjson.com/products?limit=194";

const getData = async (url) => {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("hidden");
  const response = await fetch(url);
  const data = await response.json();
  overlay.classList.add("hidden");
  return data;
};

const mostPopular = document.querySelector("#most-popular");
const discount = document.querySelector("#discount");
const discountTemplate = document.getElementById("discount-template");
const popularTemplate = document.getElementById("most-popular-template");

const updateUI = (products) => {
  // Most popular
  products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6)
    .forEach((element) => {
      const clonePopular = popularTemplate.content.cloneNode(true);
      const title = clonePopular.querySelector(".card-popular-title");
      title.textContent = element.title;
      const img = clonePopular.querySelector(".popular-img");
      img.src = element.thumbnail;
      const oldPrice = clonePopular.querySelector(".card-popular-old-price");
      oldPrice.textContent = "Old Price: " + element.price + "$";

      const newPrice = clonePopular.querySelector(".card-popular-price");
      newPrice.textContent =
        "New Price: " +
        (
          element.price -
          (element.price * element.discountPercentage) / 100
        ).toFixed(2) +
        "$";
      const rating = clonePopular.querySelector(".card-popular-rating");
      rating.textContent = element.rating + "/5";

      const sale = clonePopular.querySelector("#sale");

      sale.textContent = element.discountPercentage + "%";

      const read = clonePopular.querySelector(".read");
      read.href = `./about.html?product=${element.id}`;

      mostPopular.appendChild(clonePopular);
    });

  // On Sale
  products
  .sort((a, b) => b.discountPercentage - a.discountPercentage)
  .slice(0, 6)
  .forEach((element) => {
    const clonePopular = popularTemplate.content.cloneNode(true);
    const title = clonePopular.querySelector(".card-popular-title");
    title.textContent = element.title;
    const img = clonePopular.querySelector(".popular-img");
    img.src = element.thumbnail;
    const oldPrice = clonePopular.querySelector(".card-popular-old-price");
    oldPrice.textContent = "Old Price: " + element.price + "$";

    const newPrice = clonePopular.querySelector(".card-popular-price");
    newPrice.textContent =
      "New Price: " +
      (
        element.price -
        (element.price * element.discountPercentage) / 100
      ).toFixed(2) +
      "$";
    const rating = clonePopular.querySelector(".card-popular-rating");
    rating.textContent = element.rating + "/5";

    const sale = clonePopular.querySelector("#sale");

    sale.textContent = element.discountPercentage + "%";

    const read = clonePopular.querySelector(".read");
    read.href = `./about.html?product=${element.id}`;

    discount.appendChild(clonePopular);
  });

  // Discounted products
};

getData(API)
  .then((data) => updateUI(data.products))
  .catch((error) => console.error(error));
