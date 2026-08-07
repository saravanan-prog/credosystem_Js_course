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
 
  let promise = new Promise((resolve,reject) => {
      setTimeout(()=>{
        reject("validated error")
      },4000)
  })

  return promise
}




function customerOrder(data) {
  console.log("customer start to buy the product", data)
}


Promise.any(
  [
    product(),   //3000ms
    discountOffer(), //0.5ms
    couponcodeValidation() // ?
  ]
).then(
  (data) => customerOrder(data)
).catch(e => console.error("error===>", e))