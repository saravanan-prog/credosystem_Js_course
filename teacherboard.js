function foodOrder() {
  const OrderItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("Chicken Manchurian is ready");
      } else {
        reject("Something went wrong.");
      }
    });
  });

  return OrderItem;
}

async function main() {
  try {
    var result = await foodOrder(); //blocked
    console.log("Result==========>", result);
  } catch (error) {
    console.log("error=========>", error);
  }
}
main();
