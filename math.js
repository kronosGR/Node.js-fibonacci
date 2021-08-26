exports.fibonacci = function(n) {
    const fibos = [];
    fibos[0] = 0;
    fibos[1] = 1;
    fibos[2] = 1;
    for (let i=3; i<=n; i++){
        fibos[i] = fibos[i-2] + fibos[i-1];
    }
    return fibos[n];
}

exports.fibonacciAsync = (n, done) => {
    if (n===0) done(undefined, 0);
    else if (n===1 || n===2) done(undefined, 1);
    else {
        setImmediate(() => {
            exports.fibonacciAsync(n-1, (err, val1) => {
                if (err) done(err);
                else setImmediate(() => {
                    exports.fibonacciAsync(n-2, (err, val2) => {
                        if (err) done(err);
                        else done(undefined, val1 + val2);
                    })
                })
            })
        })
    }
}