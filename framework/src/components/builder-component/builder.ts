import { Injector } from "../../injector/injector";
import { Router } from "../../routing/router";

export abstract class BuilderComponent extends HTMLElement{

    

    private htmlContent :string = "";

    private cssContent :string = "";

    private router : Router;

    constructor(){
        super();
        this.router = Injector.getObject(Router);

    }

    abstract OnInit();

    abstract OnDestroy();

    connectedCallback() {
        this.innerHTML = this.htmlContent;
        this.setAttribute("style",this.cssContent);

        try{
            if(this.tagName != "PATH-PLACEHOLDER")
            this.router.bindPaths(this);
        }
        catch(error){
            console.log(error);
        }

        this.OnInit();
    }
    
    
    disconnectedCallback() {
        this.router.unBindPaths(this);

        this.OnDestroy();
    }  
}