function product() {

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      var product = {
        productId: 1,
        productName: "apple",
        prductPrice: 120,
      };

      resolve(product);
    }, 3000);

  });

  return promise;
}

function discountOffer() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(25)
    },500)
  })

  return promise
}

function couponcodeValidation() {

  return Promise.reject("no coupon available")
}

function customerOrder(data) {
  console.log("customer start to buy the product", data)
}


Promise.all(
  [
    product(),
    discountOffer(),
    couponcodeValidation()
  ]
).then(
  (data) => customerOrder(data)
).catch(e => console.error("error===>", e))