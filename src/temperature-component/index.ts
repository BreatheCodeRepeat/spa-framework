import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import MaterializeService from '../services/materialize-service'
import { Injector } from "../../framework/src/injector/injector";


@Component(
    `<canvas id="canvas">`,
  ``

)
export default class TemperatureComponent extends BuilderComponent{



    constructor(){
        super();
    }

    OnDestroy(){}

    OnInit(){


    }

}