// Que va primero?
/*console.log('1');
console.log('2');
console.log('3');
console.log('4');*/
console.log('1');

setTimeout(()=>{
    console.log("2");
}, 3000);

console.log("FIN?");

setTimeout(()=>{
    console.log("3");
}, 0);
