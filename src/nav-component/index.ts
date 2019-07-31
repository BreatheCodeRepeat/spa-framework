import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import  MaterializeService  from '../services/materialize-service';
import { Injector } from "../../framework/src/injector/injector";

@Component(
    `<nav>
    <div class="nav-wrapper">
      <a bindPath="dashboard" class="brand-logo">Dashboard</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a bindPath="lightbulb">LightBulb</a></li>
        <li><a bindPath="temperature">Temperature</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
  <li><a bindPath="lightbulb">LightBulb</a></li>
  <li><a bindPath="temperature">Temperature</a></li>
  </ul>
  `,
  ``

)
export default class NavComponent extends BuilderComponent{

    private matService : MaterializeService = Injector.getObject(MaterializeService);

    constructor(){
        super();
    }

    OnInit(){
      var elems = document.querySelectorAll('.sidenav');
      var instances = this.matService.getMaterializeFramework().Sidenav.init(elems);
    }

    OnDestroy(){

    }

}