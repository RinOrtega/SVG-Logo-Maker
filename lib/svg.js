// SVG Class will be created here

class SVG {
    constructor () {
        this.text = "";
        this.shape = "";
    }

    // Will set functions to add the text for logo
    setText(text, textColor) {
        // throws error if user prompt exceeds text length
        if (text.length > 3) {
            throw new Error("Please do not exceed 3 characters")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    // Will set the shape for the logo
    setShape(shape) {
        this.shape = shape.render()
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
}

module.exports = SVG