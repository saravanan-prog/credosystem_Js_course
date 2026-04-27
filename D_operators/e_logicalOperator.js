/**
 *   Logical Operator
 *     (&&) AND -  [all conditon true]  = true otherwise false
 *     (||) OR  -  [any condition true] = true otherwise false
 *     (!)  Not -  [Negativity check]
 */


var x = 100
var y = 100

var a = 500
var b = 600
/* Example : AND */
console.log( (x==y) && (a==b) ) 

/*  Example : OR */

console.log( (x==y) || (a==b) ) 

/* Example : Not (!) */

var productAvailable = false;
var product = "apple"
var productprice = 100;

var productOffer = !productAvailable ? "stock empty" : productprice * 5 /100;

console.log("productOffer===>",productOffer)





