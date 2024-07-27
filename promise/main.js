function f(resolve, reject) {
    let timeout = Math.random() * 2;
    console.log("set timeout to : " + timeout + " seconds.");
    setTimeout(() => {
        if (timeout < 1) {
            console.log("call resolve() ...");
            resolve("200 OK");
        } else {
            console.log("call reject() ...");
            reject("timeout in " + timeout + " seconds.");
        }
    }, timeout * 1000);
}

let p1 = new Promise(f);