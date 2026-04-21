function product() {
  let products = [
    {
      productName: "apple",
      price: 25,
    },
    {
      productName: "orange",
      price: 50,
    },
  ];

  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

async function offerComputation() {

    try {
        let productList = await product();
 
        let withOfferProductList = productList.map((value) => {
            value.offer = (value.price * 3) / 100;
            value.finalPrice = value.price - value.offer;
            value.createdBy = "saravanan";
            value.createDate = new Date();
            return value;
        });

        console.log("withOfferProductList====>", withOfferProductList);
    } catch (error) {
        console.log("error===>", error);
    }
}

offerComputation();
