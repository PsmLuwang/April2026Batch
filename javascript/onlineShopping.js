/* Assignment : 

*1. Online Shopping:*
 - give discount of 5% if the ordered amount is above 999 and 10% discount for above 4999.
 - if the order is eligible any of the above discounts and the payment mode is not cash on delivery, then give another 100 off.
 - if the delivery address is in the range 0-5 Km then the delivery time is  1 day. And 2 days for more than 5 Km.
 - delivery is not available if the delivery address is outside Manipur.
 - refund is available only for the prime users and the payment was online.

*Example:*
Order: 
Amount = 7000,
Payment mode = Online,
Distance = 12Km,
State = Manipur,
PrimeUser = false

*Output:* 
You get 10% discount with another ₹100. 
Estimate delivery time is 2 days. 
This order is non-refundable.
*/

const amount = 2000;
const paymentMode = "online";
const distance = 13;
const state = "Manipur";
const isPrimeUser = true;

let discountPercent = 0;
let additionalDiscount = 0;
let deliveryTime = 0;
let isRefundable = false;


if (state != "Manipur") {
    console.log("This order can not be placed as we can not deliver outside Manipur.");
    
} else {
    if (999 < amount && amount <= 4999) {
        discountPercent = 5; 
    } else if (4999 < amount) {
        discountPercent = 10;
    }

    if (discountPercent != 0 && paymentMode == "online") {
        additionalDiscount = 100;
    }

    if (distance <= 5) {
        deliveryTime = 1;
    } else {
        deliveryTime = 2;
    }

    if (isPrimeUser && paymentMode == "online") {
        isRefundable = true;
    }


    let outputMessage = "";

    if (discountPercent != 0) {
        outputMessage += `You get ${discountPercent}% discount`;
        if (additionalDiscount != 0) {
            outputMessage += ` with another ₹${additionalDiscount}`;
        }
        outputMessage += ". ";
    }

    outputMessage += `Estimate delivery time is ${deliveryTime} days. `;

    if (isRefundable) {
        outputMessage += "This order is refundable."
    } else {
        outputMessage += "This order is non-refundable."
    }

    console.log(outputMessage);
    
}

