
import Framework from "./framework/src/index";
import paths from "./src/routing/router";
import NavComponent from "./src/nav-component";
import MainDashboardComponent from "./src/maindashboard-component";
import ExternalLibraryService from "./src/services/externallibrary.service";
import AppleStockComponent from "./src/apple-component";
import TeslaStockComponent from "./src/tesla-component";


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
            {"name":"apple",
            "component":AppleStockComponent
            },
            {"name":"tesla",
            "component":TeslaStockComponent
            }
        ],
        "services" : [
            ExternalLibraryService
        ]
    }
);