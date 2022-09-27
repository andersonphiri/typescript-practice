
import * as Module from './dynamicload/dynamicwork.js'
let circleButton = document.querySelector(".circle");
let squareButton = document.querySelector(".square");

const add = Module.addTwo(23, 56);

/// dynamic load demo

circleButton.addEventListener('click', () => {
    import("./dynamicload/dynamicwork")
        .then( (Module) => {
            // then consume module
            const bike = Module.Runner();
            // then do like wise
        });
});
