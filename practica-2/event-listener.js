document.querySelector("#miboton").addEventListener("click", saludar);

document.querySelector("#miboton").addEventListener("click", function(){saludar("Roberto")})

document.querySelector("#miboton").addEventListener("click", ()=>{ saludar("Enrique") })

document.querySelector("#miboton").addEventListener("click", function(){ 
    alert("Hola Carlos!");
});

function saludar(nombre){
    let m = "Hola! " + nombre;
    alert(m);
    return m;
}