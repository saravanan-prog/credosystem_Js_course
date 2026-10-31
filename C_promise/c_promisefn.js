function product() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = {
        productId: 1,
        productName: "apple",
        prductPrice: 120,
      };

      if(product)
        resolve(product);
      else
        reject("product is empty")

    }, 3000);
  });
}

function discountOffer(product) {

  var promise = new Promise((resolve, reject) => {

    if(product){
      var offer = 50;
      const prductPrice = product.prductPrice;
      let discountPrice = prductPrice - (prductPrice * offer) / 100;
      product.prductPrice = discountPrice;
      resolve(product);
    }
    else{
      reject("Product is an Error")
    }
    
  });

  return promise;
}

function couponcodeValidation(couponCode, product) {
  var promise = new Promise((resolve,reject)=> {
    if(couponCode && product){
      let day = new Date().getDay();
      if (couponCode && couponCode == "THUR10" && day == 4)
      product.prductPrice = product.prductPrice - 10;
      resolve(product)
    }
    else{
      reject("Please check your coupon code or product ")
    }
  })

  return promise
}
//Promise call
product().then((product) => {
  discountOffer(product).then((product) => {
    couponcodeValidation("THUR10", product).then((finalProductData) => {
      console.log("final product Data===>", finalProductData)
    })
    .catch((couponError) => {
      console.log("coupon Error")
    });
  })
  .catch((discountError) => console.log("Discount Error"));
})
.catch((productError) => console.log("product error"));
