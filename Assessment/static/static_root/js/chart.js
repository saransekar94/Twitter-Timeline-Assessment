function roundOf(value, decimalPoints) {
    if (value != null) {
        return value.toFixed(decimalPoints);
    }
}

function plot_histogram_chart(data, output_div) {
    //alert("ok");
    var s1 = data.frequency_value; //[0,23,7,24,8,6,0];
    var ticks = data.ticks; //[15.862,15.8632,15.8656,15.868,15.8704,15.8728,15.875];
    /* var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };  
 */ //color_value = 'red'
    color_list = data.color_list;
    plot7 = $.jqplot('chart1', [s1], {
        seriesColors: color_list,
        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            //color:color_value,
            rendererOptions: {
                //barWidth: 100,
                barMargin: 0,
                varyBarColor: true
            },
            pointLabels: { show: true, hideZeros: true }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,

                ticks: ticks,
                label: 'Measured Value',


            },
            yaxis: {
                min: 0,
                label: 'Frequency',
                /* tickOptions:{
                labelPosition: 'middle', 
                angle:-30
            },*/

            }
        },
        cursor: {
            show: true,
            zoom: true,
        },
        /*  grid: grid,
        canvasOverlay: {
            show: true,
            objects: [
                {verticalLine: {
                    name: 'lsl',
                    x: 1,
                    lineWidth: 3,
                    yOffset: 0,
                    lineCap: 'butt',
                    color: 'rgb(89, 198, 154)',
                    shadow: false,
                    showTooltip: true,
                    tooltipFormatString: 'LSL',
                }},
                {verticalLine: {
                    name: 'usl',
                    x: ticks.length,
                    lineWidth: 3,
                    yOffset: 0,
                    lineCap: 'butt',
                    color: 'rgb(89, 198, 154)',
                    shadow: false,
                    showTooltip: true,
                    tooltipFormatString: 'USL'
                }},
            ]
        }*/
    });
}

function plot_p_chart(data, output_div_id) {
    var ucl = data.ucl_list;
    var lcl = data.lcl_list;
    var p = data.p_values;
    var types = ['ucl', 'lcl', 'p'];
    var ticks = data.date;
    var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };

    plot2 = $.jqplot(output_div_id, [ucl, lcl, p], {
        seriesDefaults: {
            pointLabels: {
                show: true,
            } // location:'se',ypadding: 12 
        },
        axes: {
            xaxis: {
                min: 0,
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
                /*tickOptions: {
                       formatString: '%F',//'%Q',
                    textColor: 'black',
                    fontSize: '11px',
                    labelPosition: 'auto'
              // labelPosition: 'middle',
              //angle: -30,
              }*/



            },
            yaxis: {
                min: 0,
                //showGridline:true
            }

        },
        cursor: {
            show: true,
            zoom: true,
        },
        /*   grid: grid,
            canvasOverlay: {
            show: true,
            objects: [
                {horizontalLine: {
                    name: 'cp/cpk',
                    y: 1.33,
                    lineWidth: 3,
                    xOffset: 0,
                    color: 'rgb(89, 198, 154)',
                    shadow: false,
                    showTooltip: true,
                    tooltipFormatString: 'Cpk Target min 1.33'
                }},

            ]
        },*/
        legend: {
            show: true,
            labels: types
        }
    });

}

function plot_ppm_daily_chart(data, output_div_id) {

    var ppm = data.ppm_values;
    //var cpk = data.cpk_values;
    var types = ['ppm'];
    var ticks = data.ticks;
    var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };

    plot2 = $.jqplot(output_div_id, [ppm], {
        seriesDefaults: {
            pointLabels: {
                show: true,
            } // location:'se',ypadding: 12 
        },
        axes: {
            xaxis: {
                min: 0,
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
                /*tickOptions: {
                       formatString: '%F',//'%Q',
                    textColor: 'black',
                    fontSize: '11px',
                    labelPosition: 'auto'
              // labelPosition: 'middle',
              //angle: -30,
              }*/



            },
            yaxis: {
                min: 0,
                //showGridline:true
            }

        },
        cursor: {
            show: true,
            zoom: true,
        },
        /*   grid: grid,
            canvasOverlay: {
            show: true,
            objects: [
                {horizontalLine: {
                    name: 'cp/cpk',
                    y: 1.33,
                    lineWidth: 3,
                    xOffset: 0,
                    color: 'rgb(89, 198, 154)',
                    shadow: false,
                    showTooltip: true,
                    tooltipFormatString: 'Cpk Target min 1.33'
                }},

            ]
        },*/
        legend: {
            show: true,
            labels: types
        }
    });

}

function plot_ppk_chart(data, output_div) {
    var s1 = data.frequency_value //[0,23,7,24,8,6,0];
    var ticks = data.ticks //[15.862,15.8632,15.8656,15.868,15.8704,15.8728,15.875];
    var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };

    plot7 = $.jqplot('chart1', [s1], {
        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                //barWidth: 200,
                barMargin: 0
            },
            pointLabels: { show: true, hideZeros: true }
        },
        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,

                ticks: ticks,
                label: 'Mid point value',


            },
            yaxis: {
                min: 0,
                label: 'Frequency',
                tickOptions: {
                    labelPosition: 'middle',
                    angle: -30
                },


            }
        },
        cursor: {
            show: true,
            zoom: true,
        },
        grid: grid,
        canvasOverlay: {
            show: true,
            objects: [{
                    verticalLine: {
                        name: 'lsl',
                        x: 1,
                        lineWidth: 3,
                        yOffset: 0,
                        lineCap: 'butt',
                        color: 'rgb(89, 198, 154)',
                        shadow: false,
                        showTooltip: true,
                        tooltipFormatString: 'LSL',
                    }
                },
                {
                    verticalLine: {
                        name: 'usl',
                        x: ticks.length,
                        lineWidth: 3,
                        yOffset: 0,
                        lineCap: 'butt',
                        color: 'rgb(89, 198, 154)',
                        shadow: false,
                        showTooltip: true,
                        tooltipFormatString: 'USL'
                    }
                },
            ]
        }
    });
}

