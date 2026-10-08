function product() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = {
        productId: 1,
        productName: "apple",
        prductPrice: 120,
      };

      resolve(product);
    }, 3000);
  });
}

function discountOffer(product) {
  var promise = new Promise((resolve, reject) => {
    var offer = 50;
    const prductPrice = product.price;
    let discountPrice = prductPrice - (prductPrice * offer) / 100;
    product.prductPrice = discountPrice;

    resolve(product);
  });

  return promise;
}

function couponcodeValidation(couponCode, product) {
  let day = new Date().getDay();
  if (couponCode && couponCode == "THUR10" && day == 4)
    product.prductPrice = product.prductPrice - 10;

  return Promise.resolve(product);
}

product()
  .then((productdata) => {
    discountOffer(productdata)
      .then((discountProduct) => {
        couponcodeValidation("THUR10", discountProduct)
          .then((data) => console.log("final product Data===>", data))
          .catch((couponError) => console.log("coupon Error"));
      })
      .catch((discountError) => console.log("Discount Error"));
  })
  .catch((productError) => console.log("product error"));
