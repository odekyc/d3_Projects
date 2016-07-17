import {tempData} from "./data";


(function(){
   var margin = {top:20,right:20,bottom:20,left:25};
   var data=tempData["monthlyVariance"];

   var cellWidth=1085/263;
   var cellHeight=450/12;

   var benchTemp=8.66;
   var yearFormat=d3.time.format('%Y');
   var monthFormat=d3.time.format('%B');

 

  var colorCalibration = ['#4700b3','#00ace6','#5cd65c','#98e698','#d9ff66','#ffffcc','#ffe6b3', '#ffaa80', '#ff7733', '#ff3333','#990033'];

  

   d3.select('#svg-calibrate')
      .selectAll('rect').data(colorCalibration).enter()
    .append('rect')
      .attr('width', 60)
      .attr('height', 25)
      .attr('x',function(d,i){
        return i*60;
      })
      .attr('fill',function(d){
        return d;
      });

      var heatmap= d3.select('#heatmap');
     
      var xAxisScale=d3.time.scale();

   var xAxis=d3.svg.axis()
               .orient("bottom")
               .ticks(26)
               .tickFormat(yearFormat);

    var yAxisScale=d3.time.scale()
                   .range([ 0, 420])
                   .domain([1, 12]);
    var yAxis=d3.svg.axis()
                    .orient('left')
                    .ticks(12)
                    .tickFormat(monthFormat)
                    .outerTickSize(0)
                    .scale(yAxisScale);

     xAxis.scale(xAxisScale.range([0,1085]).domain([1753, 2015]));

     heatmap.append('g')
            .attr('transform', 'translate('+95+','+455+')')
            .attr('class', 'x')
            .call(xAxis);
     heatmap.append('g')
            .attr('transform', 'translate( 95, 20)')
            .attr('class', 'y')
            .call(yAxis);

})();