function batch_wise_cp_cpk(data, output_div_id) {
    console.log(data);
    var cp = data.cp_values;
    var cpk = data.cpk_values;
    //var max_range = Math.max(cpk);
    var types = ['cp', 'cpk'];
    var ticks = data.x_axis_names;
    var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };

    plot2 = $.jqplot(output_div_id, [cp, cpk], {
        height: 550,
        seriesDefaults: {
            pointLabels: {
                show: true,
            } // location:'se',ypadding: 12 
        },
        axes: {
            xaxis: {
                min: 0,
                /*pad: 0,
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks,
                    rendererOptions:{sortMergedLabels:false},
                    tickOptions: {
                       formatString: '%F',//'%Q',
                    textColor: 'black',
                    fontSize: '11px',
                    //labelPosition: 'auto',
              //labelPosition: 'middle',
              angle: -30,*/
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
                tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                tickOptions: {
                    angle: -60
                },
                //pad: 0
                //}
                //},



            },
            yaxis: {
                min: 0,
                /* max:max_range+1,*/
                showGridline: true
            }

        },


        cursor: {
            show: true,
            zoom: true,
        },

        grid: grid,
        canvasOverlay: {
            show: true,
            objects: [{
                    horizontalLine: {
                        name: 'cp/cpk',
                        y: 1.33,
                        lineWidth: 3,
                        xOffset: 0,
                        color: 'rgb(89, 198, 154)',
                        shadow: false,
                        showTooltip: true,
                        tooltipFormatString: 'Cpk Target min 1.33',
                        tooltipLocation: 'n'
                    }
                },

            ]
        },
        legend: {
            show: true,
            labels: types
        }
    });
}


function plot_cp_cpk(data, output_div_id) {
    console.log(data);
    var cp = data.cp_values;
    var cpk = data.cpk_values;
    var max_range = Math.max(cpk);
    var types = ['cp', 'cpk'];
    var ticks = data.x_axis_names;
    var grid = {
        gridLineWidth: 1.5,
        gridLineColor: 'rgb(235,235,235)',
        drawGridlines: true
    };

    plot2 = $.jqplot(output_div_id, [cp, cpk], {
        seriesDefaults: {
            pointLabels: {
                show: true,
            } // location:'se',ypadding: 12 
        },
        axes: {
            xaxis: {
                min: 0,
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks,
                tickOptions: {
                    formatString: '%F', //'%Q',
                    textColor: 'black',
                    fontSize: '11px',
                    labelPosition: 'auto'
                        // labelPosition: 'middle',
                        //angle: -30,
                }



            },
            yaxis: {
                min: 0,
                max: max_range + 1,
                showGridline: true
            }

        },
        cursor: {
            show: true,
            zoom: true,
        },
        grid: grid,
        canvasOverlay: {
            show: true,
            objects: [{
                    horizontalLine: {
                        name: 'cp/cpk',
                        y: 1.33,
                        lineWidth: 3,
                        xOffset: 0,
                        color: 'rgb(89, 198, 154)',
                        shadow: false,
                        showTooltip: true,
                        tooltipFormatString: 'Cpk Target min 1.33',
                        tooltipLocation: 'n'
                    }
                },

            ]
        },
        legend: {
            show: true,
            labels: types
        }
    });
}

function draw_pie_chart(data, output_div_id) {
    if (data.length != 0) {
        $.jqplot(output_div_id, [data], {
            /*title: 'Pie Chart with Tooltips',*/
            seriesDefaults: {
                renderer: $.jqplot.PieRenderer,
                rendererOptions: {
                    showDataLabels: true,
                    padding: 10,
                    sliceMargin: 6,
                    shadow: false
                }
            },
            legend: {
                show: true
            },
            highlighter: {
                show: true,
                useAxesFormatters: false,
                tooltipFormatString: '%s'
            }

        });
    } else {
        $('#' + output_div_id).attr("align", "center").html("No defects were found.");
    }
}


function plot_P_NP_Chart(p_bar_list, ucl_list, p_list, lcl_list) {
    // Plot Chart Start
    try {
        console.log("Plotting P Chart...");
        console.log(ucl_list, lcl_list);
        var plot2 = $.jqplot('chart1', [p_list, ucl_list, lcl_list], {
            title: 'p Chart',
            seriesDefaults: {
                breakOnNull: true,
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        formatString: '%b %#d',
                        showGridline: false,
                        angle: -90,
                    },
                    tickInterval: '1 day'
                },
                yaxis: {
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        showGridline: false,
                        formatString: "%#.4f"
                    },
                }
            },
            highlighter: {
                show: true,
            },
            legend: {
                show: true,
                location: 'ne',
                placement: 'inside',
                fontSize: '8px',
                labels: ["p", "UCL", "LCL"],
                rendererOptions: {
                    numberRows: 1
                },
            },
            series: [{
                lineWidth: 4,
                markerOptions: {
                    style: 'square'
                }
            }],
            cursor: {
                show: true,
                zoom: true,
            },
            grid: {
                backgroundColor: '#FFFFFF'
            }
        });
        console.log("Chart plotted.");
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {
            alert("No data retrived for selected options.");
        }
    }
}


