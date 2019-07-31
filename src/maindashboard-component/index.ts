import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import HouseParamService from "../services/houseparam-service";
import { Injector } from "../../framework/src/injector/injector";

@Component(
    `<h1>Welcome to The Home Automation App</h1>
    <p>Temperature:<div class="temperature"></div></p>
    <p>Humidity:<div class="humid"></div></p>

    `,
  ``

)
export default class MainDashboardComponent extends BuilderComponent{

    private houseParamService : HouseParamService;

    constructor(){
        super();
    }

    OnDestroy(){

    }

    OnInit(){

      this.houseParamService = Injector.getObject(HouseParamService);

      this.getElementsByClassName("temperature").item(0).innerHTML= Math.floor(this.houseParamService.temperature) + "";

      this.getElementsByClassName("humid").item(0).innerHTML= this.houseParamService.humidity + "";

    
    }
}