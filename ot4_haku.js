//Ohjelma kÃ¤y lÃ¤pi taulukon rivit ja tarkistaa sopiiko teksti hakuun.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin ohjelma suoritetaan.
$("#lintuHaku").on("keyup", function(){
var arvo = $(this).val().toLowerCase();//Lukee syÃ¶tteen arvo nimiseen muuttujaan.
$("#taulu tr").filter(function(){
$(this).toggle($(this).text().toLowerCase().indexOf(arvo) > -1)//Toggle() piilottaa rivit, jotka eivÃ¤t sovi hakuun.
//toLowerCase() muuttaa tekstin pienaakkosiksi.
});
});
});