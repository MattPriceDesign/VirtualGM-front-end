// Chart.js charts
// 1. myGradeChartPreview [grade card]
var gradeCanvasPreview = document.getElementById("myGradeChartPreview");
var gradientGrade = gradeCanvasPreview.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientGrade.addColorStop(0, '#5FB2E4');
gradientGrade.addColorStop(1, '#2C4178');
var ctx = document.getElementById('myGradeChartPreview').getContext("2d");
var myGradeChartPreview = new Chart(ctx, {
    type: 'doughnut',
    responsive: true,
    responsiveAnimationDuration: 2000,
    data: {
        labels: [
            'Money earned', 'Money not earned'
        ],
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    90, 10
                ],
                backgroundColor: [gradientGrade, '#F5F5F5']
            }
        ],
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart'
                }
            }
        }
    }
})
myGradeChartPreview.options.def
myGradeChartPreview.options.plugins.legend.display = false;
myGradeChartPreview.options.cutout = "88%";
myGradeChartPreview.update();



// 2. myGradeChartExpanded [grade card]
// var gradeCanvasExpanded = document.getElementById("myGradeChartExpanded");
// var gradientGrade = gradeCanvasExpanded.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientGrade.addColorStop(0, '#5FB2E4');
// gradientGrade.addColorStop(1, '#2C4178');
// var ctx = document.getElementById('myGradeChartExpanded').getContext("2d");
// var myGradeChartExpanded = new Chart(ctx, {
//     type: 'doughnut',
//     responsive: true,
//     responsiveAnimationDuration: 2000,
//     data: {
//         labels: [
//             'Money earned', 'Money not earned'
//         ],
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: [
//                     90, 10
//                 ],
//                 backgroundColor: [gradientGrade, '#F5F5F5']
//             }
//         ],
//         options: {
//             responsive: true,
//             plugins: {
//                 // legend: {
//                 //     display: 'false',
//                 //     position: 'top'
//                 // },
//                 title: {
//                     display: true,
//                     text: 'Chart.js Doughnut Chart'
//                 }
//             }
//         }
//     }
// })
// myGradeChartExpanded.options.def
// myGradeChartExpanded.options.plugins.legend.display = false;
// myGradeChartExpanded.options.cutoutPercentage = 88;
// myGradeChartExpanded.update();



// Area charts
Chart.defaults.font.size = 14;
Chart.defaults.color = "#757575";


let gradientBgBlue = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgBlue.addColorStop(0, '#7BC0E9');
gradientBgBlue.addColorStop(1, '#CFE8F7');

let gradientBgGreen = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgGreen.addColorStop(0, '#7BC9AF');
gradientBgGreen.addColorStop(1, '#CAE9DF');

let gradientBgYellow = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgYellow.addColorStop(0, '#FED571');
gradientBgYellow.addColorStop(1, '#FEEDC5');

let gradientBgRed = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgRed.addColorStop(0, '#EF7A97');
gradientBgRed.addColorStop(1, '#FCEDF1');

let gradientBgPurple = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgPurple.addColorStop(0, '#DFB2DF');
gradientBgPurple.addColorStop(1, '#E4BFE4');

let chartLineBlue = "#5FB2E4";
let chartLineRed = "#F47A99";
let chartLineYellow = "#FDD168";
let chartLineGreen = "#4FB794";
let chartLinePurple = "#B54FB7";


/* Functions for highlighting in individualand data group */
function resetChartFocus() {
    gradientBgBlue.addColorStop(0, '#7BC0E9');
    gradientBgBlue.addColorStop(1, '#CFE8F7');

    gradientBgGreen.addColorStop(0, '#7BC9AF');
    gradientBgGreen.addColorStop(1, '#CAE9DF');

    gradientBgYellow.addColorStop(0, '#FED571');
    gradientBgYellow.addColorStop(1, '#FEEDC5');
    
    gradientBgRed.addColorStop(0, '#EF7A97');
    gradientBgRed.addColorStop(1, '#FCEDF1');

    gradientBgPurple.addColorStop(0, '#DFB2DF');
    gradientBgPurple.addColorStop(1, '#E4BFE4');
                                                            
    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#5FB2E4";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#5FB2E4";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#F47A99";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#F47A99";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#FDD168";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#FDD168";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#4FB794";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#4FB794";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#B54FB7";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#B54FB7";

    myFiveWeekSalesTrendChartE.update();

}

function focusYellow() {
    gradientBgBlue.addColorStop(0, '#CEDDE6');
    gradientBgBlue.addColorStop(1, '#CEDDE6');

    gradientBgGreen.addColorStop(0, '#C8DAD4');
    gradientBgGreen.addColorStop(1, '#C8DAD4');

    gradientBgYellow.addColorStop(0, '#FED571');
    gradientBgYellow.addColorStop(1, '#FEEDC5');
    
    gradientBgRed.addColorStop(0, '#EADEE1');
    gradientBgRed.addColorStop(1, '#EADEE1');

    gradientBgPurple.addColorStop(0, '#D3C3D3');
    gradientBgPurple.addColorStop(1, '#D3C3D3');

    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#DBDDDC";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#DBDDDC";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#FDD168";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#FDD168";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#DBDDDC";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#DBDDDC";

    myFiveWeekSalesTrendChartE.update();
}

function focusBlue() {
    gradientBgBlue.addColorStop(0, '#7BC0E9');
    gradientBgBlue.addColorStop(1, '#CFE8F7');

    gradientBgGreen.addColorStop(0, '#C8DAD4');
    gradientBgGreen.addColorStop(1, '#C8DAD4');

    gradientBgYellow.addColorStop(0, '#DBDDDC');
    gradientBgYellow.addColorStop(1, '#DBDDDC');
    
    gradientBgRed.addColorStop(0, '#EADEE1');
    gradientBgRed.addColorStop(1, '#EADEE1');

    gradientBgPurple.addColorStop(0, '#D3C3D3');
    gradientBgPurple.addColorStop(1, '#D3C3D3');

    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#5FB2E4";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#5FB2E4";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#DBDDDC";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#F0E5CA";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#F0E5CA";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#DBDDDC";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#DBDDDC";

    myFiveWeekSalesTrendChartE.update();
}

function focusPurple() {
    gradientBgBlue.addColorStop(0, '#CEDDE6');
    gradientBgBlue.addColorStop(1, '#CEDDE6');

    gradientBgGreen.addColorStop(0, '#C8DAD4');
    gradientBgGreen.addColorStop(1, '#C8DAD4');

    gradientBgYellow.addColorStop(0, '#DBDDDC');
    gradientBgYellow.addColorStop(1, '#DBDDDC');
    
    gradientBgRed.addColorStop(0, '#EADEE1');
    gradientBgRed.addColorStop(1, '#EADEE1');

    gradientBgPurple.addColorStop(0, '#B54FB7');
    gradientBgPurple.addColorStop(1, '#B54FB7');

    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#DBDDDC";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#DBDDDC";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#F0E5CA";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#F0E5CA";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#DBDDDC";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#B54FB7";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#B54FB7";

    myFiveWeekSalesTrendChartE.update();
}

function focusRed() {
    gradientBgBlue.addColorStop(0, '#CEDDE6');
    gradientBgBlue.addColorStop(1, '#CEDDE6');

    gradientBgGreen.addColorStop(0, '#C8DAD4');
    gradientBgGreen.addColorStop(1, '#C8DAD4');

    gradientBgYellow.addColorStop(0, '#DBDDDC');
    gradientBgYellow.addColorStop(1, '#DBDDDC');

    gradientBgRed.addColorStop(0, '#EF7A97');
    gradientBgRed.addColorStop(1, '#FCEDF1');

    gradientBgPurple.addColorStop(0, '#D3C3D3');
    gradientBgPurple.addColorStop(1, '#D3C3D3');

    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#DBDDDC";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#F47A99";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#F47A99";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#F0E5CA";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#F0E5CA";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#DBDDDC";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#DBDDDC";

    myFiveWeekSalesTrendChartE.update();
}

function focusGreen() {
    gradientBgBlue.addColorStop(0, '#CEDDE6');
    gradientBgBlue.addColorStop(1, '#CEDDE6');

    gradientBgGreen.addColorStop(0, '#7BC9AF');
    gradientBgGreen.addColorStop(1, '#CAE9DF');

    gradientBgYellow.addColorStop(0, '#DBDDDC');
    gradientBgYellow.addColorStop(1, '#DBDDDC');
    
    gradientBgRed.addColorStop(0, '#EADEE1');
    gradientBgRed.addColorStop(1, '#EADEE1');

    gradientBgPurple.addColorStop(0, '#D3C3D3');
    gradientBgPurple.addColorStop(1, '#D3C3D3');

    /* blue line */
    myFiveWeekSalesTrendChartE.data.datasets[4].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[4].pointBorderColor = "#DBDDDC";

    /* red line */
    myFiveWeekSalesTrendChartE.data.datasets[3].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[3].pointBorderColor = "#DBDDDC";

    /* yellow line */
    myFiveWeekSalesTrendChartE.data.datasets[2].borderColor = "#F0E5CA";
    myFiveWeekSalesTrendChartE.data.datasets[2].pointBorderColor = "#F0E5CA";

    /* green line */
    myFiveWeekSalesTrendChartE.data.datasets[1].borderColor = "#4FB794";
    myFiveWeekSalesTrendChartE.data.datasets[1].pointBorderColor = "#4FB794";

    /* purple line */
    myFiveWeekSalesTrendChartE.data.datasets[0].borderColor = "#DBDDDC";
    myFiveWeekSalesTrendChartE.data.datasets[0].pointBorderColor = "#DBDDDC";

    myFiveWeekSalesTrendChartE.update();
}
const gradeCanvasExpandedData = {
    labels: [
        'Money earned', 'Money not earned'
    ],
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                90, 10
            ],
            backgroundColor: [gradientGrade, '#F5F5F5']
        }
    ],
};
const gradeCanvasExpandedOptions = {
    cutout: "88%",
    // responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
    }
};
const gradeCanvasExpandedConfig = {
    type: 'doughnut',
    data: gradeCanvasExpandedData,
    options: gradeCanvasExpandedOptions,
};

