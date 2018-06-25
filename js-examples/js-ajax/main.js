function json() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("json-data").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "json.js", true);
    xhttp.send();
  }