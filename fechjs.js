
     var enlace = "https://superheroapi.com/api/"

     var token = "2788645444482154/"



     var BTBUSCAR = document.getElementById("buscarnb");

     BTBUSCAR.addEventListener("click",cargarHeore);


     function cargarHeore(e){
    e.preventDefault();


    var IDH = document.getElementById("nombrecd").value;



    fetch("https://www.superheroapi.com/api.php/2788645444482154/"+IDH)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var divc = document.getElementById("mostrarheroe");
        var icol="";
        var irow ="";
        icol = "<p>NOMBRE: "+ data.name + "</p> ";
        icol += "<p>RAZA: "+data.appearance.race+"</p>";
        icol += "<p>GENERO: "+data.appearance.gender+"</p>";
        icol += "<p>OCUPACION: "+data.work.occupation+"</p>";
        icol += "<img src='"+ data.image.url +"' width='300px' heigth='450px'/>"
        irow = icol;

        divc.innerHTML = irow;
    })
}