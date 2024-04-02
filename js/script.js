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
   let num = document.getElementById("num").value;
   let error = document.getElementById("erro")
   let result = document.getElementById("resultado")
   if (num <= 0) {
    error.innerText = `informar número válido, o numero ${num} não é positivo`
    result.innerText = ``
   } else {
       error.innerText = ``
let primo = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) primo = false;
    
}
primo
? (result.innerText = `O número ${num} é primo!`)
: (result.innerText = `O número ${num} não é primo!`)
 
}
}
exercicio4 = () => {
    
    let num = document.getElementById("num").value;
    let error = document.getElementById("erro")
    let result = document.getElementById("resultado")
    result.innerHTML = "";
    error.innerText = "";
    if (num <= 0) {
        error.innerText = `O número ${num}, não é positivo, informe um número válido`;
        result.innerHTML = "";
    } else {
        for (let i = 0; i <= 10; i++) {
             result.innerHTML += `${num} X ${i} = ${num * i} <br >`
            }
    } 
}
exercicio5 = () => {
    let num = document.getElementById ("num").value;
    let result = document.getElementById ("resultado")
    let contador = 1
    result.innerHTML = ""
while (contador <= num) {
    if (contador%2==1) {
        result.innerHTML+=contador
        
    }
    contador ++ 
    
}
}

exercicio6 = () => {
    let num = document.getElementById ("num").value;
    let result = document.getElementById ("resultado")
    let contador = 0
    let somar = 0
   result.innerHTML = ""
while (contador <= num) {
    if (contador%2==0) {
        somar += contador
        result.innerHTML = `${somar}`
        
    }
    contador ++ 
    
}
}

exercicio7 = () => {
    let numero = 10
    let result = document.getElementById("resposta") 
while (numero >= 1){
    result.innerHTML += `${numero} <br >`
    numero--
}
}

exercicio8 = () => {

}

exercicio9 = () => {
    let result = document.getElementById("resposta")
    for (let i = 1; i <= 100; i++) {
     result.innerHTML += `${i} <br >`
        
    }
}