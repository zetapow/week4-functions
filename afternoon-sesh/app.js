/*
const produceList = [
   { name: 'apple', price: 0.99 },
   { name: 'banana', price: 0.59 },
   { name: 'carrot', price: 0.25 },
   { name: 'grapes', price: 2.49 },
   { name: 'spinach', price: 1.99 },
   { name: 'orange', price: 0.75 },
];
const buyer = 'Tingus Pingus';

// let message = `Customer: ${buyerName}
// Subtotal: ${total of }`

// console.log(total amount of cart + GST (15%))

function calcTotalCart(subtotal) {
   let subtotal = 0;
   for (fruit of produceList) {
      subtotal += fruit.price;
   }
   console.log(`Total price: $${subtotal.toFixed(2)}`);
}

function generateReceipt(buyer, produceList) {
   //  Buyer
   console.log(`${buyer}`);

   // Item List
   for (fruit of produceList) {
      // console.log(fruit);
      console.log(`Item: ${fruit.name} -- Price: $${fruit.price}`);
   }

   const subtotal = calcTotalCart(produceList);

   const gst = subtotal * 0.15;
   console.log(`Total cost + GST (15%) : $${(subtotal + gst).toFixed()}`);
}

console.log(generateReceipt(buyer, produceList));

*/
// ---------------------- EXERCISE ---------------------- //
/* 
    Scenario: You are part of a team bulding a e-commerve website.
    You were tasked on a feature for the cart page.
    The feature is to take a cart list, buyer name and console.log a receipt.
    The receipt should contain:

*/
// ---------------------- SOLUTION ---------------------- //

//        - The buyer name
function renderBuyersName(buyer) {
   console.log(buyer[0].toUpperCase() + buyer.slice(1).toLowerCase());
}

//        - The list of items and respective prices in the cart
const cartList = [
   { item: 'apple', price: 0.99, qty: 25 },
   { item: 'banana', price: 0.59, qty: 5 },
   { item: 'carrot', price: 0.25, qty: 25 },
   { item: 'grapes', price: 2.49, qty: 5 },
   { item: 'spinach', price: 1.99, qty: 25 },
   { item: 'orange', price: 0.75, qty: 25 },
];

function renderItemsList(cartList) {
   for (const item of cartList) {
      console.log(
         `Item: ${item.item} - Price: $${item.price} - Quantity: ${item.qty}`
      );
   }
}
//        - The total amount of the cart
function calculateSubtotal(cartList) {
   let subtotal = 0;
   for (const item of cartList) {
      subtotal += item.price * item.qty;
   }
   console.log(`Total Cost: $${subtotal.toFixed(2)}`);
   return subtotal;
}

// - (Challenge) Automatically calculate discounts based on price.
function calculateDiscount(subtotal) {
   //- 10% discount for carts over $100 */
   if (subtotal >= 100) return subtotal * 0.1;

   //   - 5% discount for carts over $50
   if (subtotal >= 50) return subtotal * 0.05;
   return 0;
}

//        - The total amount of the cart + GST (15%)

function calculateGST(subtotal) {
   const gst = subtotal * 0.15;
   console.log(`Total Cost + GST (15%) : $${(subtotal + gst).toFixed(2)} `);
}
// ------------------------------------------------------ //
function generateReceipt(buyer, cartList) {
   renderBuyersName(buyer);

   renderItemsList(cartList);

   const subtotal = calculateSubtotal(cartList);

   const discount = calculateDiscount(subtotal);

   console.log(`Discount: $${discount.toFixed(2)}`);

   const discountTotal = subtotal - discount;
   
   calculateGST(discountTotal);
}

generateReceipt('bRoSePh', cartList);
