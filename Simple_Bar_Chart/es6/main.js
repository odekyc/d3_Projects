import { GDPdata } from "./chart_data";


var mydata=GDPdata["data"].map(function(element){
	return element[1];
});

var x = d3.scale.linear().domain([0, mydata.length]).range([20, 790]);
var y = d3.scale.linear().domain([0, d3.max(mydata)]).range([20, 430]);

d3.select("svg").selectAll(".bar")
  .data(mydata)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x",function(d,i){
  	 return x(i);
  })
  .attr("y",function(d,i){
  	return 430-y(d);
  })
  .attr("width",function(d,i){
  	return x(1)-21;
  })
  .attr("height",function(d,i){
      return y(d);
  });
