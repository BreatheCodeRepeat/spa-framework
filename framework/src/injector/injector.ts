import { BuilderComponent } from "../components/builder-component/builder";

export class Injector{
        
    private static objects : Array<FactoryArray>;

    static instatiate(classVar,opts,classname){
        let elementInstance =  new classVar(opts);


        let factoryArray : FactoryArray  = {
            classname:classname,
            instance:elementInstance
        }

        Injector.objects.push(factoryArray)
    }

    static getObject(name : String){


        let object;

        Injector.objects.forEach((el) => {
            if(el.classname === name){
                object = el.instance;
            }
        })

        return object;

    }




}    

interface FactoryArray{
    classname;

    instance;

}