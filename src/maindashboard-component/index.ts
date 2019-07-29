import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import * as d3 from "d3";

@Component(
    `<div class="plot"></div>`,
  ``

)
export default class MainDashboardComponent extends BuilderComponent{


    data = [];


    width;

    height;

    constructor(){
        super();
    }

    OnDestroy(){

    }

    OnInit(){

      this.generateData();

      this.width = 300;
      this.height = 500;

      let node = this.createPlot();      

      this.getElementsByClassName("plot").item(0).appendChild(node);

    }

    randomTemp(min,max){
      return Math.ceil(Math.random() * (max - min) + min);
    }

    generateData(){
        for(let i = 1 ;i<=30;i++){
          let date = new Date(2019,7,i);
          let value = this.randomTemp(20,40);
          this.data.push({date,value});
        }

    }


    getLine(){

      let self = this;

      return d3.line()
        .x(function(d) { return self.x(d.date); })
        .y(function(d) { return self.y(d.value); })
        .curve(d3.curveMonotoneX);
    }


    createPlot(){
      let svg = d3.create("svg")
      .attr("viewBox", [0, 0, this.width, this.height]);
      
      svg.append("path")
          .datum(this.data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", this.getLine());
      
      return svg.node();
    }

    x(data){
      return d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, this.width ]);
    } 

  // Add Y axis
  y(data){
    return d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return +d.value; })])
    .range([ this.height, 0 ]);
  }  
 
}