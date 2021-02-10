$(document).ready(function(){
var alku = "";//Globaalit muuttujat.
var loppu = "";
var nimi = "";
var email = "";
var puhelin = "";
$("#modaaliNappi").click(function(){
alku = $("#alku").val();//Luetaan syötetty tieto.
loppu = $("#loppu").val();
nimi = $("#nimi").val();
email = $("#email").val();
puhelin = $("#puhelin").val();
//Lomakkeelta tuleva suomalainen kalenteriaika muutetaan amerikkalaiseen muotoon.
var d1 = alku.substring(0, 2);//Suomalaisesta kalenterista parsitaan päivät, kuukaudet ja vuodet.
var d2 = loppu.substring(0, 2);
var m1 = alku.substring(3, 5);
var m2 = loppu.substring(3, 5);
var y1 = alku.substring(6, 11);
var y2 = loppu.substring(6, 11);		
alku = m1 + "/" + d1 + "/" + y1;//Kuukausien ja päivien järjestys vaihdetaan sekä lisätään kauttaviiva.
loppu = m2 + "/" + d2 + "/" + y2;			
var alkuOlio = new Date(alku); 
var loppuOlio = new Date(loppu);
var unixAika1 = alkuOlio.getTime();//Muutetaan Unix-aikaan eli sekunneiksi.
var unixAika2 = loppuOlio.getTime();
//Vähennyslaskun suorittaminen. Saadaan varauksen kesto sekunneissa.
var ero = Math.abs(unixAika2 - unixAika1); 
//Lasketaan sekuntiero kokonaisissa vuorokausissa.
var eroVuorokausissa = Math.ceil(ero / (24 * 60 * 60 * 1000));

var paivaVuokra = 120;
//Lasketaan vuokrauksen loppusumma. Koska sekä alku- että loppupäivä huomioidaan, pitää lisätä luku 1.
var vuokraSumma = (eroVuorokausissa + 1) * paivaVuokra;
/*Tarkoituksena on tarkistaa, että varaus ei ylitä seitsemää vuorokautta. Tämä ei kuitenkaan toimi
tarkasti. Toiminto kuitenkin edistää positiivisia kassavirtoja myöhästymissakkojen muodossa.
*/
if (eroVuorokausissa <= 6 && alku < loppu){//Seitsemän vuokrauspäivän maksimin  sekä päivämäärien tarkistus.
alku = d1 + "." + m1 + "." + y1;//Muutetaan takaisin suomalaiseen kalenterimuotoon.
loppu = d2 + "." + m2 + "." + y2;
document.getElementById("tallennusNappi").disabled = false;//Hyväksy-nappi aktivoidaan.
$("#tulostus").html("Vuokrauspvm: " + alku + "<br>" + "Palautuspvm: " + loppu + "<br>" + " Nimi: " + nimi + "<br>" + " Sähköposti: " + email + "<br>" + " Puhelin: " + puhelin + "<br>" + " <b><h2>Loppusumma: " + vuokraSumma + " euroa</h2></b>");
}
else{
alert("Tarkista päivämäärät!");//Asiakkaalle kerrotaan, että hänen pitää tarkistaa vuokrausaika.
document.getElementById("tallennusNappi").disabled = true;//Hyväksy-nappi poistetaan käytöstä.
$("#tulostus").html("Vuokrausmaksimi 7 vuorokautta. Palautuspäivä ei voi olla ennen vuokrauspäivää!");//Asiakasta varoitetaan toistamiseen.
}
$('#myModal').modal('show');
});
});
