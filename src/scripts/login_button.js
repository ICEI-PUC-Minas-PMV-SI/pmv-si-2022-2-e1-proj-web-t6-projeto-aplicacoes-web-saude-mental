// Adicionando funções para o Windows.OnLoad

function loginOnLoad () {
  // Página de Cadastro e de Login não precisam dessa validação
  if (
    !window.location.href.endsWith("login.html") &&
    !window.location.href.endsWith("cadastro.html")
  ) {
    const loginBtn = document.getElementById("login-button");
    const usrm = sessionStorage.getItem("usrname");

    if (usrm == null) {
      // Quer dizer que não foi feito o Login
      loginBtn.innerHTML = "Login";
      loginBtn.href = "login.html";
    } else {
      loginBtn.innerHTML = "Log Out";
      loginBtn.onclick = function () {
        sessionStorage.removeItem("usrname");
        window.location.reload();
      };
    }
  }
};


var addFunctionOnWindowLoad = function(callback){
  if(window.addEventListener){
      window.addEventListener('load',callback,false);
  }else{
      window.attachEvent('onload',callback);
  }
}

addFunctionOnWindowLoad(loginOnLoad)


// LOGIN

function registrosDefaults() {
  sessionStorage.setItem(
    "registrados",
    JSON.stringify({
      henrique: "pass",
      alyson: "pass123",
      giovanni: "pass456",
      joao: "pass789",
    })
  );
}

function getRegistrados() {
  var registrados = sessionStorage.getItem("registrados");

  if (registrados == null) {
    registrosDefaults();
  }

  return JSON.parse(sessionStorage.getItem("registrados"));
}

function loginSubmit() {
  const usrname = document.getElementById("usrname").value;
  const psw = document.getElementById("psw").value;

  const registrados = getRegistrados();

  // Valida se o usuario e a senha estão corretos
  if (registrados[usrname] == psw) {
    sessionStorage.setItem("usrname", usrname);
    window.location.href = "index.html";
  } else {
    alert("Usuario ou Senha incorreto.");
  }
}

function registrar() {
  const usrname = document.getElementById("usrname").value;
  const psw = document.getElementById("psw").value;

  if (usrname == "" || psw == "") {
    alert("É necessário um usuário e senha para cadastro.");
  } else {
    var registrados = getRegistrados();

    registrados[usrname] = psw;
    window.location.href = "login.html";

    sessionStorage.setItem("registrados", JSON.stringify(registrados));
  }
}
