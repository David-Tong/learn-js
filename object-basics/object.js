let user = new Object();
user = {};

user = {
    name: "John",
    age: 30
};

console.log(user.name);
console.log(user.age);

user.isAdmin = true;

delete user.age;

user = {
    name: "John",
    age: 30,
    "likes birds": true
}

console.log(user);

user["likes birds"] = false

console.log(user);

if ("likes birds" in user) {
    console.log("has likes birds");
}

for (key in user) {
    console.log(key);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
}

for (code in codes) {
    console.log(code);
}


user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

total = 0;
for (key in salaries) {
    total += salaries[key];
}
console.log(total);

Object.assign(salaries, {Ann: 200});
console.log(salaries);