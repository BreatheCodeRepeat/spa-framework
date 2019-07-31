
import Framework from "./framework/src/index";
import paths from "./src/routing/router";
import NavComponent from "./src/nav-component";
import MainDashboardComponent from "./src/maindashboard-component";
import LightBulbComponent from "./src/lightbulb-component";
import TemperatureComponent from "./src/temperature-component";
import MaterializeService from "./src/services/materialize-service";
import HouseParamService from "./src/services/houseparam-service"

var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"nav",
            "component":NavComponent
            },
            {"name":"dashboard",
            "component":MainDashboardComponent
            },
            {"name":"lightbulb",
            "component":LightBulbComponent
            },
            {"name":"temperature",
            "component":TemperatureComponent
            }
        ],
        "services" : [
            MaterializeService,
            HouseParamService
        ]
    }
);