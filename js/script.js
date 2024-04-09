exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2 />";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};
exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade<h2 />";
  var num = document.getElementById("num").value;
  for (let i = 0; i <= num; i += 2) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};
exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  if (num <= 0) {
    error.innerText = `informar número válido, o numero ${num} não é positivo`;
    result.innerText = ``;
  } else {
    error.innerText = ``;
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
};
exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";
  if (num <= 0) {
    error.innerText = `O número ${num}, não é positivo, informe um número válido`;
    result.innerHTML = "";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} X ${i} = ${num * i} <br >`;
    }
  }
};
exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let contador = 1;
  result.innerHTML = "";
  while (contador <= num) {
    if (contador % 2 == 1) {
      result.innerHTML += contador;
    }
    contador++;
  }
};
exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let contador = 0;
  let somar = 0;
  result.innerHTML = "";
  while (contador <= num) {
    if (contador % 2 == 0) {
      somar += contador;
      result.innerHTML = `${somar}`;
    }
    contador++;
  }
};
exercicio7 = () => {
  let numero = 10;
  let result = document.getElementById("resposta");
  result.innerHTML = "";
  while (numero >= 1) {
    result.innerHTML += `${numero} <br >`;
    numero--;
  }
};
exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};
exercicio9 = () => {
  let result = document.getElementById("resposta");
  let somar = 0;
  for (let i = 1; i <= 100; i++) {
    somar += i;
    result.innerHTML = ` <h2>Resposta da Atividade</h2><br>${somar} <br >`;
  }
};
exercicio10 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let soma = 0;
  let contador = 0;
  error.innerText = "";
  result.innerText = "";

  if (num <= 0) {
    error.innerText = `o número ${num} não é váilido, informe um número válido`;
    result.innerHTML = "";
  } else {
    while (num >= contador) {
      soma += contador;
      contador++;
    }
    let media = soma / num;
    result.innerHTML += `A soma é ${soma} <br>`;
    result.innerHTML += `A média é ${media} <br >`;
  }
};
exercicio11 = () => {
  let resul = document.getElementById("resposta");
  resul.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resul.innerHTML += `<h4>#${i}</h4>`;
    }
  }
};
exercicio12 = () => {
  let number = document.getElementById("num").value;
  let somar = 0;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerHTML = "";
  result.innerHTML = "";
  if (number > 0) {
    for (let i = 1; i <= number.length; i++) {
      somar += parseInt(number.charAt(number.length - i));
    }
    result.innerHTML += `a soma dos digitos é de ${somar}`;
  } else {
    error.innerHTML = `informe um número positivo`;
  }
};
// exercicio13 = () => {
//     let error = document.getElementById("erro");
//     console.log("oi")
// }
//     let result = document.getElementById("resultado");
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     for (let i = num1; i <= num1; i++) {
//     let teste = primos(i);
//     if (teste) {
//       result.innerHTML += i;
//   }
// };
// primos = (num) => {
//   let contador = 0;
//   let primos = true;

//   for (let i = 1; i <= num; i++) {
//       if (num % i==0) {
//         contador++
//       }
//   }
//   if (contador != 2) {
//     primos = false;
//   }
//   return primos;
// };
exercicio14 = () => {
  let num01 = document.getElementById("num1").value;
  let num02 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = num01 * num02;
  error.innerText = "";
  if (num01 <= 0 && num02 <= 0) {
    error.innerText = `informe um número válido`;
  } else {
    result.innerHTML = ` A area de ${num01}cm e ${num02}cm é ${area}cm²`;
    console.log(area);
  }
};

exercicio15 = () => {};

exercicio16 = () => {};

exercicio17 = () => {};

exercicio18 = () => {};

exercicio19 = () => {
  let data = document.getElementById("data").value;
  let erro = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let dataatual = new Date();
  let data2 = new Date(data);
  let diff = dataatual.getTime() - data2.getTime();
  let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  switch (true) {
    case idade > 110:
      result.innerHTML = "";
      erro.innerHTML = "Você tem mais de 110 anos, informe uma data válida.";
      break;

    case idade <= 0:
      result.innerHTML = "";
      erro.innerHTML = "Informe uma data válida.";
      break;
    default:
      result.innerHTML = `Você tem ${idade} anos`;
      break;
  }
};

exercicio20 = () => {};

exercicio21 = () => {};

exercicio22 = () => {};

exercicio23 = () => {};

exercicio24 = () => {};

exercicio25 = () => {};
