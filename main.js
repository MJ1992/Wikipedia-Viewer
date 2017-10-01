var resultPrint = function(){
  var query = document.getElementById("userInput").value;

  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&srsearch=" +
      query +
      "&prop=info&inprop=url&utf8=&format=json"
  );

  ourRequest.onload = function() {
    
    var resultsContainer = document.getElementById("results");
    if(resultsContainer.length === 0){

      resultFunc();
        

      }else{

        resultsContainer.innerHTML = "";
        resultFunc();
      }

        

  };
  ourRequest.send();

function resultFunc(){
var resultsContainer = document.getElementById("results");
    
    for (i = 0; i < 10; i++) {
      var innerHtml = JSON.parse(ourRequest.responseText);

      console.log(document.getElementById("userInput").value);
 console.log(innerHtml);     

      var name = innerHtml.query.search[i].title;

      var info = innerHtml.query.search[i].snippet;
      
      var url = "https://en.wikipedia.org/wiki/"+ name;
      
            

      resultsContainer.innerHTML +=
        "<li>" + "<b>"+ "<a target='_blank' class = resultUrl href = "+"'"+ url +"'" +">"+name +"</b>"+ "</a>" + "<br>" + info + "</li>";

      document.getElementsByTagName("li")[i].classList.add("Results");
    }



  }



};