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
    
    var inputElement2 = d3.select("#city");    
    var inputValue2 = inputElement2.property("value");
    
    var inputElement3 = d3.select("#state");    
    var inputValue3 = inputElement3.property("value");

    var inputElement4 = d3.select("#country");    
    var inputValue4 = inputElement4.property("value");
  
    console.log(inputValue);
    console.log(sightings);
    
    console.log(inputValue2);
    console.log(sightings);
    
    console.log(inputValue3);
    console.log(sightings);

    console.log(inputValue4);
    console.log(sightings);
  
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    
    var filteredData2 = tableData.filter(sightings => sightings.city === inputValue2);
    
    var filteredData3 = tableData.filter(sightings => sightings.state === inputValue3);

    var filteredData4 = tableData.filter(sightings => sightings.country === inputValue4);

    var filteredData5 = tableData.filter(sightings=> sightings.shape === inputValue5);

    console.log(filteredData);
    console.log(filteredData2);
    console.log(filteredData3);
    console.log(filteredData4);
    console.log(filteredData5);
    
    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key,value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
    filteredData2.forEach((sighting) => {
      var row = tbody.append('tr');

      Object.entries(sighting).forEach(([key,value]) => {
          console.log(key, value);
          var cell = row.append('td');
          cell.text(value);
      });
  });
  filteredData3.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key,value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
filteredData4.forEach((sighting) => {
  var row = tbody.append('tr');

  Object.entries(sighting).forEach(([key,value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
  });
});
filteredData5.forEach((sighting) => {
  var row = tbody.append('tr');

  Object.entries(sighting).forEach(([key,value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
  });
});
  };

  


