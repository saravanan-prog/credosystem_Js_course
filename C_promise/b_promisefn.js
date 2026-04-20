function product() {
  let productPrice = 5000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productPrice);
    }, 3000);
  });
}

function offer(price) {
  let offerPercentage = 3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let offerPrice = (price * 8) / 100;
      resolve(offerPrice);
    }, 4000);
  });
}




product()
  .then((price) =>
    offer(price).then((offerAmt) => {
      console.log(offerAmt);
    }),
  )
  .catch((error) => console.log(error));
