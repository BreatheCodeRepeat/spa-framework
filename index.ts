
import Framework from "../framework/src/index";
import paths from "./src/routing/router";

import Train from "./src/train-component/index";
import Car from "./src/car-component/index";

var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"train",
            "component":Train
            },
            {"name":"car",
            "component":Car
            }
        ]
    }
);


// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// console.log(new Greeter("world"));