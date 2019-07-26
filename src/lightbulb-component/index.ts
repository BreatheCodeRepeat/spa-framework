import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";


@Component(
    `
    <a class="waves-effect waves-light btn-large"><i class="material-icons left">power_settings_new
    </i>Power LightBulb !</a>
    <i class="material-icons lightbulb">lightbulb_outline</i>
    
    `,
  ``

)
export default class LightBulbComponent extends BuilderComponent{

    constructor(){
        super();
    }

    OnDestroy(){

    }

    OnInit(){
        let icon = this.querySelector(".lightbulb");

        let button = this.querySelector(".btn-large");

        button.addEventListener("click",(ev) => this.toogleBulb(icon))
    }

    toogleBulb(element){
        element.classList.toggle("open")
    }
}