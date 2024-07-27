let err = false;
err = true;

let pm = new Promise(function(resolve, reject) {
    if (!err) {
        resolve("this is data");
    } else {
        reject("fail");
    }
});

console.log("go on");


pm.then(function(data) {
    console.log("async done", data);
});
pm.catch(function(err) {
    console.log("error happened", err);
});
