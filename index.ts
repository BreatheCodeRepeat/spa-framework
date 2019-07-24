
import Framework from "./framework/src/index";
import paths from "./src/routing/router";
import NavComponent from "./src/nav-component";
import FooterComponent from "./src/footer-component";
import MainDashboardComponent from "./src/maindashboard-component";



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
            }
        ]
    }
);