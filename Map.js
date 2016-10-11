//var data = [4, 8, 15, 16, 23, 42];

var data = [82];
var data1 = [80];
var data2 = [78];
var data3 = [70];

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) 
           { return d * 2 + "px"; })
    .text(function(d) { return d; });

d3.select(".chart1")
  .selectAll("div")
    .data(data1)
  .enter().append("div")
    .style("width", function(d) 
           { return d * 2 + "px"; })
    .text(function(d) { return d; });

d3.select(".chart2")
  .selectAll("div")
    .data(data2)
  .enter().append("div")
    .style("width", function(d) 
           { return d * 2 + "px"; })
    .text(function(d) { return d; });

d3.select(".chart3")
  .selectAll("div")
    .data(data3)
  .enter().append("div")
    .style("width", function(d) 
           { return d * 2 + "px"; })
    .text(function(d) { return d; });