//Initiate render - expanded grade chaty
const gradeCanvasExpanded = new Chart(
    document.getElementById('myGradeChartExpanded'),
    gradeCanvasExpandedConfig,
);




const myFiveWeekSalesTrendData = {
    labels: [
        'Feb 2',
        'Feb 22',
        'Feb 29',
        'Mar 6',
        'Mar 13'
    ],
    datasets: [
        {
            label: 'Other Sales',
            backgroundColor: gradientBgPurple,
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            borderColor: chartLinePurple,
            /* borderColor: '#D59CD7', */
            pointBorderColor: chartLinePurple,
            data: [
                3,
                4,
                2,
                2,
                2,
            ],
            // fill: true
        },
        {
            label: 'OCS Billing Sales',
            backgroundColor: gradientBgGreen,
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            /* borderColor: '#4FB794', */
            borderColor: chartLineGreen,
            pointBorderColor: chartLineGreen,
            data: [
                5,
                4,
                5,
                7,
                7,
            ]
        },
        {
            label: 'Cafeteria Sales',
            backgroundColor: gradientBgYellow,
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            borderColor: chartLineYellow,
            /* borderColor: '#FDD168', */
            pointBorderColor: chartLineYellow,
            data: [
                18,
                26,
                27,
                10,
                11,
            ]
        },
        {
            label: 'Vending Sales',
            backgroundColor: gradientBgRed,
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            borderColor: chartLineRed,
            /* borderColor: '#F47A99', */
            pointBorderColor: chartLineRed,
            data: [
                50,
                55,
                73,
                68,
                48,
            ]
        }, {
            label: 'Micro Market Sales',
            backgroundColor: gradientBgBlue,
            hoverBackgroundColor: [
                '#76BDE8',
            ],
            borderColor: chartLineBlue,
            /* borderColor: '#5FB2E4', */
            pointBorderColor: chartLineBlue,
            borderWidth: 2,
            pointRadius: 3,
            data: [
                110,
                138,
                87,
                156,
                95
            ]
        },
    ]
};
const myFiveWeekSalesTrendOptionsE = {
    layout: {
        padding: {
            left: 0
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'bottom'
        },
        responsive: true,
        title: {
            display: false
        }
    },
    tooltips: {
        mode: 'nearest'

    },
    scales: {
        y: {
            title: {
                align: 'center'
            },
            stacked: true,
            grid: {
                // color: 'Green',
                // drawBorder:false,
                tickLength: 10
            },
            ticks: { // Include a dollar sign in the ticks
                callback: function (value, index, values) { // return '$' + value + 'k          ';
                    return '$' + value + 'k        ';
                }
            }
        },
        x: {
            // title: {
            //     align: 'start',
            // },
            grid: { // color: 'Blue',
                tickLength: 6
            }
        }
    },
    elements: {
        line: {
            fill: true,
            tension: .35
        }
    }
};
const myFiveWeekSalesTrendOptionsP = {
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'bottom'
        },
        responsive: true,
        title: {
            display: false
        }
    },
    tooltips: {
        mode: 'nearest'

    },
    scales: {
        y: {
            title: {
                align: 'center'
            },
            stacked: true,
            grid: {
                color: 'transparent',
            },
            ticks: { 
                display: false
            }
        },
        x: {
            // title: {
            //     align: 'start',
            // },
            grid: { 
                color: 'transparent',
                tickLength: 6
            },
            ticks: { 
                display: false
            }
        }
    },
    elements: {
        line: {
            fill: true,
            tension: .35
        }
    }
};
const myFiveWeekSalesTrendConfigE = {
    type: 'line',
    data: myFiveWeekSalesTrendData,
    options: myFiveWeekSalesTrendOptionsE,
};
const myFiveWeekSalesTrendConfigP = {
    type: 'line',
    data: myFiveWeekSalesTrendData,
    options: myFiveWeekSalesTrendOptionsP,
};

