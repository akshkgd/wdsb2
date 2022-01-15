let counter = 0;
increment = () => {
    counter = counter + 1;
    // counter++ increments by 1
    // counter += 1; =>  counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}

decrement = () => {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}
reset = () =>{
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}