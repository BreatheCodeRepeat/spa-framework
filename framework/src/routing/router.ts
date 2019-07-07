import { BuilderComponent } from "../components/builder-component/builder";

export class Router{


    public paths : string[];

    private hyperlinks ;


    constructor(routes){

        this.paths = routes.map((el) => el.path)

        this.initPathComponentPlaceHolder();

        this.bindPaths();
    }

    initPathComponentPlaceHolder(){
        window.customElements.define("path-placeholder",BuilderComponent);
    }

    bindPaths(){

        let hyperlink : HTMLAnchorElement;

        this.hyperlinks = document.getElementsByTagName('a');

        for(hyperlink of this.hyperlinks){
            if(hyperlink.getAttribute('bindPath'))
                hyperlink.addEventListener("click",(ev) => this.changePath(ev));
        }
        
    }

    changePath(event){

        let path =  event.target.getAttribute('bindPath');

        if(this.checkPathMatch(path)){
            window.history.pushState(null,null,path);
            document.getElementsByName("path-placeholder").item(0).innerHTML = ;
        }
    }
        
    checkPathMatch(path){
        return this.paths
            .map(el => el === path)
            .reduce((sum,next) => sum || next)
    }

}