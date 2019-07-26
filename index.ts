
import Framework from "./framework/src/index";
import paths from "./src/routing/router";
import NavComponent from "./src/nav-component";
import FooterComponent from "./src/footer-component";
import MainDashboardComponent from "./src/maindashboard-component";
import LightBulbComponent from "./src/lightbulb-component";
import TemperatureComponent from "./src/temperature-component";
import MaterializeService from "./src/services/materialize-service";

var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"nav",
            "component":NavComponent
            },
            {"name":"footer",
            "component":FooterComponent
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
            MaterializeService
        ]
    }
);