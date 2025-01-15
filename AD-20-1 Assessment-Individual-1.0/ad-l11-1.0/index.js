const calculator = require('./js/calculator/calculator.js')
const User = require('./js/user/user.js')


console.log(calculator.divide(5,0));

let user1 = new User(546, "Ana", "a@email.com");
console.log('Usuario creado:', user1);

let user2 = new User(1234, "Santiago", "a@email.com");
console.log('Usuario creado:', user2);




