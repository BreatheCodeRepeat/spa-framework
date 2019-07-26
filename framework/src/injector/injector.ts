import { BuilderComponent } from "../components/builder-component/builder";

export class Injector{
        
    private static objects : Array<FactoryArray> = [];

    static instatiate(classVar,opts?){

        let elementInstance;

        if(opts != undefined)
             elementInstance =  new classVar(opts);

        else{
            elementInstance =  new classVar();
        }

        let factoryArray : FactoryArray = new FactoryArray(classVar.name,elementInstance);

        Injector.objects.push(factoryArray)
    }

    static getObject(classVar){


        let object;

        Injector.objects.forEach((el) => {
            if(el.classname === classVar.name){
                object = el.instance;
            }
        })

        return object;

    }




}    

class FactoryArray{
    classname;

    instance;

    constructor(classname,instance){
        this.classname = classname;
        this.instance = instance;
    }

}