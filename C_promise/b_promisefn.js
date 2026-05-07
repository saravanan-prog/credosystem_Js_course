function product() {


  let promise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      var product = {
        productId: 1,
        productName: "apple",
        prductPrice: 120,
      };

      resolve(product);
    }, 3000);
  });

  return promise
}

function discountOffer(product) {
  let offer = 50;
  const { prductPrice } = product;
  let discountPrice = prductPrice - (prductPrice * offer) / 100;
  product.prductPrice = discountPrice;

  return Promise.resolve(product);
}



function couponcodeValidation(couponCode, product) {
  let day = new Date().getDay();
  if (couponCode &&couponCode == "THUR10" && day == 4) 
    product.prductPrice = product.prductPrice - 10;

  return Promise.resolve(product)
}



product().then((productdata)=>{
    discountOffer(productdata).then(
      (discountProduct) => {
           couponcodeValidation("THUR10",discountProduct).then(
             (data) => console.log("final product Data===>",data)
           )
      }
    )
})
.catch( error => console.log("product error"))