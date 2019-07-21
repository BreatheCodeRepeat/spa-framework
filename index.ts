
import Framework from "./framework/src/index";
import paths from "./src/routing/router";



var framework = new Framework(
    {
        "routes": paths,
        "components": [
            {"name":"train",
            "component":Train
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