app = document.getElementById("app");
novoElemento = document.createElement("div");
novoElemento.setAttribute("class","header");
novoElemento.innerHTML = "HEADER";
app.appendChild(novoElemento);






//teste

financas = [{"saida":{"casa": "150", "agua": 50, "luz":130}, "entrada":{"salario": 1500, "comissao": 200}}];

console.log(financas[0].entrada.salario);




fin = {
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

console.log(fin.entrada.salario);


// fim teste
