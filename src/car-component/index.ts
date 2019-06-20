import { BuilderComponent } from '../../../framework/src/components/builder-component/builder'

@Component(
    "car.html",
    "car.css"
)
export default class Car extends BuilderComponent{

    constructor(){
        super();
    }
}