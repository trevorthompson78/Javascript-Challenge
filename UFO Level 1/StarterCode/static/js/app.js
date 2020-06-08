// from data.js
var tableData = data;
console.log(data);
// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
  });


  data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function([key, value]) {
      console.log(key, value);
 
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var sightings = tableData;
  var button = d3.select("#filter-btn");
  var form = d3.select("#filters");
  
  button.on("click", runEnter);
//   form.on("submit",runEnter);

  function runEnter(){
    d3.select("tbody").html("");
    d3.event.preventDefault();
  
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(sightings);
  
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
  
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key,value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
  };

  


