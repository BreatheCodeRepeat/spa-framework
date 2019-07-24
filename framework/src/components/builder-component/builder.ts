import { Injector } from "../../injector/injector";
import { Router } from "../../routing/router";

export class BuilderComponent extends HTMLElement{
    
    private htmlContent :string = "";

    private cssContent :string = "";

    private router : Router;

    constructor(){
        super();
        this.router = Injector.getObject("Router");

        
    }

    connectedCallback() {
        this.innerHTML = this.htmlContent;
        this.setAttribute("style",this.cssContent);
        this.router.bindPaths();
    }
    
    
}