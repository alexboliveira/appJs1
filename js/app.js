
//teste padrao

financas = [{"saida":{"casa": "150", "agua": 50, "luz":130}, "entrada":{"salario": 1500, "comissao": 200}}];

//console.log(financas[0].entrada.salario);




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

//console.log(fina.entrada.salario);


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



//console.log(fin2.map(somaVal));
//console.log(fin2[0].descricao);

//parece que o map funciona como uma especie de podermos manusear dados sem mexer nos dados orinais, podemos reestrurar, usar os dados do nosso jeito mas sem alterar a fonte. 
// fim teste do map



// teste do reduce
//console.log("reduce");
const numbers = [175, 50, 25];
//console.log(numbers.reduce(myFunc));

function myFunc(maior, menores) {
  return maior + menores // vai retornar a soma de todos os numeros da array ? buguei, kkkkk
  //return menores;  //vai retornar 25
  //return maior;  //vai retornar 175
}



//parece que o reduce o forte é manusear numeros, fazer uma soma é algo completamente facil, mas tenho algumas duvidas no processo
//fim teste do reduce




// teste o filter
//console.log("filter");
var numerosFilter = [1,2,3,4,5,6,7,8,9];

//console.log(numerosFilter.filter(funFilter));
function funFilter(item){
    return item <=3;

}



// como o proprio nome diz o filter filtra.

// fim teste do filter





//app


//menu lateral
app = document.getElementById("app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","main");
app.appendChild(novoElemento);

app = document.querySelector("#app > div");
novoElemento =  document.createElement("div");
novoElemento.setAttribute("class","mainHeader");
app.appendChild(novoElemento);


app =  document.querySelector("#app > div > div");
novoElemento = document.createElement("h1");
novoElemento.innerText = "Mobills";
app.appendChild(novoElemento);

app =  document.querySelector("#app > div > div");
novoElemento = document.createElement("h2");
novoElemento.innerText = "by Toro";
app.appendChild(novoElemento);



app =  document.querySelector("#app > div > div");
novoElemento = document.createElement("ul");
app.appendChild(novoElemento);




const menu = [
    {texto: "Dashboard"},
    {texto: "Transações"},
    {texto: "Cartões de credito"},
    {texto: "Contas"},
    {texto: "Relatorios"} 
];

menu.map(mostrarMenu);
function mostrarMenu(item){
    app = document.querySelector("#app > div > div > ul")
    novoElemento = document.createElement("li");
    novoElemento.innerText = [item.texto];
    app.appendChild(novoElemento);
  
}



//centro
app = document.querySelector("#app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class", "view")
app.appendChild(novoElemento);



app = document.querySelector("#app > div.view");
novoElemento = document.createElement("p");
novoElemento.setAttribute("class","btn");
novoElemento.innerText = "Planejamento Mensal";
app.appendChild(novoElemento);

app = document.querySelector("#app > div.view");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","boxData");
app.appendChild(novoElemento);


app = document.querySelector("#app > div.view > div");
novoElemento = document.createElement("div");
app.appendChild(novoElemento);

app = document.querySelector("#app > div.view > div > div");
novoElemento = document.createElement("p");
novoElemento.setAttribute("class", "btn_i");
novoElemento.innerText = "Abril 2022";
app.appendChild(novoElemento);














//tabela
app = document.querySelector("#app > div.view");
novoElemento = document.createElement("table");
//novoElemento.setAttribute("class", "label");
app.appendChild(novoElemento);

app = document.querySelector("#app > div.view > table");
novoElemento = document.createElement("tr");
app.appendChild(novoElemento);

const labelMain = [
    {label: "Situação"},
    {label: "Categoria"},
    {label: "Meta"},
    {label: "Valor Gasto"},
    {label: "Resultado"}
]

function viewLabelMain(item){
    app = document.querySelector("#app > div.view > table > tr");
    novoElemento = document.createElement("th");
    novoElemento.innerText = [item.label];
    app.appendChild(novoElemento);
}

labelMain.map(viewLabelMain);






const dadosMe = [
    {
        situacao: "ok", 
        categoria: "total",
        meta: 6.400,
        valorgasto: 0.00,
        Resultado: 6.400
    },

    {
        situacao: "ok", 
        categoria: "total",
        meta: 6.200,
        valorgasto: 0.00,
        Resultado: 6.200
    },

    {
        situacao: "ok", 
        categoria: "total",
        meta: 6.100,
        valorgasto: 0.00,
        Resultado: 6.100
    }
]

function viewLabelDados(item){

    //app = document.querySelector("#app > div.view > table");
    app = document.querySelector("#app > div.view > table");
    novoElemento = document.createElement("tr");
    app.appendChild(novoElemento);


    novoElemento = document.createElement("td");
    novoElemento.innerText = [item.situacao];
    app.appendChild(novoElemento);

    novoElemento = document.createElement("td");
    novoElemento.innerText = [item.categoria];
    app.appendChild(novoElemento);

    novoElemento = document.createElement("td");
    novoElemento.innerText = [item.meta];
    app.appendChild(novoElemento);

    novoElemento = document.createElement("td");
    novoElemento.innerText = [item.valorgasto];
    app.appendChild(novoElemento);

    novoElemento = document.createElement("td");
    novoElemento.innerText = [item.Resultado];
    app.appendChild(novoElemento);






}

dadosMe.map(viewLabelDados);




//lado direito
app = document.querySelector("#app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","ld");
app.appendChild(novoElemento);


const resumoDados = [
    {descricao: "Receita do mes", valor: "8.000,00"},
    {descricao: "Gastos planejados", valor: "6.400,00"},
    {descricao: "Balanço planejado", valor: "1.600,00"},
    {descricao: "Economia planejada", valor: "20%"}
]

function resumoView(item){
    app = document.querySelector("#app > div.ld");
    novoElemento = document.createElement("div");
    novoElemento.innerHTML = `<div class='boxResumo'><p>${[item.descricao]}</p><p>R$ ${[item.valor]}</p></div>`;
    app.appendChild(novoElemento);

   



}

resumoDados.map(resumoView);




















