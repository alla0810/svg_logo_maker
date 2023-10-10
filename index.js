const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');


function checkinput(fileName, response)
{
  if (response.text.length > 3)
  {
    console.log("Text length Too Long: " + response.text);
    return false;
  }

  return true;
}

function createSvgLogo(fileName, response)
{
    let htmlBuffer = "";

    if (checkinput(fileName, response) === false)
    {
      console.error("Input Error!");
      return;
    }

    switch (response.shape)
    {
      case "Circle": 
        var svgObject = new Circle(response.text, response.text_color, response.shape_color);

        htmlBuffer = svgObject.generateInitialBody();
        htmlBuffer += svgObject.generateSvgLine();
        htmlBuffer += svgObject.generateCircleLine();
        htmlBuffer += svgObject.generateTextLine();        
        htmlBuffer += svgObject.generateClosingLine();                

        break;

      case "Triangle":
        var svgObject = new Triangle(response.text, response.text_color, response.shape_color);

        htmlBuffer = svgObject.generateInitialBody();
        htmlBuffer += svgObject.generateSvgLine();
        htmlBuffer += svgObject.generatePolygonLine();
        htmlBuffer += svgObject.generateTextLine();        
        htmlBuffer += svgObject.generateClosingLine();                
    
        break;
      case "Square":
        var svgObject = new Square(response.text, response.text_color, response.shape_color);

        htmlBuffer = svgObject.generateInitialBody();
        htmlBuffer += svgObject.generateSvgLine();
        htmlBuffer += svgObject.generateRectLine();
        htmlBuffer += svgObject.generateTextLine();        
        htmlBuffer += svgObject.generateClosingLine();                
    
        break;
    };

    console.log(htmlBuffer);

    fs.writeFile(fileName, htmlBuffer, (err) => err ? console.error(err): console.log('Generated ./examples/logo.svg'));
    
}



function inquireHandler() {

    inquirer
    .prompt([
      {
        type: 'input',
        message: 'text (1~3 characters): ',
        name: 'text',
      },
      {
        type: 'input',
        message: 'text color: ',
        name: 'text_color',
      },
      {
        type: 'list',
        message: 'shape: ',
        name: 'shape',
        choices: ["Circle", "Triangle", "Square"]        
      },    
      {
        type: 'input',
        message: "shape's color: ",
        name: 'shape_color',
      }
    ])
    .then((response) =>{
        console.log(response);
        createSvgLogo('./examples/logo.svg', response);
  });
      
}


inquireHandler();