import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import MaterializeService from '../services/materialize-service'
import { Injector } from "../../framework/src/injector/injector";


@Component(
    `
    <div class="row">
      <div class="input-field col s6">
        <input value="24" id="temperature" type="text" class="validate temperature">
        <label class="active" for="temperature">Change temperature</label>
      </div>
    </div>
    <div class="temp"></div>`,
  ``

)
export default class TemperatureComponent extends BuilderComponent{

    desiredTemp :number = 25;

    temperature : number = 25;

    step :number = 0.01;

    lock : boolean = false;

    constructor(){
        super();
    }

    OnDestroy(){}

    OnInit(){

        this.getElementsByClassName("temperature").item(0).addEventListener("keyup",() => {
            
            let inputElem = this.getElementsByClassName("temperature").item(0) as HTMLInputElement;

            this.desiredTemp = Number.parseFloat(inputElem.value);
            this.changeTemp();
            this.lock = true;
            this.changeTempValue();
        })
        this.changeTempValue();
    }


    changeTempValue(){
        this.getElementsByClassName("temp").item(0).innerHTML =  "" + this.temperature;

    }

    changeTemp(){

        let i=1;

        let localLock = this.lock;

        while(Math.floor(this.desiredTemp) != Math.floor(this.temperature)){
            if(this.desiredTemp > this.temperature)

                        this.temperature -= this.step;


            else{

                        this.temperature += this.step;

            }
        }

        if(this.desiredTemp == this.temperature)
            this.lock = false;
    }


}