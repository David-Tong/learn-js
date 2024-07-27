let pm = fetch("http://numbersapi.com/314159265358979");

pm.then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log(error));

async function getNumber(num) {
    const response = await fetch(`http://numbersapi.com/${num}`);
    const text = await response.text();
    console.log(text);
}

getNumber(3);