// /*
// // Pizza Example

// function notify(data){
//     console.log(data," Pizza eaten Successfully lets go back");
// }

// // function order(callback){
// //     let pizzatype="Cheese";
// //     callback(pizzatype);
// // }

// let orderpizza=(callback)=>{
//     setTimeout(()=>{
//         let pizzatype="Cheese";
//         callback(pizzatype);
//     },2000);

//     // setTimeout(order,5000,callback);   Both are Same

// }

// orderpizza(notify);

// console.log("Vehicle on Highway");
// console.log("Went to take order");
// console.log("Vehicle Highway 2");

// */

// // Chaining of Callback Function

// function notify(item){
//     console.log(item," Pizza eaten Successfully lets go back");
// }

// function orderpizza(next){
//     getcheese((cheese)=>{
//         getdough(cheese,(dough)=>{
//             bake(dough,(pizza)=>{
//                 next(pizza)

//             })
//         })
//     })
// }

// function getcheese(callbackforcheese){
//     setTimeout(()=>{
//         let cheese="Cheddar";
//         console.log(`Sending ${cheese} in 2s`);
//         callbackforcheese(cheese);

//     },2000);
// }

// function getdough(cheese,callbackfordough){
//     setTimeout(()=>{
//         let dough="white";
//         console.log(`${dough} dough ready in 2s`);
//         callbackfordough(dough);
//     },2000);
// }

// function bake(pizza,callbackfornotify){
//     setTimeout(()=>{
//         let pizza="Veg";
//         console.log(`${pizza} Pizza is almost ready`);
//         callbackfornotify(pizza);
//     },2000);
// }

// orderpizza(notify);
// console.log("Vehicle on Highway");
// console.log("Went to take order");
// console.log("Vehicle Highway 2");

// ------------------------------------------------------ New Lecture -----------------------------

// console.log("Pizza Order placed");

// let createpizza = (myfunction) => {
//   setTimeout(() => {
//     let pizza = "🍕";
//     myfunction(pizza);
//   }, 2000);
// };

// function notify(data = "None") {
//   console.log("Hello Notified with " + data);
// }

// let pizza = createpizza(notify);
// console.log("Calling someone");
// console.log("Rest");






// 🤙 🔥 
//  Lets Create a function for Pizzza Ordering


console.log("Car Driving");
console.log("Rohan Gets Down as he sees Domino's ");


let orderpizza=()=>{
    let data='🍕' ;
    notifyorderplaced(data,()=>{
        getcheese((data)=>{
            makedough(data,(data2)=>{
                bakepizza(data2,(data3)=>{
                    pizzaInOven(data3,()=>{
                        orderprepared();
                    });
                })
            })
          });
    });

   
}

function notifyorderplaced(data,callback){
    setTimeout(()=>{
        console.log("Order Successfully Placed for "+ data +" please wait for it to get prepared !");
        callback();
    },1000);
}

//1.  //Since we, are writing timeout it wonr return anything so, we right callback
function getcheese(callback1){
    setTimeout(()=>{
        let cheese='🧀';
        console.log("Sending Cheese "+ cheese);
        callback1(cheese); 
    },2000);
}

//2.
// We should have Cheese  in order to make dough
function makedough(data,callback2){
    setTimeout(()=>{
        console.log("Got "+ data+" from getcheese function let's start preparing for dough !");
        let dough='🫓';
        callback2(dough);
    },2000);
}

//3.
// We should have dough in order to make pizza
function bakepizza(data,callback3){
    setTimeout(()=>{
        console.log("Got "+ data +" from makedough function , now we have both cheese and dough ready lets bake pizza !");
        let pizza='🍕';
        callback3(pizza);
    },2000);
}

//4.
// Pizza Inside oven 
function pizzaInOven(data,callback4){
    setTimeout(()=>{
        console.log(data +" Inside Oven, will take some time ! to get Prepared !");
        callback4();
    },2000);
}

// 5.
// Order Prepared Notify Function
function orderprepared(){
    setTimeout(()=>{
        console.log("Order Prepared you can come for Pickup !!")
    },2000);
}

orderpizza(orderprepared);


// The Above is Called CallBack Hell  🔥  








