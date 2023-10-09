const Circle = require('../lib/circle.js');


describe ('Circle', () => {
    describe('Generate <circle /> Line of the SVG file', () => {
        it ('should include cx="150" cy="150" r="80" fill="input_color"', () => {
            const circleObject = new Circle("SVG", "white", "red");

            circleObject.setColor("blue");

//            console.log(circleObject);
            console.log(circleObject.render());

            expect(circleObject.render()).toMatch('<circle cx="150" cy="100" r="80" fill="blue" />');
        });

    });
});