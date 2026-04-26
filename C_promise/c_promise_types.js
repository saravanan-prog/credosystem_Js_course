function product() {
  
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      var product = {
        productId: 1,
        productName: "apple",
        prductPrice: 120,
      };

      resolve(product);
    }, 3000);
  });
}

function discountOffer() {
  

  return Promise.resolve(25);
}

function couponcodeValidation() {
  
  return Promise.reject("SUN100")
}


Promise.allSettled(
    [product(),discountOffer(),couponcodeValidation()]
).then(
    (data) => console.log(data)
)
.catch(e => console.error("error===>",e))