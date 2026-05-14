// chain if else
// || , && (or , and)

const num = 40;

if (num < 5) {
  console.log(num, "is smaller than 5");
  
} 
else if (num < 10) {
  console.log(num, "is smaller than 10");
  
} 
else if (num < 15) {
  console.log(num, "is smaller than 15");
  
}
else if (num < 20) {
  console.log(num, "is smaller than 20");
  
} 

///
if (false || false) {
  console.log("OR true");
  
} else {
  console.log("OR false");
  
}

if (true && true) {
  console.log("AND true");
  
} else {
  console.log("AND false");

}




// 
if (true && true || false) {
  console.log("true");
  
} else {
  console.log("false");
  
}


const a = 12;

if (a%2 == 0 && a%3 == 0 && a%4 == 0) {
  console.log(a, "is divisible by 2, 3 and 4.");
} else {
  console.log(a, "is not divisible by 2, 3 and 4.");
}


let restaurantOpen = true;
let paymentSuccess = false;
let addressAvailable = true;
let cashOnDelivery = true;
if(restaurantOpen  && addressAvailable && (paymentSuccess || cashOnDelivery)){
    console.log("Order Placed");
    
}
else{
    console.log("Ordered Failed");
    
}