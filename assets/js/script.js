//Definir elementos
let btn_accept = document.getElementById("btn_accept");
let sec_content = document.getElementById("sec_content");
let div_msg_out_of_range = document.getElementById("div_msg_out_of_range");
let div_multiplication = document.getElementById("div_multiplication");
let div_factorial = document.getElementById("div_factorial");
let input_number = document.getElementById("input_number");
let form = document.getElementById("form");

let i = 1;
let j = 1;
let result = 1;
const guide = /[0-9]/gim;
skip_msg = true;

//Función Validar
let validate = (input) => {
  if (input.match(guide)) {
    input = parseInt(input);
    if (1 <= input && input <= 20) {
      return true;
    } else {
      if (skip_msg == true) {
        div_msg_out_of_range.classList.remove("d-none");
        sec_content.classList.add("d-none");
        div_multiplication.classList.add("d-none");
        div_factorial.classList.add("d-none");
        div_msg_out_of_range.innerHTML = "Número fuera de rango";
        alert("Número fuera de rango");
        skip_msg = false;
        document.getElementById("input_number").value = "";
        return false;
      }
    }
  } else {
    if (skip_msg == true) {
      div_msg_out_of_range.classList.remove("d-none");
      sec_content.classList.add("d-none");
      div_multiplication.classList.add("d-none");
      div_factorial.classList.add("d-none");
      div_msg_out_of_range.innerHTML = "Ingese sólo números";
      alert("Ingese sólo números");
      skip_msg = false;
      document.getElementById("input_number").value = "";
      return false;
    }
  }
};

//Funcion Multiplicar
let multiply = (input) => {
  if (validate(input)) {
    for (i = 1; i <= input; i++) {
      result = i * input;
      saved = div_multiplication.innerHTML;
      div_multiplication.innerHTML = `${saved} ${i} x ${input} = ${result} <br>`;
      console.log(`${i} x ${input} = ${result}`);
    }
  }
};

//Funcion Facotrial
let factorial = (input) => {
  if (validate(input)) {
    for (i = 1; i <= input; i++) {
      result = 1;
      for (j = 1; j <= i; j++) {
        result = result * j;
      }
      saved = div_factorial.innerHTML;
      div_factorial.innerHTML = `${saved} Factorial de ${i} es: = ${result} <br>`;
      console.log(`Factorial de ${i} es: = ${result}`);
    }
  }
};

//Prevenir default
form.addEventListener("submit", (e) => {
  e.preventDefault;
});

//Botón Aceptar
btn_accept.addEventListener("click", () => {
  skip_msg = true;
  div_msg_out_of_range.classList.add("d-none");
  div_multiplication.innerHTML = "";
  div_factorial.innerHTML = "";
  multiply(input_number.value);
  factorial(input_number.value);
  sec_content.classList.remove("d-none");
  div_multiplication.classList.remove("d-none");
  div_factorial.classList.remove("d-none");
});
