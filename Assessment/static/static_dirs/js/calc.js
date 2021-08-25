function getSumOfArray(numArray){
  var total = 0;
  len = numArray.length;
  for(var i=0; i < len; i++){
    total += numArray[i];
  }
  return total;
}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
/*function roundOffTwoDecimal(numArray){
  return Math.round(numArray * 100) / 100;
}*/
function getFourDecimalPoints(numArray) {
  return numArray.toFixed(4);
}
/*function roundOff(numArray){
  return Math.round(numArray);
}
*/
$calcMeanDeviationAndVariance = function(a) {
  var r = {
            mean: 0,
            variance: 0,
            deviation: 0
          };
  var t = a.length;
  for(var m, s = 0, l = t; l--; s += a[l]);
  for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
  return r.deviation = Math.sqrt(r.variance = s / t), r;
}
$getCpCPkResultsSet = function(filteredValue){
  var cpCPkResultsSet = {};
  $.each(filteredValue, function (index, values) {
    var calculatedValues = $calcMeanDeviationAndVariance(values);
    var mean = calculatedValues.mean;
    var deviation = calculatedValues.deviation;

    var lowerLimt = getMinOfArray(values);
    var upperLimit = getMaxOfArray(values);

    var cpValue = (upperLimit - lowerLimt) / (6 * deviation);

    var cpk1 = (upperLimit - mean) / (3 * deviation);
    var cpk2 = (mean - lowerLimt) / (3 * deviation);

    var cpkValue = Math.min.apply(null, [cpk1,cpk2]);
    cpCPkResultsSet[index] = [cpValue,cpkValue];
  });
  return  cpCPkResultsSet;
}




// Control and Range Chart Calulations
/*var sampleDataForMobileApp = [72.7150,72.7200,72.7350,72.7400,72.7400
                              ,72.7400,72.7350,72.7250,72.7200,72.7300
                              ,72.7200,72.7250,72.7350,72.7350,72.7400
                              ,72.7400,72.7350,72.7300,72.7250,72.7200
                              ,72.7200,72.7300,72.7350,72.7350,72.7400
                              ,72.7400,72.7350,72.7350,72.7250,72.7200
                              ,72.7200,72.7250,72.7300,72.7350,72.7400
                              ,72.7400,72.7350,72.7300,72.7250,72.7200
                              ,72.7250,72.7300,72.7350,72.7400,72.7450
                              ,72.7400,72.7350,72.7300,72.7250,72.7200];*/

$calculateControlAndRangeChartData = function(sampleDataForMobileApp){
  var controlAndRangeDataSet = {};

  var groupedData = {};
  var range = [];
  var avgXBar = [];
  var avgXDBar = [];
  var avgRBar = [];
  var uclx = [];
  var lclx = [];
  var uclr = [];
  var lclr = [];
  var a2 = 0.577;// constant value
  var d4 = 2.114;// constant value

  /* a2 and d2 values may change by sample size
  Sample		d2	     A2	     D4
  1		     1.123	  2.560	  3.270
  2		     1.128	  1.880	  3.267
  3		     1.693	  1.023	  2.574
  4		     2.059	  0.729	  2.282
  5		     2.326	  0.577	  2.114*/

  count = 0;
  $.each(sampleDataForMobileApp, function (index, values) {
    if(index % 5 == 0){
      var selectedDataList = sampleDataForMobileApp.slice(index,(index+5))
      var minValue = getMinOfArray(selectedDataList);
      var maxValue = getMaxOfArray(selectedDataList);
      var totalValue = getSumOfArray(selectedDataList);
      var dataListSize = selectedDataList.length;

      range[count] = maxValue - minValue;
      avgXBar[count] = totalValue / dataListSize;

      count++;
    }
  });
  $.each(avgXBar,function(index,value){
      avgXDBar[index] = getSumOfArray(avgXBar)/avgXBar.length;
  });
  $.each(range,function(index,value){
      avgRBar[index] = getSumOfArray(range)/range.length;
  });

  for(var count=0;count<avgRBar.length;count++){
      uclx[count] = avgXDBar[count]+(a2*avgRBar[count]);
      lclx[count] = avgXDBar[count]-(a2*avgRBar[count]);
      uclr[count] = d4*avgRBar[count];
      lclr[count] = 0*avgRBar[count];
  }
  controlAndRangeDataSet = {
    'controlChartData' : {
        'xLabel' : 'Process',
        'yLabel' : 'Values',
        'yInterval' : 0.0100,
        'uclx' : uclx,
        'lclx' : lclx,
        'avgXBar' : avgXBar,
    },
    'rangeChartData' : {
        'xLabel' : 'Process',
        'yLabel' : 'Values',
        'yInterval' : 0.0100,
        'uclr' : uclr,
        'lclr' : lclr,
        'range' : range,
    },
  };
  return  controlAndRangeDataSet;
};
