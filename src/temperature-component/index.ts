import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import MaterializeService from '../services/houseparam-service'
import { Injector } from "../../framework/src/injector/injector";
import HouseParamService from "../services/houseparam-service";


@Component(
    `
    <div class="row">
      <div class="input-field col s6">
        <input value="24" id="temperature" type="text" class="validate temperature">
        <label class="active" for="temperature">Change temperature</label>
      </div>
    </div>
    <a class="waves-effect waves-light btn">Change temperature</a>
    <p>Actual temperature:
        <div class="temp"></div>
    </p>`,
  ``

)
export default class TemperatureComponent extends BuilderComponent{

    temperature : number = 25;

    step :number = 0.1;

    lock = 0;

    houseParamService : HouseParamService;

    constructor(){
        super();
    }

    OnDestroy(){
        this.lock = 1;
        this.getElementsByClassName("btn").item(0).removeEventListener("click",this.dispatchEvent);
    }

    OnInit(){

        this.houseParamService = Injector.getObject(HouseParamService);

        this.temperature = this.houseParamService.temperature;

        this.getElementsByClassName("btn").item(0).addEventListener("click", async () => {
            
            if(this.lock === 0){
                let inputElem = this.getElementsByClassName("temperature").item(0) as HTMLInputElement;
                await this.changeTemp(Number.parseInt(inputElem.value))
                this.lock = 1;
                this.changeTempValue();
            }


        })
        this.changeTempValue();
    }


    changeTempValue(){
        this.getElementsByClassName("temp").item(0).innerHTML =  "" + Math.floor(this.temperature);
        this.houseParamService.temperature = this.temperature;

    }

    async changeTemp(temp : number){

        let i = 1;
        let lock = 0;

        while(Math.floor(temp) != Math.floor(this.temperature) && i<1000){
            i++;
            if(temp > this.temperature){
                if(Math.floor(temp) == Math.floor(this.temperature) || lock == 1) {
                    this.lock = 0;
                    break;
                    
                }

                setTimeout(
                    () =>{
                        if(Math.floor(temp) == Math.floor(this.temperature)) {
                            lock = 1;
                            this.lock = 0;
                        }

                        else{
                            if(lock == 0){
                                this.temperature += this.step;
                                this.changeTempValue();
                            }

                        }
                    },200*i
                )



            }

            else{
                if(Math.floor(temp) == Math.floor(this.temperature) || lock == 1) break;


                setTimeout(
                    () =>{

                        if(Math.floor(temp) == Math.floor(this.temperature)) {
                            lock = 1;
                            this.lock = 0;
                        }
                        else{
                            if(lock == 0){
                                this.temperature -= this.step;
                                this.changeTempValue();
                            }
                        }

                    },200*i
                )


            }
        }

        
    }


}