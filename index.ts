
import Framework from "./framework/src/index";
import paths from "./src/routing/router";
import NavComponent from "./src/nav-component";



var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"nav",
            "component":NavComponent
            }
        ]
    }
);