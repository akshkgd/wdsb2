let users  = [
    {name: 'john', age: 21, email: 'john@email.com' },
    {name: 'ashish', age: 18, email: 'ashish@gmail.com '},
    {name: 'sachin', age: 24, email: 'sachin@email.com'},
    {name: 'ram', age: 23, email: 'ram@gmail.com'},
    {name: 'shyam', age: 19, email: 'shyam@gmail.com'},
    {name: 'sita', age: 13, email: 'sita@gmail.com'},
    {name: 'gita', age: 10, email: 'gita@gmail.com'},
    {name: 'laxmi', age: 2, email: 'l@gmail.com'},
    {name: 'sam', age: 29, email: 'sam@gmail.com'},
    {name: 'bam', age: 45, email: 'bam@gmail.com'},
]



let totalUsers = users.length;
let randomUser = Math.floor(Math.random()*totalUsers);
console.log('The Lucky user for today is ', users[randomUser].name);