function plotControlAndRangeChart(dataset, control_div_id, range_div_id) {

    avgXBar = dataset.avg_x_bar; //[15.8676,15.8677,15.8678,15.8679,15.8680]//dataset.controlChartData.avgXBar;
    uslx = dataset.uslx; //15.8696//dataset.controlChartData.uslx;
    lslx = dataset.lslx; //15.8638//dataset.controlChartData.lslx;
    console.log(avgXBar);
    console.log(uslx);
    console.log(lslx);

    range = dataset.r_bar; //[0.001,0.003,0.005,0.007,0.009]//dataset.rangeChartData.range;
    uclr = dataset.uclr; //0.0106//dataset.rangeChartData.uclr;
    lclr = dataset.lclr; //0.0//dataset.rangeChartData.lclr;
    console.log(range);
    console.log(uclr);
    console.log(lclr);

    if (avgXBar.length != 0) {
        var plot1 = $.jqplot(control_div_id, [avgXBar], {
            seriesDefaults: {
                pointLabels: {
                    show: true,
                } // location:'se',ypadding: 12 
            },
            title: 'avgXBar Chart',
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    rendererOptions: { sortMergedLabels: true }
                },
                yaxis: {
                    min: lslx - 0.004,
                    max: uslx + 0.004
                }
            },
            cursor: {
                show: true,
                zoom: true,
            },
            canvasOverlay: {
                show: true,
                objects: [{
                        horizontalLine: {
                            name: 'uslx',
                            y: uslx,
                            lineWidth: 3,
                            color: 'rgb(100, 55, 124)',
                            shadow: false,
                            showTooltip: true,
                            tooltipFormatString: 'uslx value' + ":  " + uslx.toString(),
                            //tooltipLocation:'n'
                        }
                    },
                    {
                        horizontalLine: {
                            name: 'lslx',
                            y: lslx,
                            lineWidth: 3,
                            xminOffset: '8px',
                            xmaxOffset: '29px',
                            color: 'rgb(50, 55, 30)',
                            shadow: false,
                            showTooltip: true,
                            tooltipFormatString: 'lslx value' + ":  " + lslx.toString(),
                            //tooltipLocation:'w'
                        }
                    }
                ]
            },
            highlighter: {
                fadeTooltip: false,
            }
        });
    } else {
        var div = document.getElementById(control_div_id);
        div.innerHTML = "No data to specify";
    }
    if (range.length != 0) {
        var plot2 = $.jqplot(range_div_id, [range], {
            seriesDefaults: {
                pointLabels: {
                    show: true,
                } // location:'se',ypadding: 12 
            },
            title: 'Range Chart',
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    rendererOptions: { sortMergedLabels: true }
                },
                yaxis: {
                    min: lclr - 0.004,
                    max: uclr + 0.004
                }
            },
            cursor: {
                show: true,
                zoom: true,
            },
            canvasOverlay: {
                show: true,
                objects: [{
                        horizontalLine: {
                            name: 'uclr',
                            y: uclr,
                            lineWidth: 3,
                            color: 'rgb(100, 55, 124)',
                            shadow: false,
                            showTooltip: true,
                            tooltipFormatString: 'uclr value' + ":  " + uclr.toString(),
                            fadeTooltip: false,
                            //tooltipLocation:'n'
                        }
                    },
                    {
                        horizontalLine: {
                            name: 'lclr',
                            y: lclr,
                            lineWidth: 3,
                            xminOffset: '8px',
                            xmaxOffset: '29px',
                            color: 'rgb(50, 55, 30)',
                            shadow: false,
                            showTooltip: true,
                            tooltipFormatString: 'lclr value' + ":  " + lclr.toString(),
                            //tooltipLocation:'w'
                        }
                    }
                ]
            }
        });
    } else {
        var div = document.getElementById(range_div_id);
        div.innerHTML = "No data to specify";
    }
}

function plotPpmChart(ppmResultDataSet, screen) {
    if (screen == "asn") {
        output_div = 'ppm_chart'
    } else {
        output_div = 'chart1'
    }
    console.log(ppmResultDataSet);
    try {
        var prevTwoYearData = ppmResultDataSet.prev_year_data; //[['2015',50],['2016', 60]]//ppmResultDataSet.prevTwoYearData;
        var monthsData = ppmResultDataSet.month_data; //[['7-2017', 7], ['8-2017', 12]];//ppmResultDataSet.monthsData;

        var selectedYearData = ppmResultDataSet.current_year; //[['2017',110]];//ppmResultDataSet.selectedYearData;

        var barWidthAndPadding = 35;
        var totalNoOfMonths = monthsData.length;
        if (totalNoOfMonths > 10) {
            barWidthAndPadding = 25;
        } else if (totalNoOfMonths > 8) {
            barWidthAndPadding = 30;
        } else {
            barWidthAndPadding = 40;
        }

        var plot2 = $.jqplot(output_div, [prevTwoYearData, monthsData, selectedYearData], {
            title: 'PPM Report',
            stackSeries: false,
            axesDefaults: {
                tickOptions: {
                    showGridline: true
                },
                // labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            },
            seriesDefaults: {
                rendererOptions: {
                    highlightMouseOver: false,
                },
                breakOnNull: true,
            },
            animate: !$.jqplot.use_excanvas,
            highlighter: {

                show: false,
                tooltipAxes: 'y',
                formatString: "%#.4f"

            },
            series: [
                //bar chart for prev Two Year Prpo
                {
                    disableStack: true,
                    renderer: $.jqplot.BarRenderer,
                    color: '#2881FC',
                    pointLabels: {
                        // renderer : $.jqplot.DefaultTickFormatter,
                        show: true,
                        stackedValue: true,
                        //formatString: "%#.2f"
                    },
                    rendererOptions: {
                        barPadding: -barWidthAndPadding,
                        //barMargin : 0,
                        barDirection: 'vertical',
                        barWidth: barWidthAndPadding,
                    },
                },
                //Line chart for Actual Month Data
                {
                    disableStack: true, //otherwise it wil be added to values of previous series
                    renderer: $.jqplot.LineRenderer,
                    //lineWidth: 2,
                    color: 'red',
                    pointLabels: {
                        show: true
                    },
                    markerOptions: {
                        size: 5
                    }
                },
                //Line chart for Empty Month Data
                {
                    disableStack: true,
                    renderer: $.jqplot.BarRenderer,
                    showMarker: false,
                    color: '#FC28EB',
                    pointLabels: {
                        show: true,
                        stackedValue: true
                    },
                    rendererOptions: {
                        barPadding: -barWidthAndPadding,
                        //barMargin : 0,
                        barDirection: 'vertical',
                        barWidth: barWidthAndPadding,
                    },
                },
            ],
            cursor: {
                show: true,
                zoom: true
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    min: 0,
                    pad: 1.05,
                    //tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
                    tickOptions: {
                        fontSize: '10pt',
                        angle: -90,
                        labelPosition: 'middle',
                    },
                },
                yaxis: {
                    //tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    autoscale: false,
                    min: 0,
                    //tickInterval: 1,
                    /* tickOptions:{
                       formatString: "%#.4f"
                     },*/
                }
            }

        });
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {
            alert("No data retrived for selected options.");
        }
    }
}


