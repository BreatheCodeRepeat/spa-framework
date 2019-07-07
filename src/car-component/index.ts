import { BuilderComponent } from '../../framework/src/components/builder-component/builder'
import {Component} from '../../framework/src/decorators/component-decorator';

@Component(
    "car.html",
    "car.css"
)
export default class Car extends BuilderComponent{

    constructor(){
        super();
    }
}