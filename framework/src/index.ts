
import {Router} from "./routing/router";
// import * as $ from "jquery";
// import './css-loader.js';
import './decorators/component-decorator';
import { Injector } from "./injector/injector";

export default class Framework{

    private componentEnding : string = "-component";

    constructor(properties) {
        console.log(properties);
        
        Injector.instatiate(Router,properties.routes,"Router");

        this.addToDom(properties.components);

    }

    addToDom(components){

        console.log(components)

        components.forEach(component => {
            window.customElements.define(component.name + this.componentEnding ,component.component);
        });

    }



}


