import * as Gauge from '../../assets/gauge.min.js'

export default class GaugeService{

    private gauge : Gauge;


    private opts = {
        angle: 0.15, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.6, // // Relative to gauge radius
          strokeWidth: 0.035, // The thickness
          color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        
      };

    constructor(){
    }

    initGauge(element){
        this.gauge =  new Gauge(element).setOptions(this.opts);
    }

    setMaxValue(value : number){
        this.gauge.maxValue = value;
    }

    setMinValue(value : number ){
        this.gauge.setMinValue(value);  // Prefer setter over gauge.minValue = 0

    }

    setAnimationSpeed(value : number){
        this.gauge.animationSpeed = value;
    }

    setGaugeValue(value : number){
        this.gauge.set(value);

    }
}