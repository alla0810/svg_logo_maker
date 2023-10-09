const Square = require('../lib/square.js');

describe ('Square', () => {
    describe('Generate <rect /> Line of the SVG file', () => {
        it ('should include width="140" height="140" x="20" y="20" fill="input_color"', () => {
            const squareObject = new Square("SVG", "white", "red");

            squareObject.setColor("blue");

//            console.log(squareObject);
            console.log(squareObject.render());            

            expect(squareObject.render()).toMatch('<rect width="140" height="140" x="20" y="20" fill="blue" />');
        });

    });
});