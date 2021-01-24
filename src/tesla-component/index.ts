import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import { Injector } from "../../framework/src/injector/injector";
import ExternalLibraryService from "../services/externallibrary.service";

@Component(
    `<h1>Tesla Stock</h1>
    <svg width="600" height="500"></svg>
    `,
  ``

)
export default class TeslaStockComponent extends BuilderComponent{

    externalLibraryService : ExternalLibraryService = Injector.getObject(ExternalLibraryService);

    constructor(){
        super();
    }

    OnDestroy(){

    }

    async OnInit(){

        let d3 = this.externalLibraryService.getD3Library();
    
        var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin

        svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")
        .text("XYZ Foods Stock Price")

        var xScale = d3.scaleBand().range([0, width]).padding(0.4),
            yScale = d3.scaleLinear().range([height, 0]);

        var g = svg.append("g")
                .attr("transform", "translate(" + 100 + "," + 100 + ")");

        try{        
            let data = await d3.csv("XYZ.csv");

            xScale.domain(data.map(function(d) { return d.year; }));
            yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

            g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale))
            .append("text")
            .attr("y", height - 250)
            .attr("x", width - 100)
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .text("Year");

            g.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function(d){
                return "$" + d;
            })
            .ticks(10))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "-5.1em")
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .text("Stock Price");

            g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return xScale(d.year); })
            .attr("y", function(d) { return yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.value); });
        }
        catch(error){
            console.error(error)
        }
        
    }
}