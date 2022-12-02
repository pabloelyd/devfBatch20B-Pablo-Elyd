let promesaDeMiX = new Promise(function(resolve, reject){
    let isMartes = true;
    if(isMartes){
        resolve();
    }
    else{
        reject();
    }
});

promesaDeMiX.then(function(){
    console.log("Te quiere");
}, extoxico)

function extoxico(){
    console.log("No te quiere");
}