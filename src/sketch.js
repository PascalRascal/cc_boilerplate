var canvas, github, resumeConstellation, nameConstellation;
var noise;

var sketch = (p) => {
    p.preload = () => {

    }


   
    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight).canvas;

    }
   
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
   
    
    //TODO: Vary star count base don screen size
    p.draw = () => {
        let c = canvas.getContext("2d");
        let t = p.millis() / 1000 * (1/4);
        p.background('black')

    }
}
 
var p = new p5(sketch);