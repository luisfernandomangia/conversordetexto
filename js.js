function makeLowercase(){
    document.formConversor.valorGerado.value = document.formConversor.valorRecebido.value.toLowerCase();
}
function countWords(){
	s = document.getElementById("valorRecebido").value;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	document.getElementById("valorGerado").value = s.split(' ').length;
}
function makeUppercase() {
    document.formConversor.valorGerado.value = document.formConversor.valorRecebido.value.toUpperCase();
}

document.getElementById("converterCaixaBaixa").addEventListener("click", makeLowercase);
document.getElementById("converterCaixaAlta").addEventListener("click", makeUppercase);
document.getElementById("contadoPalavras").addEventListener("click", countWords);
