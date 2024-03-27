exercicio1 = () => {
    document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2 />"
for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += (`#${i}`)
}
}

exercicio2 = () => {
    document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2 />"
    var num = document.getElementById("num").value;
    for (let i = 0; i <= num; i += 2) {
         document.getElementById("resposta").innerHTML += (`#${i}`) 
        }
}
exercicio3 = () => {
    document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2 />"

   

}