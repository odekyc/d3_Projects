import {tempData} from "./data";


(function(){
   alert(tempData["baseTemperature"]);

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



})();