//Initiate render - preview
const myFiveWeekSalesTrendChartE = new Chart(
    document.getElementById('myFiveWeekSalesTrendChartE'),
    myFiveWeekSalesTrendConfigE,
);
//Initiate render - expanded
const myFiveWeekSalesTrendChartP = new Chart(
    document.getElementById('myFiveWeekSalesTrendChartP'),
    myFiveWeekSalesTrendConfigP,
);


//Focus graph data on the five weeks sales trend modal
let iliMicroMarket = document.getElementById("sbr2-micro-market");
let iliVending = document.getElementById("sbr2-vending");
let iliCafeteria = document.getElementById("sbr2-cafeteria");
let iliOcs = document.getElementById("sbr2-ocs");
let iliOtherSales = document.getElementById("sbr2-other-sales");

//select MicroMarkets
$(document).ready(function () {
    $(iliMicroMarket).on("click", function () {
        if (!$(iliMicroMarket).hasClass("Active")) {
            //select new focus
            $(this).addClass("Active");
            focusBlue();
            //remove active from other options
            $(iliVending).removeClass("Active");
            $(iliCafeteria).removeClass("Active");
            $(iliOcs).removeClass("Active");
            $(iliOtherSales).removeClass("Active");                             
        } else if ($(iliMicroMarket).hasClass("Active")) {
            $(this).removeClass("Active");
            resetChartFocus();
        }
    });
}); 

