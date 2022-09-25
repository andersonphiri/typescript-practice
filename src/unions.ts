let user3 : string | number | null = 23;

let user4 : IUser | null = null;

interface Colorful {
    name: string
}

interface Circle {
    radius : number
}

interface ColorfulCircleInterface extends Colorful, Circle {}

const cc : ColorfulCircleInterface = {
    name: "circle",
    radius: 45.678
}

// alternative intersections
type ColorfulCircleIntersection = Colorful & Circle


function draw(circle: ColorfulCircleIntersection) : void {
    console.log(`Color was ${circle.name}`)
}
draw({name: "sigmoid", radius: 44.5});
draw(cc);