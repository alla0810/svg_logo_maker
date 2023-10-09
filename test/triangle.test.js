const Triangle = require('../lib/triangle.js');


describe ('Triangle', () => {
    describe('Generate <polygon /> Line of the SVG file', () => {
        it ('should include points="150,18 244,182, 56,182" fill="input_color"', () => {
            const triangleObject = new Triangle("SVG", "white", "red");

            triangleObject.setColor("blue");

//            console.log(triangleObject);
            console.log(triangleObject.render());                        

            expect(triangleObject.render()).toMatch('<polygon points="150,18 244,182 56,182" fill="blue" />');
        });

    });
});