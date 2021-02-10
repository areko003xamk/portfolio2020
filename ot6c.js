$(document).ready(function(){	
$(".hakuNappula").click(function(){	
$.ajax({url: "asunnot.json",//Haetaan tiedosto palvelimelta.
success: function(tulos){//Haun onnistuessa kopioidaan tulos-muuttujaan.
tulostaTiedot(tulos);//LÃ¤hetÃ¤Ã¤n tiedosto hakuohjelmalle.
}
});
});
});
function tulostaTiedot(tulos){
var hakunro = $(".kohdeHaku").val();//Luetaan syÃ¶te.
$("#kohdeTiedot").html("<thead><tr><th>Katuosoite</th><th>Postinumero</th><th>Postitoimipaikka</th><th>Hinta</th></tr></thead><tbody></tbody>");
for(var i = 0; i < tulos.length; i++){//KÃ¤ydÃ¤Ã¤n lÃ¤pi taulukon rivit.
if(hakunro == tulos[i].kohdenro){//Ehdon tÃ¤yttyessÃ¤ tulostaa osuman tiedot.
$("#kohdeTiedot tbody").append("<tr><td>" + tulos[i].katuosoite + "</td><td>" + tulos[i].postinro + "</td><td>" + tulos[i].ptp + "</td><td>" + tulos[i].hinta + "</td></tr>");
}
}
}				
