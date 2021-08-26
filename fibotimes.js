const math = require('./math');
const util = require('util');

(async() => {
    for (let num=1; num<8000; num++){
        await new Promise((resolve, reject) => {
            math.fibonacciAsync(num, (err, fibo) => {
                if (err) return reject(err);
                else {
                    let now = new Date().toISOString();
                    console.log(`${now} Fibonacci for ${num} = ${fibo}`);
                }
            })
        })
    }
})().catch(err => {
    console.error(err)
})