function limpa_formulário_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');

if (cep != "") {

    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {

        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        var script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        document.body.appendChild(script);
        visibleContent();

    }
    else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    limpa_formulário_cep();
    removeContent()
}}

function visibleContent() {
    let inputs = document.querySelector('.container-content')
    inputs.setAttribute('style', 'display: block;'); 
}

function removeContent() {
    let inputs = document.querySelector('.container-content')
    inputs.setAttribute('style', 'display: none;'); 
}

// bloqueador de letras e simbolos no input
var cep = document.querySelector("#cep");
cep.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  	}
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);

    var pattern = '[0-9]';
    if (char.match(pattern)) {
      return true;
  }
}