//select Vending
$(document).ready(function () {
    $(iliVending).on("click", function () {
        if (!$(iliVending).hasClass("Active")) {
            //select new focus
            $(this).addClass("Active");
            focusRed();
            //remove active from other options
            $(iliMicroMarket).removeClass("Active");
            $(iliCafeteria).removeClass("Active");
            $(iliOcs).removeClass("Active");
            $(iliOtherSales).removeClass("Active");                             
        } else if ($(iliVending).hasClass("Active")) {
            $(this).removeClass("Active");
            resetChartFocus();
        }
    });
}); 

//select Cafetria
$(document).ready(function () {
    $(iliCafeteria).on("click", function () {
        if (!$(iliCafeteria).hasClass("Active")) {
            //select new focus
            $(this).addClass("Active");
            focusYellow();
            //remove active from other options
            $(iliVending).removeClass("Active");
            $(iliMicroMarket).removeClass("Active");
            $(iliOcs).removeClass("Active");
            $(iliOtherSales).removeClass("Active");                             
        } else if ($(iliCafeteria).hasClass("Active")) {
            $(this).removeClass("Active");
            resetChartFocus();
        }
    });
}); 

//select OCS billing
$(document).ready(function () {
    $(iliOcs).on("click", function () {
        if (!$(iliOcs).hasClass("Active")) {
            //select new focus
            $(this).addClass("Active");
            focusGreen();
            //remove active from other options
            $(iliVending).removeClass("Active");
            $(iliCafeteria).removeClass("Active");
            $(iliMicroMarket).removeClass("Active");
            $(iliOtherSales).removeClass("Active");                             
        } else if ($(iliOcs).hasClass("Active")) {
            $(this).removeClass("Active");
            resetChartFocus();
        }
    });
}); 

