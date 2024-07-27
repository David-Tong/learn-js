function callback() {
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); // call callback function after 1 second
console.log('after setTimeout()');

new Promise(function () {});
console.log('Support Promise!');

function test(resolve, reject) {
    let timeOut = Math.random() * 2;
    console.log('set timeout to : ' + timeOut + ' seconds.');
    setTimeout(function() {
        if (timeOut < 1) {
            console.log('call resolve() ...');
            resolve('200 OK');
        } else {
            console.log('call reject() ...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

let p1 = new Promise(test);
let p2 = p1.then(function(result) {
    console.log("Success : " + result);
});
let p3 = p2.catch(function(reason) {
    console.log("Failure : " + reason);
});

new Promise(test).then(function (result) {
    console.log("Success : " + result);
}).catch(function (reason) {
    console.log("Failure : " + reason);
});
