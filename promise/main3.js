let pm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000);
});

console.log("go on");
pm.then(() => {
    console.log("async done");
});