//select Other sales
$(document).ready(function () {
    $(iliOtherSales).on("click", function () {
        if (!$(iliOtherSales).hasClass("Active")) {
            //select new focus
            $(this).addClass("Active");
            focusPurple();
            //remove active from other options
            $(iliVending).removeClass("Active");
            $(iliCafeteria).removeClass("Active");
            $(iliOcs).removeClass("Active");
            $(iliMicroMarket).removeClass("Active");                             
        } else if ($(iliOtherSales).hasClass("Active")) {
            $(this).removeClass("Active");
            resetChartFocus();
        }
    });
}); 



// 3. myPreviewChart [insight preview card] - Not working with chartjs v3
// var ctx = document.getElementById('myPreviewChart').getContext("2d");
// var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
// gradientStroke.addColorStop(0, '#80b6f4');
// gradientStroke.addColorStop(1, '#f49080');
// var gradientFillCurrent = ctx.createLinearGradient(00, 0, 0, 200);
// gradientFillCurrent.addColorStop(0, "rgba(95,178,228,0.9)");
// gradientFillCurrent.addColorStop(1, "rgba(161,205,232, 0.7)");
// var gradientFillPrevious = ctx.createLinearGradient(00, 0, 0, 200);
// gradientFillPrevious.addColorStop(0, "rgba(175,222,206,0.3)");
// gradientFillPrevious.addColorStop(1, "rgba(79,183,148,0.2)");
// var ctx = document.getElementById('myPreviewChart').getContext('2d');
// var myPreviewChart = new Chart(ctx, {
//     type: 'line',
//     responsive: true,
//     responsiveAnimationDuration: 2000,
//     data: {
//         labels: [
//             'Feb 27',
//             'Feb 20',
//             'Feb 13',
//             'Feb 6',
//             'Jan 30',
//             'Jan 23',
//             'Jan 16',
//             'Jan 9',
//             'Jan 2',
//             'Dec 26',
//             'Dec 19',
//         ],
//         datasets: [
//             {
//                 label: 'This month',
//                 backgroundColor: gradientFillCurrent,
//                 hoverBackgroundColor: [
//                     '#2C4178',
//                 ],
//                 // pointBorderColor: '#5FB2E4',
//                 // pointBackgroundColor: '#5FB2E4',
//                 // borderColor: '#5FB2E4',
//                 // pointStrokeColor: "#FDD168",
//                 // pointHoverBorderWidth: 3,
//                 // pointRadius: 3,
//                 // borderWidth: 4,
//                 pointStrokeColor: "#FDD168",
//                 highli: 10,
//                 borderWidth: 2,
//                 pointRadius: 3,
//                 borderColor: "#5FB2E4",
//                 data: [
//                     3,
//                     2,
//                     5,
//                     2,
//                     3,
//                     3,
//                     5,
//                     3,
//                     3,
//                     3,
//                     2,
//                     4
//                 ]
//             }, {
//                 label: 'Last month',
//                 data: [
//                     4,
//                     3,
//                     1,
//                     3,
//                     3,
//                     4,
//                     1,
//                     2,
//                     5,
//                     3,
//                     6
//                 ],
//                 backgroundColor: gradientFillPrevious,
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#C7EBDF',
//                 pointBackgroundColor: '#C7EBDF',
//                 borderColor: '#C7EBDF'
//             }
//         ]
//     },
//     options: {
//         title: {
//             display: false
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//             position: 'nearest',
//             backgroundColor: '#2C4178',
//             xPadding: 16,
//             yPadding: 12,
//             borderColor: '#fff',
//             borderWidth: 2,
//             titleMarginBottom: 8,
//             titleFontFamily: "'Roboto', sans-serif",
//             titleFontSize: 16,
//             bodySpacing: 6,
//             bodyFontFamily: "'Montserrat', sans-serif"
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [
//                 {
//                     gridLines: {
//                         display: true
//                     },
//                     ticks: {}
//                 }
//             ],
//             yAxes: [
//                 {
//                     scaleLabel: {
//                         padding: 10
//                     },
//                     gridLines: {
//                         display: true,
//                         color: '#F8F8F8'
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         padding: 0
//                     }
//                 }
//             ]
//         }

//     }
// });
// // chart.options.title.text = 'inside a function new title';
// //  Chart.options.hover.intersect = false;
// myPreviewChart.options.plugins.legend.display = false;
// // Chart.defaults.global.defaultFontColor = 'rgba(44,65,120,0.3)';
// myPreviewChart.update()


// 4. myExpandedChart [insight card]
// var ctx = document.getElementById('myExpandedChart').getContext("2d");
// var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
// gradientStroke.addColorStop(0, '#80b6f4');
// gradientStroke.addColorStop(1, '#f49080');
// var gradientFillCurrent = ctx.createLinearGradient(00, 0, 0, 200);
// gradientFillCurrent.addColorStop(0, "rgba(95,178,228,0.9)");
// gradientFillCurrent.addColorStop(1, "rgba(161,205,232, 0.7)");
// var gradientFillPrevious = ctx.createLinearGradient(00, 0, 0, 200);
// gradientFillPrevious.addColorStop(0, "rgba(175,222,206,0.3)");
// gradientFillPrevious.addColorStop(1, "rgba(79,183,148,0.2)");
// var ctx = document.getElementById('myExpandedChart').getContext('2d');
// var myExpandedChart = new Chart(ctx, {
//     type: 'line',
//     responsive: true,
//     responsiveAnimationDuration: 2000,
//     data: {
//         labels: [
//             'Feb 27',
//             'Feb 20',
//             'Feb 13',
//             'Feb 6',
//             'Jan 30',
//             'Jan 23',
//             'Jan 16',
//             'Jan 9',
//             'Jan 2',
//             'Dec 26',
//             'Dec 19',
//         ],
//         datasets: [
//             {
//                 label: 'This month',
//                 backgroundColor: gradientFillCurrent,
//                 hoverBackgroundColor: [
//                     '#2C4178',
//                 ],
//                 // pointBorderColor: '#5FB2E4',
//                 // pointBackgroundColor: '#5FB2E4',
//                 // borderColor: '#5FB2E4',
//                 // pointStrokeColor: "#FDD168",
//                 // pointHoverBorderWidth: 3,
//                 // pointRadius: 3,
//                 // borderWidth: 4,
//                 pointStrokeColor: "#FDD168",
//                 highli: 10,
//                 borderWidth: 2,
//                 pointRadius: 3,
//                 borderColor: "#5FB2E4",
//                 data: [
//                     3,
//                     2,
//                     5,
//                     2,
//                     3,
//                     3,
//                     5,
//                     3,
//                     3,
//                     3,
//                     2,
//                     4
//                 ]
//             }, {
//                 label: 'Last month',
//                 data: [
//                     4,
//                     3,
//                     1,
//                     3,
//                     3,
//                     4,
//                     1,
//                     2,
//                     5,
//                     3,
//                     6
//                 ],
//                 backgroundColor: gradientFillPrevious,
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#C7EBDF',
//                 pointBackgroundColor: '#C7EBDF',
//                 borderColor: '#C7EBDF'
//             }
//         ]
//     },
//     options: {
//         title: {
//             display: false
//         },
//         legend: {
//             display: true,
//             fontColor: '#F8F8F8'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//             position: 'nearest',
//             backgroundColor: '#2C4178',
//             xPadding: 16,
//             yPadding: 12,
//             borderColor: '#fff',
//             borderWidth: 2,
//             titleMarginBottom: 8,
//             titleFontFamily: "'Roboto', sans-serif",
//             titleFontSize: 16,
//             bodySpacing: 6,
//             bodyFontFamily: "'Montserrat', sans-serif"
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [
//                 {
//                     gridLines: {
//                         display: true
//                     },
//                     ticks: {}
//                 }
//             ],
//             yAxes: [
//                 {
//                     scaleLabel: {
//                         padding: 10
//                     },
//                     gridLines: {
//                         display: true,
//                         color: '#F8F8F8'
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         padding: 0
//                     }
//                 }
//             ]
//         }

//     }
// });
// // chart.options.title.text = 'inside a function new title';
// // Chart.options.legend.display = false;
// // Chart.options.hover.intersect = false;
// Chart.defaults.global.defaultFontColor = 'rgba(44,65,120,0.3)';

// 5. myFiveWeekSalesTrendChartE [insight card]
// var fiveWeekTrendExpanded = document.getElementById("myFiveWeekSalesTrendChartE");
// var ctx = document.getElementById('myFiveWeekSalesTrendChartE').getContext("2d");
// var myFiveWeekSalesTrendChartE = new Chart(ctx, {
//     var myFiveWeekSalesTrendChartE = new Chart(ctx, 

// const ctx = document.getElementById('chart_0');
// const myFiveWeekSalesTrendData = {
//         labels: [
//         'Feb 2',
//         'Feb 22',
//         'Feb 29',
//         'Mar 6',
//         'Mar 13'
//         ],
//         datasets: [
//         {
//                 label: 'Other Sales',
//                 backgroundColor: 'rgba(181, 79, 183, .1)',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#B54FB7',
//                 pointBackgroundColor: '#B54FB7',
//                 borderColor: '#B54FB7',
//                 data: [
//                     3,
//                     4,
//                     2,
//                     2,
//                     2,
//                 ],
//                 // fill: true
//             },
//             {
//                 label: 'OCS Billing Sales',
//                 backgroundColor: 'rgba(233, 71, 112, .1)',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#E94770',
//                 pointBackgroundColor: '#E94770',
//                 borderColor: '#E94770',
//                 data: [
//                     5,
//                     4,
//                     5,
//                     7,
//                     7,
//                 ],
//             }, 
//             {
//                 label: 'Cafeteria Sales',
//                 backgroundColor: '#FEE09803',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#FDD168',
//                 pointBackgroundColor: '#FDD168',
//                 borderColor: '#FDD168',
//                 data: [
//                     18,
//                     26,
//                     27,
//                     10,
//                     11,
//                 ],
//             },     
//             {
//                 label: 'Vending Sales',
//                 backgroundColor: '#A8DBCA03',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 pointBorderColor: '#4FB794',
//                 pointBackgroundColor: '#4FB794',
//                 borderColor: '#4FB794',
//                 data: [
//                     50,
//                     55,
//                     73,
//                     68,
//                     48,
//                 ],
//             },                   
//             {
//                 label: 'Micro Market Sales',
//                 backgroundColor: 'rgba(95, 178, 228, 0.1)',
//                 hoverBackgroundColor: [
//                     '#5FB2E4',
//                 ],
//                 pointStrokeColor: "#5FB2E4",
//                 highli: 10,
//                 borderWidth: 2,
//                 pointRadius: 3,
//                 borderColor: "#5FB2E4",
//                 data: [
//                     110,
//                     138,
//                     87,
//                     156,
//                     95
//                 ],
//             },
//         ]
// };
// const myFiveWeekSalesTrendOptions = {
//     layout: {
//         padding: {
//             left: 0,
//         },
//     },
//     plugins: {
//         legend: {
//             display: false,
//             position: 'bottom'
//         },
//         responsive: true,
//         title: {
//             display: true,
//             text: "Income Year by Year - Stacked Area"
//         },
//     },
//     tooltips: {
//         mode: 'nearest'

//     },
//     scales: {
//         y: {
//             stacked: true,
//             grid: {
//                 tickColor: 'Green'
//             },
//             ticks: {
//                 // Include a dollar sign in the ticks
//                 callback: function(value, index, values) {
//                     return '$' + value + 'k     ';
//                 }
//             },
//         },
//         x: {

//             grid: {
//                 tickColor: 'Blue'
//             },
//         }
//     },
//     elements: {
//         line: {
//           fill: true,
//           tension: .35,
//         }
//     }
// }

// const myFiveWeekSalesTrendChartE = new Chart (ctx, {
//     type: 'line',
//     data: myFiveWeekSalesTrendData,
//     options: myFiveWeekSalesTrendOptions,
// }); 


