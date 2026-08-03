let productName = "Apple Product";
let price = 25000;
let discount = 8;

let offerStart = new Date("2026-08-03");
let offerEnd = new Date("2026-08-08");

let today = new Date();

// Check offer period
if (today >= offerStart && today <= offerEnd) {

    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    console.log("Product:", productName);
    console.log("Original Price: ₹" + price);
    console.log("Discount: " + discount + "%");
    console.log("Discount Amount: ₹" + discountAmount);
    console.log("Final Price: ₹" + finalPrice);

} else {

    console.log("Offer is not available");
    console.log("Product:", productName);
    console.log("Price: ₹" + price);
}