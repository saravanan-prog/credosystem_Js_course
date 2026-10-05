var productName = "Apple Product";
var price = 25000;
var discount = 8;

var offerStart = new Date("2026-11-28");
var offerEnd   = new Date("2026-12-08");

var today = new Date();                                   


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