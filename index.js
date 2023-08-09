//Workshop: Discount Chain

// Restate: 
// 1. If a customer has a subscription, receive 25% discount to total
// 2. If the customer has a coupon, they will get $10 off after the subsciption total
// 3. At the end of script, return and log "Your grand total is ${finalAmount}."
// These are three separate tasks that need to be completed within the function

// Example: If subscription = true, then total = cost * .75, 
// and if coupon = true, then total = (cost * .75) - 10 
// and return "your grand total is..."


const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

//To run and test code, uncomment out the client you would like to test and comment out the other two
//For example: below (on line 43), timmy is showing as the first client to test out and sarah and rocky are commented out
//Then run and debug and check if the correct output is displaying under the debug console


let client = timmy;
// let client = sarah;
// let client = rocky;



subscriptionAndCoupon = (client.refills * client.pricePerRefill * .75) - 10
subscriptionOnly = (client.refills * client.pricePerRefill * .75)
couponOnly = (client.refills * client.pricePerRefill) - 10
noSubNoCoupon = client.refills * client.pricePerRefill


function totalAmount (client) {
    if (client.subscription === true && client.coupon === true) {
        return "Your grand total is $" + subscriptionAndCoupon + ".";
    } else if (client.subscription === true) {
        return "Your grand total is $" + subscriptionOnly + ".";
    } else if (client.coupon === true){
        return "Your grand total is $" + couponOnly + ".";
    }
    else {
        return "Your grand total is $" + noSubNoCoupon +".";
    }
}

console.log(totalAmount(client));


