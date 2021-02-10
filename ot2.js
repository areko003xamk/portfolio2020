//Lisää käyttäjän syöttämän asian muistilistan loppuun.
$(document).ready(function(){//Lataa koko dokumentin ennen kuin suorittaa koodin.
$(".nappula").click(function(){//Painikkeen painaminen suorittaa ohjelman.
var syote = $(".syotto").val();//Luetaan syöte.
$("#tulostus").append("<li>" + syote + "</li");//Tulostaa syotteen listan loppuun.
});
});
//Poistaa muistilistan kohteen sitä klikattaessa.
$(document).ready(function(){
$("#tulostus").on("click","li",function(){
$(this).remove();
});
});
