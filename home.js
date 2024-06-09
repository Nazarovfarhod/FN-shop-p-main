import { getData } from "./request.js";

const discount = document.getElementById("discount-template");
const popular = document.getElementById("most-popular-template");

const updateUI = (products) => {
  const clonediscount = discount.content.cloneNode(true);
  const clonepopular = popular.content.cloneNode(true);

  // Most popular

  const mostPopular = products.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(mostPopular);
};

updateUI();
