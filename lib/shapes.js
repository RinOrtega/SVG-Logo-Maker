class Shape{
    constructor() {
        this.color = "";
    }
   
    setColor(userColor) {
        this.color = userColor;
    }
}


class Circle extends Shape {
    render() {

        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}" />`;
    }
}


class Square extends Shape {
    render() {

        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}


class Triangle extends Shape {
    render() {
        //
        return `<polygon points="150, 19 244, 192 56, 102" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle };