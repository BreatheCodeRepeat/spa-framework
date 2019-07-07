import { BuilderComponent } from '../../framework/src/components/builder-component/builder'
import {Component} from '../../framework/src/decorators/component-decorator';

@Component(
    "here is the navvvv.html",
    "car.css"
)
export default class Nav extends BuilderComponent{

    constructor(){
        super();
    }
}