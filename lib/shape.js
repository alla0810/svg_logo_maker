class Shape {
    constructor (text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;

        this.width = "300";
        this.height = "200";
        this.text_anchor = "middle";
    }

    generateInitialBody() {
        let output = "";
        output += '<!DOCTYPE html>\n';
        output += '<html>\n';
        output += '<body>\n';
    
        return output;
    }
    
    generateSvgLine() {
        let output = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">\n`;        
        return output;
    }

    generateClosingLine() {
        let output = '</svg>\n';
        output += '</body>\n';
        output += '</html>\n';

        return output;
    }
}

module.exports = Shape;