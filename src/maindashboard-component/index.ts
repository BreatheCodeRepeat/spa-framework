import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import * as d3 from "d3";

@Component(
    `<div class="plot></div>"`,
  ``

)
export default class MainDashboardComponent extends BuilderComponent{


    data = [];

    constructor(){
        super();
    }

    OnDestroy(){

    }

    OnInit(){

      this.generateData();


      let node = this.createPlot(200,500);      

      this.querySelector("plot").appendChild(node);

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
        .y(function(d) { return self.y(d.value); });
    }


    createPlot(width,height){
      let svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);
      
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

    y(d) {
      return d[1];
    }
    x(d){
      return d[1];
    }
}