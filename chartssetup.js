// Chart.js charts
// 1. Start of myGradeChartPreview [grade card]
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
//Initiate render - expanded grade chart
const gradeCanvasExpanded = new Chart(
    document.getElementById('myGradeChartExpanded'),
    gradeCanvasExpandedConfig,
);
// 1. End of myGradeChartPreview [grade card]


// 2 & 3. Start of myGradeChartPreview [5 week sales trend stacked area graph]
Chart.defaults.font.size = 14;
Chart.defaults.color = "#757575";
// Defines all the gradients
let gradientBgRedDefault = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgRedDefault.addColorStop(0, '#F3DBE1');
gradientBgRedDefault.addColorStop(1, '#FFFFFF');
let gradientBgRedHighlight = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgRedHighlight.addColorStop(0, '#E94770');
gradientBgRedHighlight.addColorStop(1, '#F37E9B');

let gradientBgBlueDefault = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgBlueDefault.addColorStop(0, '#fff');
gradientBgBlueDefault.addColorStop(1, '#DBEEF9');
let gradientBgBlueHighlight = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgBlueHighlight.addColorStop(0, '#5FB2E4');
gradientBgBlueHighlight.addColorStop(1, '#93D6FF');

let gradientBgGreenDefault = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgGreenDefault.addColorStop(0, '#fff');
gradientBgGreenDefault.addColorStop(1, '#EAF6F2');
let gradientBgGreenHighlight = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgGreenHighlight.addColorStop(0, '#4FB794');
gradientBgGreenHighlight.addColorStop(1, '#95C3B4');

let gradientBgYellowDefault = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgYellowDefault.addColorStop(0, '#fff');
gradientBgYellowDefault.addColorStop(1, '#FFF4D9');
let gradientBgYellowHighlight = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgYellowHighlight.addColorStop(0, '#FDD168');
gradientBgYellowHighlight.addColorStop(1, '#FFDF94');

let gradientBgPurpleDefault = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgPurpleDefault.addColorStop(0, '#F7ECF7');
gradientBgPurpleDefault.addColorStop(1, '#EACEEA');
let gradientBgPurpleHighlight = ctx.createLinearGradient(0, 0, 0, 400);
gradientBgPurpleHighlight.addColorStop(0, '#B54FB7');
gradientBgPurpleHighlight.addColorStop(1, '#BA74BB');

let chartLineBlue = "#5FB2E4";
let chartLineRed = "#E94770";
let chartLineYellow = "#FDD168";
let chartLineGreen = "#4FB794";
let chartLinePurple = "#B54FB7";

// Puts the focus back to normal
function resetChartFocus() {
    myFiveWeekSalesTrendData.datasets[0].backgroundColor = gradientBgPurpleDefault;
    myFiveWeekSalesTrendData.datasets[1].backgroundColor = gradientBgGreenDefault;
    myFiveWeekSalesTrendData.datasets[2].backgroundColor = gradientBgYellowDefault;
    myFiveWeekSalesTrendData.datasets[3].backgroundColor = gradientBgRedDefault;
    myFiveWeekSalesTrendData.datasets[4].backgroundColor = gradientBgBlueDefault;                                                         
    myFiveWeekSalesTrendChartE.update();
}
/* Functions for highlighting an individualand data group */
function focusBlue() {
    resetChartFocus() 
    myFiveWeekSalesTrendData.datasets[4].backgroundColor = gradientBgBlueHighlight;
    myFiveWeekSalesTrendChartE.update();
}
function focusRed() {
    resetChartFocus() 
    myFiveWeekSalesTrendData.datasets[3].backgroundColor = gradientBgRedHighlight;
    myFiveWeekSalesTrendChartE.update();
}
function focusYellow() {
    resetChartFocus() 
    myFiveWeekSalesTrendData.datasets[2].backgroundColor = gradientBgYellowHighlight;
    myFiveWeekSalesTrendChartE.update();
}
function focusGreen() {
    resetChartFocus() 
    myFiveWeekSalesTrendData.datasets[1].backgroundColor = gradientBgGreenHighlight;
    myFiveWeekSalesTrendChartE.update();
}
function focusPurple() {
    resetChartFocus() 
    myFiveWeekSalesTrendData.datasets[0].backgroundColor = gradientBgPurpleHighlight;
    myFiveWeekSalesTrendChartE.update();
}

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
            backgroundColor: gradientBgPurpleDefault,
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
            backgroundColor: gradientBgGreenDefault,
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
            backgroundColor: gradientBgYellowDefault,
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
            // working here
            label: 'Vending Sales',
            backgroundColor: gradientBgRedDefault,
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
            backgroundColor: gradientBgBlueDefault,
            hoverBackgroundColor: [
                '#76BDE8',
            ],
            borderColor: chartLineBlue,
            /* borderColor: '#5FB2E4', */
            pointBorderColor: chartLineBlue,
            pointBorderWidth: 1,
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
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            position: 'nearest',
            backgroundColor: '#2C4178',
            xPadding: 16,
            yPadding: 12,
            borderColor: '#fff',
            borderWidth: 2,
            titleMarginBottom: 8,
            titleFontFamily: "'Roboto', sans-serif",
            titleFontSize: 16,
            bodySpacing: 6,
            bodyFontFamily: "'Montserrat', sans-serif", 
        },
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
            tension: 0
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
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            position: 'nearest',
            backgroundColor: '#2C4178',
            xPadding: 16,
            yPadding: 12,
            borderColor: '#fff',
            borderWidth: 2,
            titleMarginBottom: 8,
            titleFontFamily: "'Roboto', sans-serif",
            titleFontSize: 16,
            bodySpacing: 6,
            bodyFontFamily: "'Montserrat', sans-serif"
        },
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
            tension: 0,
            borderWidth: 5, 
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
//Initiate render - expanded
const myFiveWeekSalesTrendChartE = new Chart(
    document.getElementById('myFiveWeekSalesTrendChartE'),
    myFiveWeekSalesTrendConfigE,
);
//Initiate render - preview
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
// 2 & 3. End of myGradeChartPreview [5 week sales trend stacked area graph]


