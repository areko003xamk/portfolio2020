$(document).ready(function(){
$("#tallennusNappi").click(function(){	
var tiedotOlio = { alku : alku, loppu : loppu, nimi : nimi, email : email, puhelin : puhelin}; 				
var tiedotJSON = JSON.stringify(tiedotOlio);//Muunnetaan JSON-stringiksi
console.log(tiedotJSON);//Testitulostus konsoliin.
$("#exampleModal").modal("hide");//Suljetaan modaali-ikkuna
});
});
