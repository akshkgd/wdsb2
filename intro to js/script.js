// ES6 ->  
// variables and data types
// variables -> temp. container to store data

// let and const > var??
 

// let name = 'ashish shukla';
// console.log(name);


// const userId = 1234;
// console.log(userId);


// var userName = 'ashish';
// console.log(userName);

// Data types => strings, numbers, booleans, array,  null, undefined, , object

// let name = 'ashish';
// console.log( name);

// let age = 20.45;
// console.log(typeof age);


// let isAlive = false;
// console.log(typeof isAlive);

let hobbies = ['cricket', 'football', 'coding', 'reading'];
// push, pop, splice
// hobbies.pop();
// hobbies.push('cooking');
// cricket, football, cooking
hobbies.splice(1, 1, 'codekaro', 'dancing', 'singing');
// console.log(hobbies);
// console.log('the lenght of array is: ', hobbies.length);


//objects

let user = {
    name: 'ashish shukla',
    age: 20,
    email: 'ashish@codekaro.in',
    mobile: 9876543210,
    address: '123 street kolkata, 211009 west bengal',
    userName: 'ashish',
    password: 'ashish@123',
}
user.id = 1234; // adding new property
delete user.userName; //
console.log(user);



// generate a random number
let randomNumber = Math.random();
console.log(Math.floor(randomNumber*100) );






