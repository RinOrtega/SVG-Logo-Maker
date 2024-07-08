//shapes.js classes
const shapes = require('./shapes');

//square class
const Square = shapes.Square;

//circle class
const Circle = shapes.Circle;

//triangle class
const Triangle = shapes.Triangle;

//function to create Icon
function generateIcon(data) {
    let userShape;
    if (data.shape === 'Circle') {
        userShape = new Circle();
        console.log("Circle Icon is Chosen");

    } else if (data.shape === 'Square') {
        userShape = new Square();
        console.log("Square Icon is Chosen");

    } else {
        userShape = new Triangle();
        console.log("Triangle Icon is Chosen");
    }
    userShape.setColor(data.color);

    const svg = new SVG()

    svg.setText(data.text, data.textColor)

    svg.setShape(userShape)

    return svg.render()

}

module.exports = generateIcon;