function plotCpCpkChart(cpcpkChartDataSet, output_div) {

    try {
        ticks = cpcpkChartDataSet.ticks;
        cpValues = cpcpkChartDataSet.cp;
        cpkValues = cpcpkChartDataSet.cpk;

        var grid = {
            gridLineWidth: 1.5,
            gridLineColor: 'rgb(235,235,235)',
            drawGridlines: true
        };

        var max_data = 1.4000;


        if (getMaxOfArray(cpValues) > max_data) {
            max_data = getMaxOfArray(cpValues);
        }
        if (getMaxOfArray(cpkValues) > max_data) {
            max_data = getMaxOfArray(cpValues);
        }

        chartYMax = max_data;

        var plot1 = $.jqplot(output_div, [cpValues, cpkValues], {
            title: 'Cp/Cpk Chart',
            axesDefaults: {
                tickOptions: {
                    showGridline: true
                },
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            },
            highlighter: {
                show: true,
                tooltipAxes: 'y',
            },
            series: [{
                    renderer: $.jqplot.LineRenderer,
                    label: 'Cp',
                    color: 'red',
                    showMarker: true,
                    markerOptions: {
                        style: 'filledSquare'
                    },
                    highlighter: {
                        show: true,
                    },
                    pointLabels: {
                        show: true,
                        location: 's',
                        formatString: "%#.4f"
                    },
                },
                {
                    renderer: $.jqplot.LineRenderer,
                    label: 'Cpk',
                    color: 'blue',
                    showMarker: true,
                    markerOptions: {
                        style: 'filledDiamond'
                    },
                    pointLabels: {
                        show: true,
                        location: 'n',
                        formatString: "%#.4f"
                    },
                    highlighter: {
                        show: true,
                    },
                },
            ],
            legend: {
                show: true,
                location: 'ne',
                placement: 'inside',
                fontSize: '8px',
                dataLabels: 'label',
                formatString: "%#.4f",
                rendererOptions: {
                    numberRows: 1
                },
            },
            seriesDefaults: {
                rendererOptions: {
                    smooth: true,
                    animation: {
                        show: true,
                    }
                },
                showMarker: false,
                breakOnNull: true,
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        fontSize: '10pt',
                        angle: -90,
                        labelPosition: 'middle',
                        showGridline: true,
                    },
                    ticks: ticks
                },
                yaxis: {
                    //max:chartYMax,
                    max: 1.5,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        showGridline: true,
                        formatString: "%#.4f"
                    }
                },
            },
            grid: grid,
            canvasOverlay: {
                show: true,
                objects: [{
                    dashedHorizontalLine: {
                        name: 'boundary',
                        y: 1.3300,
                        lineWidth: 1,
                        color: 'rgb(0, 0, 255)',
                        shadow: false,
                        showTooltip: true,
                        tooltipFormatString: 'Cpk Target min 1.33'
                    }
                }]
            },
            canvasOverlay: {
                show: true,
                objects: [{
                    horizontalLine: {
                        //name: 'uslx',
                        y: 1.3,
                        lineWidth: 3,
                        color: 'rgb(100, 55, 124)',
                        shadow: false
                    }
                }, ]
            },
            cursor: {
                show: true,
                zoom: true,
            }
        });
        console.log("CP/CPK Plotted.");
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {

        }
    }
    $(window).resize(function() {
        plot1.replot({ resetAxes: true });
    });
}


function histogram(ppmResultDataSetForProcess, div_id) {
    try {
        console.log("Plotting histogram...");
        var plotData = ppmResultDataSetForProcess.values;
        var color_list = ppmResultDataSetForProcess.series_color;
        $.each(plotData, function(index, value) {
            value[0] += '';
        });
        var plot2 = $.jqplot(div_id, [plotData], {
            title: 'Histogram',
            seriesColors: color_list,
            seriesDefaults: {
                pointLabels: {
                    show: true,
                    stackedValue: true
                },
                rendererOptions: {
                    varyBarColor: true
                }
            },
            animate: !$.jqplot.use_excanvas,
            series: [{
                shadow: false,
                renderer: $.jqplot.BarRenderer,
                color: 'blue',
                rendererOptions: {
                    barMargin: 0,
                }
            }],
            axesDefaults: {
                tickOptions: {
                    show: true,
                    showGridline: false
                },
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        angle: -90,
                        fontSize: '10pt',
                        formatString: "%#.4f"
                    }
                },
                yaxis: {
                    min: 0,
                }
            },
            cursor: {
                show: true,
                zoom: true,
            },
            grid: {
                show: false,
                backgroundColor: '#FFFFFF'
            }
        });
        console.log("Histogram plotted...");
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {
            alert("No data retrived for selected options.");
        }
    }
}

function plotPpmDailyChart(ppmResultDataSet) {
    console.log(ppmResultDataSet);
    try {
        var dailyData = ppmResultDataSet.dailyData;

        console.log("Plotting PPM Daily Chart...");
        var plot2 = $.jqplot('chart1', [dailyData], {
            title: 'PPM Daily Chart',
            seriesDefaults: {
                breakOnNull: true,
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.DateAxisRenderer,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        formatString: '%b %#d',
                        showGridline: false,
                        angle: -90,
                    },
                    tickInterval: '1 day'
                },
                yaxis: {
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        showGridline: false,
                        formatString: "%#.4f"
                    },
                }
            },
            highlighter: {
                show: true,
            },
            legend: {
                show: true,
                location: 'ne',
                placement: 'inside',
                fontSize: '8px',
                labels: ["PPM"],
                rendererOptions: {
                    numberRows: 1
                },
            },
            series: [{
                    lineWidth: 4,
                    markerOptions: {
                        style: 'square'
                    },
                    pointLabels: { show: true, formatString: "%#.2f" }
                }

            ],
            cursor: {
                show: true,
                zoom: true,
            },
            grid: {
                backgroundColor: '#FFFFFF'
            }
        });
        console.log("Chart plotted.");
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {
            alert("No data retrived for selected options.");
        }
    }
}




