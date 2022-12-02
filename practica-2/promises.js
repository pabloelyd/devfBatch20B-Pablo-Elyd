let promesaDeMiX = new Promise(function(resolve,reject){
    try{
        setTimeout(()=>{
            resolve("Si me quiere");
        }, 3000);
        document.querySelector(function(){});
    }catch(e){
        reject();
    }
});

promesaDeMiX.then((texto)=>{
        document.querySelector("#nombre").innerHTML=texto;
    }, ()=>{
        console.log("Algo salio mal");
})
