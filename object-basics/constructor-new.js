function User(name) {
    console.log(new.target);
    this.name = name;
    this.isAdmin = false;
}

user = new User("Jack");
console.log(user);

function User2(name) {
    return {
        name,
        isAdmin: false,
    }
}

user2 = User2("Jack");
console.log(user2);

User();

new User();

obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

console.log(a == b);

