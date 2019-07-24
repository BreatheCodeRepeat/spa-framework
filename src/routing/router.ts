import NavComponent from "../nav-component";
import MainDashboardComponent from "../maindashboard-component";
import TemperatureComponent from "../temperature-component";
import LightBulbComponent from "../lightbulb-component";


export default [
            { path:'dashboard', component: MainDashboardComponent },
            { path:'hometemperature', component: TemperatureComponent },
            { path:'lights', component: LightBulbComponent },


];
