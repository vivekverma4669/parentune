const hell = 'yes babe';

function calculateSum() {
    console.log(hell);
     const hell = 'yes babe'; // This line is unnecessary since 'hell' is already defined in the outer scope
}

setTimeout(() => {
    calculateSum(); // Here we directly call the function without passing 'calculateSum' as an argument
}, 2000);
