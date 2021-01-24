import MainDashboardComponent from "../maindashboard-component";
import AppleStockComponent from "../apple-component";
import TeslaStockComponent from "../tesla-component";

export default [
            { path:'dashboard', component: MainDashboardComponent },
            { path:'apple', component: AppleStockComponent },
            { path:'tesla', component: TeslaStockComponent }
];
