var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

calculator.updateSettings({
    keypad: false,
    expressions: false,
    zoomButtons: false,
    showResetButtonOnGraphpaper: false,
    settingsMenu: false,
    pointsOfInterest: false,
    trace: false,
    border: false,
    lockViewport: true,
    autosize: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false
});

calculator.setMathBounds({
  left: 0,
  right: 10,
  bottom: -9,
  top: 10
});

calculator.setExpressions([
  {id:'1', latex:'y=Ae^{-mx}\\cos(wx+c) \\left\\{0<x\\right\\}'},
  {id:'2', latex:'A=10'},
  {id:'3', latex:'m=0.8'},
  {id:'4', latex:'w=8.6'},
  {id:'5', latex:'c=5.2'},
  //{id:'6', latex:'y=Ae^{-mx} \\left\\{0<x\\right\\}'},
  //{id:'7', latex:'y=-Ae^{-mx} \\left\\{0<x\\right\\}'},
]);

CheckWidth();

function CheckWidth(){
  var ScreenWidth = $( window ).width();
  if (ScreenWidth < 628){
    calculator.setExpression({id:'3', latex:'m = 1.4'});
    console.log("the smaller version is active!!!");
  }
  else {
    calculator.setExpression({id:'3', latex:'m = 0.8'});
    console.log("the larger version is active!!!");
  }
};


window.addEventListener("resize", CheckWidth);
