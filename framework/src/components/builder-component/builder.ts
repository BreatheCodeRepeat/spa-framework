export class BuilderComponent extends HTMLElement{
    
    private htmlContent :string = "";

    private cssContent :string = "";


    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = this.htmlContent;
    }
    
    
}