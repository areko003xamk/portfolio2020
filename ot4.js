//Sovellus mahdollistaa lintubongarille havaintojen kirjanpidon.
$(function(){
var selected_index = -1; 
var linnutArray = []; //Data pyöritetään linnutArrayssa.
if(localStorage.getItem("linnut") != null) { //Jos localStorage on olemassa silloin tulostus.
tulosta();
}
function tulosta(){
if (localStorage.getItem('linnut') != null){ //Onko tulostettavaa?
var linnutJSON = localStorage.getItem("linnut"); //Haku localStoragesta JSON-muodossa.     
linnutArray = JSON.parse(linnutJSON); //Tietueet sijoitetaan arrayhin.		
if(linnutArray == null){ //Alustetaan array-taulukko tyhjäksi, jos ei mitään sisältöä.
linnutArray = [];
}
//Tulostetaan html-taulukko.
$("#taulu").html = "";
$("#taulu").html("<thead><tr><th>Tunnus</th><th>Lintulaji</th><th>Havaintopäivä</th><th>Havaintopaikka</th></tr></thead><tbody></tbody>");
//Silmukka käy tietueet läpi yksitellen lisäten rivit ja solut html-taulukkoon.		
for(var i = 0;i < linnutArray.length; i++){
$("#taulu tbody").append("<tr><td>" + i +"</td><td>" + linnutArray[i].laji + "</td><td>" + linnutArray[i].paiva + "</td><td>" + linnutArray[i].paikka + "</td><td><img src='delete.png' class='btnDelete'/></td></tr>");
}
}		
}

$(".nappula_lisaa").click(function(){
if($("#laji").val() != ""){
//Syötetyt tiedot sijoitetaan olioon.
var linnutOlio = {
laji : $("#laji").val(),
paiva : $("#paiva").val(),
paikka : $("#paikka").val()
}
//Lisätään uusi lintuolio loppuun.
linnutArray.push(linnutOlio);
//Tallennetaan linnut tietovarastoon.
localStorage.setItem("linnut", JSON.stringify(linnutArray));
}
//Lomakkeen tyhjennys.
$("#laji").val("");
$("#paiva").val("");
$("#paikka").val("");
$("#laji").focus();
tulosta(); //Taulukkoon tulostetaan muuttunut tilanne.
});
//Jos klikataan delete-kuvaketta funktio poistaa kyseisen rivin.
$("#taulu").on("click",".btnDelete",function(){
selected_index = $(this).parent().siblings(":first").text();
linnutArray.splice(selected_index,1);
localStorage.setItem("linnut", JSON.stringify(linnutArray));
tulosta();
});
});
