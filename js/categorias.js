function ajax4(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
      if(this.readyState == 4  && this.status == 200){
        //console.log(this.responseText);
        document.getElementById("response4").innerHTML = this.responseText;
      }
    }
    
    xhttp.open("GET", "http://localhost:5000/api/categorias");
    xhttp.send();
    
    }