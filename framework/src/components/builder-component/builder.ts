import { Injector } from "../../injector/injector";
import { Router } from "../../routing/router";

export class BuilderComponent extends HTMLElement{
    
    private htmlContent :string = "";

    private cssContent :string = "";

    private router : Router;

    constructor(){
        super();
        
    }

    connectedCallback() {
        this.innerHTML = this.htmlContent;
        this.setAttribute("style",this.cssContent);
        router = Injector.getObject("Router");
    }
    
    
}