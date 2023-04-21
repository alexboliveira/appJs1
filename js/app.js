app = document.getElementById("app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","header");
novoElemento.innerHTML = "HEADER";
app.appendChild(novoElemento);






//teste pardrao

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


//fim teste do reduce
