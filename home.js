const discount = document.getElementById("discount");
const mostPopular = document.getElementById("most-popular");

const updateUI = (products) => {
  const clonediscount = discount.content.cloneNode(true);
  const clonepopular = mostPopular.content.cloneNode(true);

  // Most popular

  const mostPopular = products.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log(mostPopular);
};
