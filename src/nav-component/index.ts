import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import ExternalLibraryService from '../services/externallibrary.service';
import { Injector } from "../../framework/src/injector/injector";

@Component(
    `<nav>
    <div class="nav-wrapper">
      <a bindPath="dashboard" class="brand-logo">Dashboard</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a bindPath="tesla">Tesla</a></li>
        <li><a bindPath="apple">Apple</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
  <li><a bindPath="tesla">Tesla</a></li>
  <li><a bindPath="apple">Apple</a></li>
  </ul>
  `,
  ``

)
export default class NavComponent extends BuilderComponent{

    private externalService : ExternalLibraryService = Injector.getObject(ExternalLibraryService);

    constructor(){
        super();
    }

    OnInit(){
      var elems = document.querySelectorAll('.sidenav');
      var instances = this.externalService.getMaterializeFramework().Sidenav.init(elems);
    }

    OnDestroy(){

    }

}