
async function cualquiera(pkm){
    let url = "https://pokeapi.co/api/v2/pokemon/"+pkm;
    let res = await fetch(url);
    let json = await res.json();
    console.log(json.sprites.front_default); 
    document.getElementById("pokemon").src=json.sprites.front_default;
}

async function bulbasaur(){
    let url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    let res = await fetch(url);
    let json = await res.json();
    console.log(json); 
}

async function pikachu(){
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    let res = await fetch(url);
    let json = await res.json();
    console.log(json); 
}

async function charizard(){
    let url = "https://pokeapi.co/api/v2/pokemon/charizard";
    let res = await fetch(url);
    let json = await res.json();
    console.log(json); 
}


async function sencillita(){
    return 89;
}

async function ejemplo(){
    let p = sencillita(); //Promesa retornada
    let p2 = await sencillita();
    console.log(p);
    console.log(p2);
}


bulbasaur();
pikachu();
charizard();

p.then((value) => {
    console.log("El valor que retorna la promesa es "+value);
});

