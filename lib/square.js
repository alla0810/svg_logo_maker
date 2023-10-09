const Shape = require('./shape.js');

class Square extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color);

        this.svg_shape = "rect";
        this.rect_width = "140";
        this.rect_height = "140";
        this.rect_x = "20";
        this.rect_y = "20";

        this.text_x="38";
        this.text_y="105";

        this.font_size = "3em";
    }

    generateRectLine() {
        let output = `<rect width="${this.rect_width}" height="${this.rect_height}" x="${this.rect_x}" y="${this.rect_y}" fill="${this.shape_color}" />\n`;
    
        return output;
    }

    generateTextLine() {
        let output = `<text text_anchor="middle" x="${this.text_x}" y="${this.text_y}" fill="${this.text_color}" font-size="${this.font_size}">${this.text}</text>\n`;
        return output;
    }

    render() {
        let output = this.generateRectLine();
        return output;
    }

}

module.exports = Square;