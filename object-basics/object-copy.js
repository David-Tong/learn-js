let user = {name: "John"};
let permission1 = {canView: true};
let permission2 = {canEdit: true};

Object.assign(user, permission1, permission2);
console.log(user);

Object.assign(user, { name: "Pete" });
console.log(user);

let user2 = {};
Object.assign(user2, user);
console.log(user2);