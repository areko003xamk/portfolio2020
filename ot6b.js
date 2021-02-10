//Luodaan kalenteri, josta päivämäärä voidaan poimia. Kalenteri tuli näkyväksi tämän osan lisäämisen jälkeen.
$(document).ready(function(){
$('.form_date').datepicker({ 
language:  'fi',
format: "dd.mm.yyyy",
weekStart: 1,
todayBtn:  1,
autoclose: 1,
todayHighlight: 1,
minView: 2,
forceParse: 0
});
});
