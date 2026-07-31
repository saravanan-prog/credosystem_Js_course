let productPrice = 1000;
let discount = 5;


let offerPrice = productPrice - (productPrice * discount / 100);

// Current date
let today = new Date();

// Offer expires after 3 days
let expiryDate = new Date();
expiryDate.setDate(today.getDate() + 3);

// Check current date
let currentDate = new Date();

if (currentDate <= expiryDate) {
    console.log("🔥 5% Offer Price: ₹" + offerPrice);
    console.log("Offer valid until:", expiryDate.toDateString());
} else {
    console.log("Normal Price: ₹" + productPrice);
}