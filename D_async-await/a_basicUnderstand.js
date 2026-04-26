function fetchData() {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });

}

 async function displayData() {
  const result = await fetchData();  // When promise complete proceed next
  console.log("Saravanan is printing....")
  console.log(result);
}

displayData()