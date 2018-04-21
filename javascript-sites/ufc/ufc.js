
//get api data and display in list

    function getChampions(){
      var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            //document.getElementById("demo").innerHTML = myArr[3].last_name;
            //console.log(myArr.length);
            myArr.forEach(function(element){
                var strChamp = element.thumbnail;
                var newStrChamp = strChamp.replace('?-mw300-mh300-tc1', '');
    //            console.log(element);
                    document.getElementById("apiData").innerHTML = document.getElementById("apiData").innerHTML 
                        + "<li list-group-item>" 
                            + "<h5>" + element.weight_class + "</h5>" 
                            + "<img src='" + newStrChamp + "'> " 
                            + element.first_name + " " 
                            + element.last_name + " "
                            + element.wins + " - " + element.losses + " - " + element.draws
                        + "</li><br>";
            })
        }
    };
    xmlhttp.open("GET", "http://ufc-data-api.ufc.com/api/v1/us/fighters/title_holders", true);
    xmlhttp.send();
    }

//show and hide champions

    function showChampions() {

        //toggle textContent of id="btnChampions"
        var t = document.getElementById('btnChampions');
        //console.log(t);
        if (t.textContent == "Hide"){
            t.textContent = "Show";
        }else{
            t.textContent = "Hide";
        }

        //toggle display of id="champions"
        var x = document.getElementById("champions");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

