var canvas = document.getElementById('speedometerChart');
var ctx = canvas.getContext('2d');
var redGradient = false;
var yellowGradient = false;
var greenGradient = false;
var grayGradient = false;
const data = {
  datasets: [{
    label: 'Weekly Sales',
    data: [30,30, 10, 20],
    backgroundColor: [
      // working here
      yellowGradient, yellowGradient, yellowGradient, '#F5F5F5',
    ],
    borderColor: [
      '#fff',
    ],
    // working here
    needleValue: 70,
    borderWidth: 1,
    borderRadius: 5,
    // cutout: '1%',
    cutout: '85%',

    circumference: 260,
    // circumference: 360,

    rotation: 230,
    // circumference: 180,
    // rotation: -90,
  }, {
    label: 'Comparison graph',
    data: [65, 25],
    backgroundColor: [
      grayGradient, '#F5F5F5',
    ],
    borderColor: [
      '#fff',
    ],
   borderWidth: 0,
    borderRadius:60,
    // cutout: '1%',
    cutout: '89%',

    circumference: 260,
    // circumference: 360,

    rotation: 230,
    // circumference: 180,
    // rotation: -90,
  }]
};



//gaugeNeedle block
const gaugeNeedle = {
  id: 'gaugeNeedle',
  afterDatasetDraw(chart, args, options) {
    const { ctx, config, data, chartArea: { top, bottom, left, right, width, height} } = chart;

    ctx.save();

    //calc where the needle should be
    const needleValue = data.datasets[0].needleValue;
    const dataTotal = data.datasets[0].data.reduce((a,b) => a + b, 0);
    const angle = 1.444 * (Math.PI + (1 / dataTotal * needleValue * Math.PI)) - 2.1;

    const cx = width / 2;
    const cy = chart._metasets[0].data[0].y;            
    // console.log(ctx);

    const needleHeight = ctx.canvas.clientHeight/50;
    const needleHeightThin = ctx.canvas.clientHeight/100;

    //needle
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    ctx.beginPath();     
    ctx.fillStyle = yellowNeedleGradient;                    
    ctx.lineWidth = 5;
    ctx.moveTo(0, 10);// Create a starting point
    ctx.arcTo( //top left
      0, needleHeight * -1, //a
      ctx.canvas.clientHeight /3, needleHeightThin * -1, //b
      needleHeight);
    ctx.arcTo( //top right
      ctx.canvas.clientHeight /3, needleHeightThin * -1, //b
      ctx.canvas.clientHeight /3, needleHeightThin, //c
      needleHeightThin);

    ctx.arcTo( // bottom right
      ctx.canvas.clientHeight /3, needleHeightThin, //c
      0, needleHeight, // d
      needleHeightThin);

    ctx.arcTo( // bottom left
      0, needleHeight, // d
      0, needleHeight * -1, //a
      needleHeight);    
    ctx.closePath()
    ctx.fill();// Draw it

    // needle dot
    ctx.translate(-cx, -cy);
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, 10);
    ctx.restore();

    //needle value text
    ctx.font = '50px Roboto'
    ctx.fillStyle = '#2C4178'
    // ctx.fillText(needleValue, cx, cy + 60)
    ctx.fillText(needleValue, cx, cy + thisHeight / 4)

    ctx.textAlign = 'center'
  }
}

// config 
const config = {
  type: 'doughnut',
  data,
  options: {
    plugins: {
      tooltip: {
        enabled: false
      }
    }
  },
  plugins: [gaugeNeedle]
};


// render init block
const speedometerChart = new Chart(
  document.getElementById('speedometerChart'),
  config
);

window.addEventListener("resize", speedometerResize);
speedometerResize()

function speedometerResize(){
  console.log(" the speedometer Resize function fired")
  console.log(ctx.canvas.clientHeight); 
  thisWidth = ctx.canvas.clientWidth;
  thisHeight = ctx.canvas.clientHeight;
  // Red
  redGradient = ctx.createLinearGradient(thisHeight / 3, thisHeight, 0, 0);
  redGradient.addColorStop(0, '#8F4474');   
  redGradient.addColorStop(1, '#E94770');
  
// Yellow
  yellowGradient = ctx.createLinearGradient(0, 0, thisHeight, 0);
  yellowGradient.addColorStop(0, '#A1916F');   
  yellowGradient.addColorStop(1, '#FDD168');

// Green
  greenGradient = ctx.createLinearGradient(0, 0, thisHeight, thisHeight);
  greenGradient.addColorStop(0, '#2C4178');   
  greenGradient.addColorStop(1, '#4FB794');

//Gray
  grayGradient = ctx.createLinearGradient(0, 0, 500, 0);
  grayGradient.addColorStop(0, '#979FB4');   
  grayGradient.addColorStop(1, '#CDD2DD');



  // speedometerChart.data.datasets[0].backgroundColor[0] = redGradient;
  speedometerChart.data.datasets[0].backgroundColor[0] = yellowGradient;
  speedometerChart.data.datasets[0].backgroundColor[1] = yellowGradient;
  speedometerChart.data.datasets[0].backgroundColor[2] = yellowGradient;
  speedometerChart.data.datasets[1].backgroundColor[0] = grayGradient;



  // speedometerChart.data.datasets[0].backgroundColor[0] = greenGradient;

  speedometerChart.update();
}

// Needle gradients
redNeedleGradient = ctx.createLinearGradient(0, 0, thisHeight * .6, 0);
redNeedleGradient.addColorStop(0, '#8F4474');   
redNeedleGradient.addColorStop(1, '#E94770');

yellowNeedleGradient = ctx.createLinearGradient(0, 0, thisHeight * .6, 0);
yellowNeedleGradient.addColorStop(0, '#A1916F');   
yellowNeedleGradient.addColorStop(1, '#FDD168');

greenNeedleGradient = ctx.createLinearGradient(0, 0, thisHeight * .6, 0);
greenNeedleGradient.addColorStop(0, '#2C4178');   
greenNeedleGradient.addColorStop(1, '#4FB794');
