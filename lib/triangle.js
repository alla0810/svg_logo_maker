const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color);

        this.svg_shape = "polygon";
        this.points = "150, 18 244,182 56,182";

        this.text_x="100";
        this.text_y="150";

        this.font_size = "3em";
    }

    generatePolygonLine() {
        let output = `<polygon points="${this.points}" fill="${this.shape_color}" />\n`;
    
        return output;
    }

    generateTextLine() {
        let output = `<text text_anchor="middle" x="${this.text_x}" y="${this.text_y}" fill="${this.text_color}" font-size="${this.font_size}">${this.text}</text>\n`;
        return output;
    }


}

module.exports = Triangle;