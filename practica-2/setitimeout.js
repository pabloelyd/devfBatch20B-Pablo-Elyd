function hola(){
    setTimeout(function(){
        alert("Hola");
    }, 3000);
}

function adios(callback, callback2){
    setTimeout(function(){
        alert("Adios");
        callback();
        callback2();
    }, 5000);   
}

function bienvenida(){
    setTimeout(function(){
        alert("Bienvenido");
    }, 1000);
}

adios(hola, bienvenida)