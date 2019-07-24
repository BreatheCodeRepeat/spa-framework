import { Injector } from "../../injector/injector";
import { Router } from "../../routing/router";
import OnInit, { OnDestroy } from "../Lifecycle-hooks/lifecyle";

export class BuilderComponent extends HTMLElement implements OnInit,OnDestroy{
    
    private htmlContent :string = "";

    private cssContent :string = "";

    private router : Router;

    constructor(){
        super();
        this.router = Injector.getObject("Router");

        
    }

    OnInit(){
        console.log("Default on init behaviour");
        
    }

    OnDestroy(){
        console.log("Default on destroy behaviour");

    }

    connectedCallback() {
        this.innerHTML = this.htmlContent;
        this.setAttribute("style",this.cssContent);

        try{
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