function plotPpmLine(ppmChartDataSet, output_div) {

    try {
        ticks = ppmChartDataSet.ticks;
        ppm_list = ppmChartDataSet.ppm_list;
        console.log(ticks);
        console.log(ppm_list);
        var grid = {
            gridLineWidth: 1.5,
            gridLineColor: 'rgb(235,235,235)',
            drawGridlines: true
        };
        var plot1 = $.jqplot(output_div, [ppm_list], {
            title: 'PPM Chart',
            axesDefaults: {
                tickOptions: {
                    showGridline: true
                },
                labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            },
            highlighter: {
                show: true,
                tooltipAxes: 'y',
            },
            series: [{
                renderer: $.jqplot.LineRenderer,
                label: 'ppm',
                color: 'blue',
                showMarker: true,
                markerOptions: {
                    style: 'filledSquare'
                },
                highlighter: {
                    show: true,
                },
                pointLabels: {
                    show: true,
                    location: 's',
                    formatString: "%#.4f"
                },
            }],
            legend: {
                show: true,
                location: 'ne',
                placement: 'inside',
                fontSize: '8px',
                dataLabels: 'label',
                formatString: "%#.4f",
                rendererOptions: {
                    numberRows: 1
                },
            },
            seriesDefaults: {
                rendererOptions: {
                    smooth: true,
                    animation: {
                        show: true,
                    }
                },
                showMarker: false,
                breakOnNull: true,
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        fontSize: '10pt',
                        angle: -90,
                        labelPosition: 'middle',
                        showGridline: true,
                    },
                    ticks: ticks
                },
                yaxis: {
                    tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                    tickOptions: {
                        showGridline: true,
                        formatString: "%#.4f"
                    }
                },
            },
            grid: grid,
            cursor: {
                show: true,
                zoom: true,
            }
        });
        console.log("ppm Plotted.");
    } catch (error) {
        console.log(error.message);
        if (error.message == "No data specified") {

        }
    }
    $(window).resize(function() {
        plot1.replot({ resetAxes: true });
    });
}


function get_X_margin(x_values) {
    max = Math.max(x_values)
    min = Math.min(x_values)
    x_range = (max - min) / 5
    return x_range
}

function get_Y_margin(x_values) {
    max = Math.max(y_values)
    min = Math.min(y_values)
    y_range = (max - min) / 5
    return y_range
}

function calculate_avg_y_histogram(dataList) {
    var total = 0;
    length = 0;
    $.each(dataList, function(index, value) {
        total += value[1];
        length = index;
    });
    console.log("calculate_avg_x_histogram: " + total / length);
    return total / length;
}

function get_min_y_histogram(dataList) {
    min = '';
    $.each(dataList, function(index, value) {
        if (min == '') {
            min = value[1];
        } else if (min > value[1]) {
            min = value[1];
        }
        console.log("get_min_x_histogram: " + min);
        return min;
    });
}

function calculate_avg_x_histogram(dataList) {
    var total = 0;
    length = 0;
    $.each(dataList, function(index, value) {
        total += value[0];
        length = index;
    });
    console.log("calculate_avg_x_histogram: " + total / length);
    return total / length;
}

function get_min_x_histogram(dataList) {
    min = '';
    $.each(dataList, function(index, value) {
        if (min == '') {
            min = value[0];
        } else if (min > value[0]) {
            min = value[0];
        }
        console.log("get_min_x_histogram: " + min);
        return min;
    });
}

function plotPpm(chart_data, div_id, hide_list) {

    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            keys: {
                x: "name",
                value: ['month_ppm', 'year_ppm', 'ppm']
            },
            types: {
                ppm: 'line',
                month_ppm: 'line',
                year_ppm: 'bar'
            },
            names: {
                ppm: 'PPM',
                month_ppm: 'MONTH PPM',
                year_ppm: 'YEAR PPM'
            }
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: {
                    text: 'PPM',
                    position: 'outer-center'
                }
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        legend: {
            hide: hide_list
        },

    });
    return chart;
}


function plotPpm_batch(chart_data, ppm_line, div_id, hide_list) {

    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            keys: {
                x: "name",
                value: ['month_ppm', 'year_ppm', 'ppm']
            },
            types: {
                ppm: 'line',
                month_ppm: 'line',
                year_ppm: 'bar'
            },
            names: {
                ppm: 'PPM',
                month_ppm: 'MONTH PPM',
                year_ppm: 'YEAR PPM'
            }
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: {
                    text: 'PPM',
                    position: 'outer-center'
                }
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        legend: {
            hide: hide_list
        },
        grid: {
            y: {
                lines: [
                    { value: ppm_line, text: 'PPM for Selected Batches' + "  :" + ppm_line },

                ]
            }
        }

        /*grid: {
            y: {
                lines: [
                    {value: chart_data.ppm_line, text: "PPM"+chart_data.ppm_line, class: 'grid801'},
                ]
            }
        }*/
    });
    return chart;
}

function plotCpCpk(chart_data, div_id, type) {

    console.log("plotting cp/cpk");

    console.log(chart_data);

    var max = 1.5;
    var min = 0;

    chart_data.forEach(function(data) {
        console.log(data);
        if (data.cp != null && data.cpk != null) {
            if (data.cp < data.cpk) {
                if (max < data.cpk) {
                    max = data.cpk;
                }
                if (min > data.cp) {
                    min = data.cp;
                }
            } else {
                if (max < data.cp) {
                    max = data.cp;
                }
                if (min > data.cpk) {
                    min = data.cpk;
                }
            }
        }
    });
    console.log("Minimum");
    console.log(min);
    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            keys: {
                x: "name",
                value: ['cp', 'cpk']
            },
            type: type
        },
        bar: {
            width: {
                ratio: 0.1
            }
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: max,
                min: 0
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        grid: {
            y: {
                lines: [
                    { value: 1.33, text: "Cpk range-" + 1.33, class: 'grid801' },
                ]
            }
        }
    });
    return chart;
}

