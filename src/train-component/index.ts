import { BuilderComponent } from '../../framework/src/components/builder-component/builder'
import {Component} from '../../framework/src/decorators/component-decorator';

@Component(
    "chu chu chu <nav-component></nav-component>",
    "car.css"
)
export default class Train extends BuilderComponent{

    constructor(){
        super();
    }
}