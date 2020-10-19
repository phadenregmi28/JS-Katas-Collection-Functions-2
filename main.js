//1.//
function add(a, b) {
    return a + b
}
let  addition = add(8, 13)
console.log(addition)

//2.//
function multiply(a, b){
        let product = 0;
         let count = 0;
        while (count<b){
            product=add (a,product)
            count++
        }
        return product;
    }

    console.log(multiply(35, 8));

//3.//

function power (x,n){
    let product = 1;
    let count = 0;
   while (count<n){
       product=multiply (x,product)
       count++
   }
   return product;
}

console.log(power(8,3));

//4//

function factorial (y){
    let product = 1;
    let count = 0;
   while (count<y){
       product=multiply (y,product)
       y--
   }
   return product;
}

console.log(factorial(10));

//5//

// Bonus Fibonacci Function//
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233.......
let fibo = function(num) {
if (num === 1 ) {
    return 0;
}
if (num === 2) {
    return 1;
}
return fibo(num-1) + fibo(num-2);
};
console.log(fibo(12));




