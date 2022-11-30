function operaciones(x, y, callback){
    return callback(x,y);
}

/*
function suma(x,y){
    return x+y;
}

function resta(x,y){
    return x-y;
}

function multiplicacion(x,y){
    return x*y;
}

function division(x,y){
    return x/y;
}

console.log(operaciones(5,4, suma));
console.log(operaciones(5,4, resta));
console.log(operaciones(5,4, multiplicacion));
console.log(operaciones(5,4, division));*/

let suma = operaciones(10, 5, function(num1, num2) {
    return num1+num2;
});

let resta = operaciones(10, 5, (num1, num2) => {
    return num1 - num2;
});

console.log(resta);
