function ajax2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      if(this.readyState == 4  && this.status == 200){
        //console.log(this.responseText);
        document.getElementById("response2").innerHTML = this.responseText;
      }
    }
    
    xhttp.open("GET", "http://localhost:5000/api/Curso/valorados");
    xhttp.send();
    
    }