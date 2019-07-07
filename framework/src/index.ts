
import {Router} from "./routing/router";
// import * as $ from "jquery";
// import './css-loader.js';
import './decorators/component-decorator';

export default class Framework{

    router : Router;

    private componentEnding : string = "-component";

    constructor(properties) {
        console.log(properties);
        

        this.router = new Router(properties.routes);

        this.addToDom(properties.components);

    }

    addToDom(components){

        console.log(components)

        components.forEach(component => {
            window.customElements.define(component.name + this.componentEnding ,component.component);
        });

    }



}


