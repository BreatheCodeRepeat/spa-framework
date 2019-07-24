import NavComponent from "../nav-component";
import MainDashboardComponent from "../maindashboard-component";
import TemperatureComponent from "../temperature-component";
import LightBulbComponent from "../lightbulb-component";


export default [
            { path:'dashboard', component: MainDashboardComponent },
            { path:'temperature', component: TemperatureComponent },
            { path:'lightbulb', component: LightBulbComponent },


];
