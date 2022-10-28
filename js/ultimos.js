function ajax(){

  //function inicio(){
  //  document.getElementById("response").innerHTML = this.responseText;
  //}

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    if(this.readyState == 4  && this.status == 200){
      //console.log(this.responseText);
        var respuesta = this.response;
        var ultimos = JSON.parse(respuesta);

        for(var i=0; i< ultimos.length; i++ ){
            var u = ultimos[i];
            var descripcion = u["descripcion"];
            var url = u["url"];
            var thumbnail = u["thumbnail"];

            var div = document.createElement('div');
            var img = document.createElement('img');
            var a = document.createElement('a');
            var p = document.createElement('p');

            div.setAttribute("ultimos-recursos", "card");
            p.innerHTML = descripcion;
            img.setAttribute("src", imagen);
            a.innerHTML = "Ver";
            a.setAttribute("href", "http://google.com")

            if(url == "gitbasico"){

            }
            if(url == "bootstrap"){
                
            }
            if(url == "github"){
                
            }
            if(url == "jasine"){
                
            }
            if(url == "azuredevops"){
                
            }
        }


    }
  }

  
  xhttp.open("GET", "http://localhost:5000/api/Curso/ultimos");
  xhttp.send();
  



  }