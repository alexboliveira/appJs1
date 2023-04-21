app = document.getElementById("app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","header");
novoElemento.innerHTML = "HEADER";
app.appendChild(novoElemento);






//teste padrao

financas = [{"saida":{"casa": "150", "agua": 50, "luz":130}, "entrada":{"salario": 1500, "comissao": 200}}];

console.log(financas[0].entrada.salario);




const fina = {
    "entrada":{
        "salario": 1500,
        "vale": 800,
        "comissao": 200
    },
    "saida":{
        "casa": 400,
        "luz": 130,
        "agua": 50
    }

}

console.log(fina.entrada.salario);


cliente = [];    //cria uma array vazia

cliente.push({'nome': 'pessoa1', 'rg':'111111', 'filhos':['filho1p1','filho2p1']})    //adiona dados na array vazia
cliente.push({'nome':'pessoa2','rg':'222222', 'filhos':['filho1p2','filho2p2']})

//delete carro[0].marca;       // delete uma informação de uma array


//console.log(carro);

function procurar(carro){
    return carro.cor === 'red';


}

//console.log(carro);

//console.log(carro.findIndex(procurar));




// fim teste padrao


//teste do map
const fin2 = [
    {descricao :  "agua", valor: "50"},
    {descricao :  "luz",  valor: "30"}
];

function somaVal(item){
    //return [item.descricao,item.valor].join(" ");
    return [item.valor * 100];
    
}



console.log(fin2.map(somaVal));
console.log(fin2[0].descricao);

//parece que o map funciona como uma especie de podermos manusear dados sem mexer nos dados orinais, podemos reestrurar, usar os dados do nosso jeito mas sem alterar a fonte. 
// fim teste do map



// teste do reduce
console.log("reduce");
const numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc));

function myFunc(maior, menores) {
  return maior + menores // vai retornar a soma de todos os numeros da array ? buguei, kkkkk
  //return menores;  //vai retornar 25
  //return maior;  //vai retornar 175
}



//parece que o reduce o forte é manusear numeros, fazer uma soma é algo completamente facil, mas tenho algumas duvidas no processo
//fim teste do reduce




// teste o filter
console.log("filter");
var numerosFilter = [1,2,3,4,5,6,7,8,9];

console.log(numerosFilter.filter(funFilter));
function funFilter(item){
    return item <=3;

}



// como o proprio nome diz o filter filtra.

// fim teste do filter
