import {tempData} from "./data";


(function(){
   var margin = {top:20,right:20,bottom:20,left:25};
   var data=tempData["monthlyVariance"];

   var heatMapWidth=1085/263;
   var heatMapHeight=400/12;

   var benchTemp=8.66;
   var yearFormat=d3.time.format('%Y');
   var monthFormat=d3.time.format('%B');

   var xAxisScale=d3.time.scale();

   var xAxis=d3.svg.axis()
               .orient("bottom")
               .ticks(d3.time.years, 1)
               .tickFormat(yearFormat);

    var yAxisScale=d3.scale.linear()
                   .range([0, 400])
                   .domain([0,12]);
    var yAxis=d3.svg.axis()
                    .orient('left')
                    .ticks(12)
                    .tickFormat(monthFormat)
                    .scale(yAxisScale);

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

     d3.select('#heatmap')
       .append('g')
       .attr('width', 1085 )
       .attr('height', 400)
       .attr('tansform', 'translate('+margin.left+','+margin.top+')');
})();