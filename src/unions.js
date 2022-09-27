var user3 = 23;
var user4 = null;
var cc = {
    name: "circle",
    radius: 45.678
};
function draw(circle) {
    console.log("Color was ".concat(circle.name));
}
draw({ name: "sigmoid", radius: 44.5 });
draw(cc);
