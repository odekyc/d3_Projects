import {tempData} from "./data";


(function(){
   var margin = {top:20,right:20,bottom:20,left:25};
   var data=tempData["monthlyVariance"];

   var cellWidth=1085/263;
   var cellHeight=450/12;

   var benchTemp=8.66;
   var yearFormat=d3.time.format('%Y');
   var monthFormat=d3.time.format('%B');
   var monthYearFormat=d3.time.format('%Y-%m');

   var mydateData=data.map(function(d){
       var newObj={};
       newObj["date"]=new Date(d["year"], d["month"]-1, 3);
       return newObj;
   });
   
   var myvalueData=data.map(function(d){
      return benchTemp+Number(d["variance"]);
   });


   var x_domain=d3.extent(mydateData, function(d){
         return d.date;
   });

   var calibr_domain=d3.extent(myvalueData, function(d){
   	    return d;
   });

  
  var colorCalibration = ['#4700b3','#00ace6','#5cd65c','#98e698','#d9ff66','#ffffcc','#ffe6b3', '#ffaa80', '#ff7733', '#ff3333','#990033'];

  var months=['Jan', 'Feb', 'Mar','Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov','Dec'];

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
               .ticks(d3.time.years,10)
               .tickFormat(yearFormat);

    var yAxisScale=d3.time.scale()
                   .range([ 0, 440])
                   .domain([new Date(2000, -1,3), new Date(2000,11,3)]);
    var yAxis=d3.svg.axis()
                    .orient('left')
                    .ticks(d3.time.months,1)
                    .tickFormat(monthFormat)
                    .outerTickSize(0)
                    .scale(yAxisScale);

     xAxis.scale(xAxisScale.range([0,1085]).domain(x_domain));

     heatmap.append('g')
            .attr('transform', 'translate('+95+','+455+')')
            .attr('class', 'x')
            .call(xAxis);

     heatmap.append('g')
            .attr('transform', 'translate( 95, -5)')
            .attr('class', 'y')
            .call(yAxis);


     	var tip = d3.tip()
	  .attr('class', 'd3-tip')
	  .offset([-10, 0])
	  .html(function(d) {
	    return "<strong>Time : </strong> <span style='color:yellow'>" + months[Number(d.month)-1]+"-"+ d.year+ "</span><br /><br/>"+(benchTemp+Number(d.variance))+"&#8451<br /><br />"+ d.variance+"&#8451";
	  });
    
    

     var rects=heatmap.selectAll('rect')
               .data(data)
               .enter()
               .append('rect')
               .attr('width', cellWidth)
               .attr('height', cellHeight)
               .attr('x', function(d){
               	   var x= cellWidth*(Number(d.year)-1753)+95;
                   return x;
               })
               .attr('y', function(d){
               	    var y= cellHeight*(Number(d.month-1))+1;
               	    return y;
               })
               .attr('fill', 'white')
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide);

        rects.call(tip);



	  
               

        rects.transition()
             .delay(function(d){
             	return (d.year-1753)*15;
             })
             .duration(500)
             .attrTween('fill', function(d, i, a){

             	var colorIndex=d3.scale.quantize()
             	    .range([0,1,2,3,4,5,6,7,8,9,10])
             	    .domain(calibr_domain);
             	 return d3.interpolate(a, colorCalibration[colorIndex(8.66+Number(d.variance))]);
             });



})();