function saludo(x,y,callback){
return callback(x,y)
}

function suma(a,b){
    return a+b
}

console.log(saludo(11,2,suma))


