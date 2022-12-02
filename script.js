const $btnSignIn = document.querySelector(".sign-in-btn");
  $btnSignUp = document.querySelector(".sign-up-btn");
  $signUp = document.querySelector(".sign-up");
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
    document.querySelector(".error_notify").classList.remove("active");
  }
});

const formulario = document.querySelector(".formulario");
  inputs = document.querySelectorAll(".formulario input");
  sign_in = document.querySelector(".sign-in");
  sign_up = document.querySelector(".sign-up");


const expresiones_regulares = {
  nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  email: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
  name:false,
  password:false,
  email:false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones_regulares.nombre, e.target.value, "name");
      break;
    case "email":
      validarCampo(expresiones_regulares.email, e.target.value, "email");
      break;
    case "password":
      validarCampo(expresiones_regulares.password, e.target.value, "password");
      break;
    default:
      break;
  }
}

const validarCampo = (expresion,input,campo) => {
  if (expresion.test(input)) {
    document.getElementById(campo).classList.remove("error");
    campos[campo] =true;
  } else {
    document.getElementById(campo).classList.add("error");
    campos[campo] =false;
  }
}

inputs.forEach((input) => {
  input.addEventListener("Keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", e => {
  e.preventDefault();
  if(campos.name && campos.password && campos.email){
    document.querySelector(".check_notify").classList.add("active");
    document.querySelector(".error_notify").classList.remove("active");

    setTimeout(() => {
      document.querySelector(".check_notify").classList.remove("active");
    }, 5000);
  } else {
    document.querySelector(".error_notify").classList.add("active");
    document.querySelector(".check_notify").classList.remove("active");
  }

})

//if(expresiones_regulares.nombre.test(e.target.value)){
// console.log("Es admitido el nombre")
//}else{
//console.log("No es admitido el nombre")
//}
