(function(){


    
var dataURL = "https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json";



var forceCharge = -100,
    linkDistance = 50,
    width=900,
    height=900;



d3.json(dataURL, function(json){
    var svg=d3.select("#chart")
        .attr("width", width)
        .attr("height", height);

var force= d3.layout.force()
    .size([width, height])
    .linkDistance(linkDistance)
    .charge(forceCharge)
        .nodes(json.nodes)
        .links(json.links)
        .start();

    var link=svg.selectAll(".link")
        .data(json.links)
        .enter().append("line")
        .attr("class", "link");

    var flags=d3.select('#flags').selectAll("img")
        .data(json.nodes)
        .enter().append("img")
        .attr("class", function(d) {
      return 'flag flag-' + d.code;
    })
    
    .call(force.drag);

     flags.append("title")
      .text(function(d) { return d.country; });
 

force.on("tick", function() {
    link.attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

  flags.style("left", function(d) {
        return d.x + "px";
      })
      .style("top", function(d) {
        return d.y + "px";
      });

});
});



  })();