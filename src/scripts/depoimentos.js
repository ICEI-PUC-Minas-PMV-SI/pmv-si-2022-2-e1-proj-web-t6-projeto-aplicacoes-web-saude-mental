// Adicionando funções para o Windows.OnLoad

function depoimentosOnLoad () {
  document.depoimentos = [];
};

var addFunctionOnWindowLoad = function(callback){
  if(window.addEventListener){
      window.addEventListener('load',callback,false);
  }else{
      window.attachEvent('onload',callback);
  }
}

addFunctionOnWindowLoad(depoimentosOnLoad)

// Depoimento

function salvarDepoimento() {
  adicionarDepoimento(pegarDepoimento());
  exibirDepoimentos();
}

function adicionarDepoimento(depoimento) {
  document.depoimentos.push(depoimento);
}

function pegarDepoimento() {
  var campos = document.getElementById("formulario");
  return {
    depoimento: campos.depoimento.value,
    nome: campos.nome.value,
    email: campos.email.value,
  };
}

function exibirDepoimentos() {
  document.getElementById("container_depoimento").innerHTML = "";
  document.getElementById("container_depoimento").style.display = "flex";
  for (var index = 0; index < document.depoimentos.length; index++) {
    document.getElementById("container_depoimento").innerHTML += `
      <div class="col-3">
        <p>${document.depoimentos[index].depoimento}</p>
        <h2 class="fw-normal">${document.depoimentos[index].nome}</h2>
      </div>
    `;
  }
}