function plotPpk(chart_data, div_id) {

    console.log("plotting Ppk");

    console.log(chart_data);
    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            type: "bar",
            json: chart_data,
            keys: {
                x: 'mid_point',
                value: ['frequency']
            },
            labels: true,
        },

        bar: {
            width: { ratio: 1 }
        },
        axis: {
            x: {
                label: {
                    text: 'Mid Point Value',
                    position: 'outer-center'
                },
                type: 'category'
            },
            y: {
                label: {
                    text: 'Frequency',
                    position: 'outer-center'
                }
            }
        },
        legend: {
            show: false
        },
        grid: {
            x: {
                lines: [
                    { value: 0, text: 'LSL' },
                    { value: chart_data.length - 1, text: 'USL' }
                ]
            }
        }

    });
}




function prepend(value, array) {
    var newArray = array.slice(0);
    newArray.unshift(value);
    return newArray;
}


function plotPChart(chart_data, div_id) {


    x_data = chart_data.date;
    x_data = prepend('x', x_data);
    console.log(x_data);

    p_data = chart_data.ucl_list;
    p_data = prepend('p', p_data);
    console.log(p_data);

    ucl_data = chart_data.ucl_list;
    ucl_data = prepend('ucl', ucl_data);
    console.log(ucl_data);

    lsl_data = chart_data.lcl_list;
    lsl_data = prepend('lcl', lsl_data);
    console.log(lsl_data);


    var chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            x: 'x',
            xFormat: '%Y-%m-%d',
            columns: [
                x_data,
                ucl_data,
                lsl_data,
                p_data
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        },
        zoom: {
            enabled: true
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        }
    });

    return chart;
}

function plotPpmDaily(chart_data, div_id) {

    console.log(chart_data);

    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            x: 'date',
            xFormat: '%Y-%m-%d',
            json: chart_data,
            keys: {
                x: "date",
                value: ["ppm"]
            },
            names: {
                ppm: 'PPM'
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        },
        zoom: {
            enabled: true
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        names: {
            ppm: 'PPM'
        }
    });

    return chart;
}

function plotDefects(chart_data, div_id) {

    if (chart_data.length != 0) {

        var chart = c3.generate({
            bindto: '#' + div_id,
            data: {
                columns: chart_data,
                type: 'pie'
            },
            pie: {
                label: {
                    format: function(value, ratio, id) {
                        return value;
                    }
                }
            },
            tooltip: {
                format: {
                    name: function(name, ratio, id, index) {
                        return name
                    }
                }
            },
            padding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            }
        });

        return chart;

    } else {
        var div = document.getElementById(div_id);
        div.style.textAlign = "center";
        div.innerHTML = "No Defects Found";
    }


}


function plotDefectsMontly(chart_data, keys, div_id) {

    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            keys: {
                x: "name",
                value: keys
            },
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        }
    });

    return chart;
}

