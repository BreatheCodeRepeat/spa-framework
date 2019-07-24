import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";


@Component(
    `<footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Home automation app</h5>
        </div>
      </div>
    </div>
  </footer>`,
  ``

)
export default class MainDashboardComponent extends BuilderComponent{


    constructor(){
        super();
    }

}