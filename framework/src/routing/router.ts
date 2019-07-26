import { BuilderComponent } from "../components/builder-component/builder";
import { Component } from "../decorators/component-decorator";

export class Router{


    public paths : string[];

    private compientEnding = "-component";

    private htmlStart = "<";

    private htmlEnd = ">";

    private tagEnd = "</"


    constructor(routes){

        this.paths = routes.map((el) => el.path)

        this.initPathComponentPlaceHolder();

    }

    initPathComponentPlaceHolder(){

        try { 
            
            let location = window.location.pathname;
            window.customElements.define("path-placeholder",PathPlaceholder);

            if(this.checkPathMatch(location)){

                let firstTag = this.htmlStart + location + this.compientEnding + this.htmlEnd;

                let endTag = this.tagEnd + location + this.compientEnding + this.htmlEnd;

                document.getElementsByTagName("path-placeholder").item(0).innerHTML = firstTag + endTag ;
            }
            else {

                let firstTag = this.htmlStart + this.paths[0] + this.compientEnding + this.htmlEnd;

                let endTag = this.tagEnd + this.paths[0] + this.compientEnding + this.htmlEnd;

                document.getElementsByTagName("path-placeholder").item(0).innerHTML = firstTag + endTag;

            }

        } catch (error) {
            console.log(error);
            
        }

    }

    bindPaths(component : HTMLElement){

        try {
            let eventsArr;

            let hyperlink : HTMLAnchorElement;

            let hyperlinks = component.getElementsByTagName('a');
    
            let hyperlinksArr = Array.from(hyperlinks);

            for(hyperlink of hyperlinksArr){
                if(hyperlink.getAttribute('bindPath'))
                eventsArr = hyperlink.addEventListener("click",(ev) => this.changePath(ev));
            }

        } catch (error) {
            console.log(error);
        }


        
    }
   
    unBindPaths(component : HTMLElement){
        try {
            let hyperlink : HTMLAnchorElement;

            let hyperlinks = component.getElementsByTagName('a');
    
            let hyperlinksArr = Array.from(hyperlinks);

            for(hyperlink of hyperlinksArr){
                if(hyperlink.getAttribute('bindPath'))
                    hyperlink.removeEventListener("click",component.dispatchEvent);
            }

        } catch (error) {
            console.log(error);
        }
    }



    changePath(event){

        try {
            
            if(event.target.getAttribute('bindPath')){
                
                let path =  event.target.getAttribute('bindPath');

                
                let firstTag = this.htmlStart + path + this.compientEnding + this.htmlEnd;

                let endTag = this.tagEnd + path + this.compientEnding + this.htmlEnd;

                if(this.checkPathMatch(path)){
                    window.history.pushState(null,null,path);
                    document.getElementsByTagName("path-placeholder").item(0).innerHTML = firstTag + endTag ;
                }
            }
        } catch (error) {
            console.log(error);
            
        }


    }
        
    checkPathMatch(path){
        return this.paths
            .map(el => el === path)
            .reduce((sum,next) => sum || next)
    }

}


export class PathPlaceholder extends BuilderComponent{
    constructor(){
        super();
    }

    
    OnDestroy(){

    }

    OnInit(){

    }
}