function plotCR(chart_data, div_id) {

    outer_div = document.getElementById(div_id);
    control_div = document.createElement("div");
    control_div.setAttribute("id", div_id + "control");
    control_div.style.background = "white";
    range_div = document.createElement("div");
    range_div.setAttribute("id", div_id + "range");
    range_div.style.background = "white";
    outer_div.append(control_div);
    outer_div.append(range_div);
    var category = [];
    for (count = 0; count < chart_data.data.length; count++) {
        str = (count + 1).toString();
        category.push(str);
    }

    control_chart = c3.generate({
        bindto: '#' + div_id + "control",
        data: {
            json: chart_data.data,
            keys: {
                value: ['avg_x_bar']
            }
        },
        axis: {
            x: {
                /*                min : -1,
                 */
                type: 'category',
                categories: category
            },
            y: {

                min: chart_data.minC - 0.002,
                max: chart_data.maxC,
                padding: { bottom: 0 },
                tick: {
                    format: d3.format('.4f')
                }

            }
        },
        zoom: {
            enabled: true
        },
        /*padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },*/
        grid: {
            y: {
                lines: [
                    { value: chart_data.uslx, text: "uclx-" + roundOf(chart_data.uslx, 4), class: 'grid801' },
                    { value: chart_data.lslx, text: "lclx-" + roundOf(chart_data.lslx, 4), class: 'grid800' }
                ]
            }
        }
    });

    range_chart = c3.generate({
        bindto: '#' + div_id + "range",
        data: {
            json: chart_data.data,
            keys: {
                value: ['r_bar']
            }
        },
        axis: {
            x: {
                /*min :1,*/
                type: 'category',
                categories: category
            },
            y: {
                min: chart_data.minR,
                max: chart_data.maxR,
                padding: { bottom: 0 },

            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        zoom: {
            enabled: true
        },
        grid: {
            y: {
                lines: [
                    { value: chart_data.uclr, text: "uclr-" + roundOf(chart_data.uclr, 4), class: 'grid801' },
                    { value: chart_data.lclr, text: "lclr-" + roundOf(chart_data.lclr, 4), class: 'grid800' }
                ]
            }
        }
    });

    return [control_chart, range_chart]
}



function plot_histogram(div_id, chart_data, min, max) {

    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            type: 'bar',
            keys: {
                x: "measured_value",
                value: ['count']
            },
            labels: true,
            color: function(color, d) {
                if (typeof d.index != 'undefined') {
                    var value = chart_data[d.index].measured_value;
                    if (min <= value && value <= max) {
                        return 'blue';
                    } else {
                        return 'red';
                    }
                }
            }
        },
        axis: {
            x: {
                label: {
                    text: 'Measured Value',
                    position: 'outer-center'
                },
                type: 'category'
            },
            y: {
                label: {
                    text: 'Frequency',
                    position: 'outer-center'
                }
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        interaction: {
            enabled: false
        },
        bar: {
            width: { ratio: 1 }
        },
        legend: {
            show: false
        }
    });
    return chart;
}


var load_chart = function(data, div_id, chart_type, type, chart) {
    chart = chart || 'line';
    console.log("all ", data)
    console.log("teeedtr", data['DS4031-3759640M05-170-2472-Dia-15.862/15.875']);

    var row = document.createElement("div");
    row.setAttribute("class", "row");

    var outer_div = document.getElementById(div_id);

    var is_hidden = outer_div.offsetParent;
    outer_div.innerHTML = '';
    outer_div.append(row);
    for (var key in data) {
        /*        let words = "is2 Thi1s T4est 3a".split(' ');
        words.sort((a, b) => a.replace(/[^\d]+/g, '') - b.replace(/[^\d]+/g, ''));
        console.log(words.join(' '));*/
        var col_sm = document.createElement("div");
        // col_sm.setAttribute("class", "col-sm-12");
        row.append(col_sm);

        var panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default chart");
        panel.setAttribute("id", key + type);
        col_sm.append(panel);

        var panel_heading = document.createElement("div");
        panel_heading.setAttribute("class", "panel-heading");
        panel.append(panel_heading);

        var panel_title = document.createElement("div");
        panel_title.setAttribute("class", "panel-title");
        panel_title.innerHTML = key;
        panel_heading.append(panel_title);

        var panel_body = document.createElement("div");
        panel_body.setAttribute("class", "panel-body");
        panel.append(panel_body);
        if (chart_type == '8') {
            var _defect = document.createElement("div");
            _defect.setAttribute("class", "defect-chart");
            _defect.setAttribute("id", key + "-" + "defect-chart");
            panel_body.append(_defect)

            chart = plotDefects(data[key], key + "-" + "defect-chart");
            /*_defect.setAttribute("id", defect-chartkey.substring(0, key.lastIndexOf("-"))+"defect-chart");*/

            /*plotDefects(data[key], key.substring(0, key.lastIndexOf("-"))+"defect-chart")*/

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                custom: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '9') {
            var _mach_defect = document.createElement("div");
            _mach_defect.setAttribute("class", "machine_wise");
            _mach_defect.setAttribute("id", key + "-" + "machine_wise");
            panel_body.append(_mach_defect);

            plotDefects(data[key], key + "-" + "machine_wise")

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                custom: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '10') {
            var _ope_defect = document.createElement("div");
            _ope_defect.setAttribute("class", "operator_wise");
            _ope_defect.setAttribute("id", key + "-" + "operator_wise");
            panel_body.append(_ope_defect);

            plotDefects(data[key], key + "-" + "operator_wise");

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                custom: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '11') {
            var _shif_defect = document.createElement("div");
            _shif_defect.setAttribute("class", "shift_wise");
            _shif_defect.setAttribute("id", key + "-" + "shift_wise");
            panel_body.append(_shif_defect);

            plotDefects(data[key], key + "-" + "shift_wise")

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                custom: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '1') {

            var control = document.createElement("div");
            control.setAttribute("class", "cr");
            control.setAttribute("id", key.substring(0, key.lastIndexOf("-")) + "cr");
            panel_body.append(control);

            plotCR(data[key].data, key.substring(0, key.lastIndexOf("-")) + "cr");

            var panel_footer = document.createElement("div");
            panel_footer.setAttribute("class", "container");
            panel_footer.innerHTML = data[key].table;
            panel_footer.style.display = "none";
            panel_body.append(panel_footer);

            $("#" + key.substring(0, key.lastIndexOf("-")) + "-cr").DataTable({
                dom: 'Blfrtip',
                buttons: [{
                        extend: 'pdfHtml5',
                        title: "cpcpk Data",
                        text: "Download as PDF",
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    },
                    {
                        extend: 'csv',
                        text: "Download CSV"
                    }
                ],
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
                "searching": false
            });

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });

        } else if (chart_type == '3') {

            var cpcpk = document.createElement("div");
            cpcpk.setAttribute("class", "row cpcpk");
            cpcpk.style.textAlign = "center";
            panel_body.append(cpcpk);

            if (type == "batch") {

                cpcpk.setAttribute("id", key.substring(0, key.lastIndexOf("-")) + "cpcpk-batch");
                plotCpCpk(data[key].data, key.substring(0, key.lastIndexOf("-")) + "cpcpk-batch", chart);
            }
            if (type == "batchwise") {
                cpcpk.setAttribute("id", key.substring(0, key.lastIndexOf("-")) + "cpcpk-batch");
                plotCpCpk(data[key].data, key.substring(0, key.lastIndexOf("-")) + "cpcpk-batch", chart);
            } else {
                cpcpk.setAttribute("id", key.substring(0, key.lastIndexOf("-")) + "cpcpk-month");
                plotCpCpk(data[key].data, key.substring(0, key.lastIndexOf("-")) + "cpcpk-month", chart);
            }

            var panel_footer = document.createElement("div");
            panel_footer.setAttribute("class", "container");
            panel_footer.innerHTML = data[key].table;
            panel_footer.style.display = "none";
            panel_body.append(panel_footer);

            $("#" + key.substring(0, key.lastIndexOf("-")) + "-cpk-table" + '-' + type).DataTable({
                dom: 'Blfrtip',
                buttons: [{
                        extend: 'pdfHtml5',
                        title: "cpcpk Data",
                        text: "Download as PDF",
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    },
                    {
                        extend: 'csv',
                        text: "Download CSV"
                    }
                ],
                "bPaginate": true,
                "bLengthChange": false,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
                "searching": false
            });

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '5') {

            var _histogram = document.createElement("div");
            _histogram.setAttribute("class", "histogram");
            _histogram.setAttribute("id", key.substring(0, key.lastIndexOf("-")) + "histogram");
            panel_body.append(_histogram);

            plot_histogram(key.substring(0, key.lastIndexOf("-")) + "histogram", data[key].chart.data, data[key].chart.min, data[key].chart.max);


            var panel_footer = document.createElement("div");
            panel_footer.setAttribute("class", "container");
            panel_footer.innerHTML = data[key].table;
            panel_footer.style.display = "none";
            panel_body.append(panel_footer);

            $("#" + key.substring(0, key.lastIndexOf("-")) + "-hist").DataTable({
                dom: 'Blfrtip',
                buttons: [{
                        extend: 'pdfHtml5',
                        title: "Histogram Data",
                        text: "Download as PDF",
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    },
                    {
                        extend: 'csv',
                        text: "Download CSV"
                    }
                ],
                "bPaginate": true,
                "bLengthChange": false,
                "bFilter": true,
                "bInfo": false,
                "bAutoWidth": true,
                "searching": false
            });

            $('.chart').lobiPanel({
                reload: false,
                close: false,
                editTitle: false,
                minWidth: 300,
                minHeight: 300,
                maxWidth: 600,
                maxHeight: 480
            });
        } else if (chart_type == '2') {
            var ppm = document.createElement("div");
            ppm.setAttribute("class", "ppm");
            panel_body.append(ppm);

            if (data[key]) {

                if (type == 'batch') {

                    ppm.setAttribute("id", key + "ppm" + "batch");
                    plotPpm_batch(data[key].data, data[key].ppm_line, key + "ppm" + 'batch', ['month_ppm', 'year_ppm']);
                } else if (type == 'batchwise') {
                    ppm.setAttribute("id", key + "ppm" + "batch");
                    plotPpm(data[key].data, key + "ppm" + 'batch', ['month_ppm', 'year_ppm']);
                } else if (type == 'month') {
                    ppm.setAttribute("id", key + "ppm" + "month");
                    plotPpm(data[key].data, key + "ppm" + 'month', ['month_ppm', 'year_ppm']);
                }

                var panel_footer = document.createElement("div");
                panel_footer.setAttribute("class", "container");
                panel_footer.innerHTML = data[key].table;
                panel_footer.style.display = "none";
                panel_body.append(panel_footer);

                $("#" + key + "-ppm-table" + '-' + type).DataTable({
                    dom: 'Blfrtip',
                    buttons: [{
                            extend: 'pdfHtml5',
                            title: "cpcpk Data",
                            text: "Download as PDF",
                            orientation: 'landscape',
                            pageSize: 'LEGAL'
                        },
                        {
                            extend: 'csv',
                            text: "Download CSV"
                        }
                    ],
                    "bPaginate": true,
                    "bLengthChange": false,
                    "bFilter": true,
                    "bInfo": false,
                    "bAutoWidth": true,
                    "searching": false
                });

                $('.chart').lobiPanel({
                    reload: false,
                    close: false,
                    editTitle: false,
                    minWidth: 300,
                    minHeight: 300,
                    maxWidth: 600,
                    maxHeight: 480
                });
            } else {
                ppm.innerHTML = "No data";
            }
        }
    }

    jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');


};

