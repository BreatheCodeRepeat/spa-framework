import { BuilderComponent } from "../../framework/src/components/builder-component/builder";
import { Component } from "../../framework/src/decorators/component-decorator";
import {M} from 'materialize-css'

@Component(
    `<nav>
    <div class="nav-wrapper">
      <a bindPath="dashboard" class="brand-logo">Dashboard</a>
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


    constructor(){
        super();

     

    }

    OnInit(){
      this.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    }

    OnDestroy(){
      
    }

}