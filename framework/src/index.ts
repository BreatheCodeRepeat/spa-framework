
import {Router} from "./routing/router";
import './decorators/component-decorator';
import { Injector } from "./injector/injector";

export default class Framework{

    private componentEnding : string = "-component";

    constructor(properties) {

        document.addEventListener("DOMContentLoaded", () => {

            Injector.instatiate(Router,properties.routes);

            properties.services.map(
                service => Injector.instatiate(service)
            )

            this.addToDom(properties.components);

        })

    }

    addToDom(components){

        components.forEach(component => {
            window.customElements.define(component.name + this.componentEnding ,component.component);
        });

    } 



}


