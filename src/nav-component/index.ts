import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";


@Component(
    `<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a bindPath="lightbulb">LightBulb</a></li>
        <li><a bindPath="temperature">Temperature</a></li>
      </ul>
    </div>
  </nav>`,
  ``

)
export default class NavComponent extends BuilderComponent{


    constructor(){
        super();
    }

}