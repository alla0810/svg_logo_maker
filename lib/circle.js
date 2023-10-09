const Shape = require('./shape.js');

class Circle extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color);

        this.svg_shape = "circle";
        this.cx = "150";
        this.cy = "100";        
        this.r = "80";

        this.text_x="100";
        this.text_y="115";

        this.font_size = "3em";
    }

    generateCircleLine() {
        let output = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.shape_color}" />\n`;
    
        return output;
    }

    generateTextLine() {
        let output = `<text text_anchor="middle" x="${this.text_x}" y="${this.text_y}" fill="${this.text_color}" font-size="${this.font_size}">${this.text}</text>\n`;
        return output;
    }

    render() {
        let output = this.generateCircleLine();

        return output;
    }

}

module.exports = Circle;