function draw_sqa_bar_chart(data, output_div, type = null) {
    //'#00ff00'//green color
    //'#ff0005' // red color
    console.log(data);
    if (!type) {
        var color_list = ['#00a651', '#ed1c24'];
        var groups_list = ["capable_count", "non_capable_count"];
        var keys_list = ['capable_count', 'non_capable_count'];
    } else {
        // var color_list = ['#00ff00', '#ff0005'];
        var groups_list = ["count"];
        var keys_list = ['count'];
    }
    var chart = c3.generate({
        bindto: output_div,
        data: {
            type: 'bar',
            /* colors: {
           data
        },*/
            labels: true,
            json: data,
            groups: [
                groups_list,
            ],
            keys: {
                x: "name",
                value: keys_list
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        color: {
            pattern: color_list
        },
        axis: {
            x: {
                type: 'category',
                tick: {
                    rotate: 0,
                    multiline: true
                }, // this needed to load string x value
                height: 50
            },
        }
    });
    chart.legend.hide('count');
    chart.legend.hide('capable_count');
    chart.legend.hide('non_capable_count');
}

function plotPpmOverall(data, div_id) {
    var chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            type: 'bar',
            labels: true,
            json: [data],
            keys: {
                x: "name",
                value: ['ppm']
            }
        },
        bar: {
            width: {
                ratio: 0.1
            }
        },
        axis: {
            x: {
                type: 'category' // this needed to load string x value
            }
        }
    });
}

function plotPpmSupplier(data, div_id){
    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            x: 'title',
            json: data,
            keys: {
                x: 'title',
                value: [ "ppm"]
            },
            type:'bar'
        },
        axis: {
            x: {
                type: "category"
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
    });
}

function plotCpCpk(chart_data, div_id, type) {

    console.log("plotting cp/cpk");

    console.log(chart_data);
    var max = 1.5;
    var min = 0;

    chart_data.forEach(function(data) {
        console.log(data);
        if (data.cp != null && data.cpk != null) {
            if (data.cp < data.cpk) {
                if (max < data.cpk) {
                    max = data.cpk;
                }
                if (min > data.cp) {
                    min = data.cp;
                }
            } else {
                if (max < data.cp) {
                    max = data.cp;
                }
                if (min > data.cpk) {
                    min = data.cpk;
                }
            }
        }
    });
    console.log("Minimum");
    console.log(min);
    chart = c3.generate({
        bindto: '#' + div_id,
        data: {
            json: chart_data,
            keys: {
                x: "name",
                value: ['cp', 'cpk']
            },
            type: type
        },
        bar: {
            width: {
                ratio: 0.1
            }
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: max,
                min: 0
            }
        },
        padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        },
        grid: {
            y: {
                lines: [
                    { value: 1.33, text: "Cpk range-" + 1.33, class: 'grid801' },
                ]
            }
        }
    });
    return chart;
}