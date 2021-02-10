//Muuttaa eurot dollareiksi.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin suorittaa koodin.
$("#nappula_1").click(function(){//Painikkeen painaminen suorittaa funktion.
var eurosumma = $("#eurot").val();//Luetaan syötetty arvo.
var dollareiksi = Number(eurosumma) * 1.1367;//Suoritetaan laskutoimitus.
$("#tulostus_1").html(dollareiksi.toFixed(2) + " dollaria");//Tulostetaan vastaus kahden desimaalin tarkkuudella.
});
});
//Muuttaa dollarit euroiksi.
$(document).ready(function(){
$("#nappula_2").click(function(){
var dollarisumma = $("#dollarit").val();
var euroiksi = Number(dollarisumma) / 1.1367;
$("#tulostus_2").html(euroiksi.toFixed(2) + " euroa");
});
});
