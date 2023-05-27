class HTML_LOGO{
    constructor(canva , fac , fon="65px 'Gill Sans Ultra Bold', sans-serif"){
        this.ctx = canva.getContext('2d');
        this.factor = fac;
        this.ctx.font = fon;
        this.ctx.save();
    }
    draw(){
        this.ctx.clearRect(0,0,600,400)
        this.ctx.scale(this.factor,this.factor);
        this.logo(this.ctx , "#E34C26");
        this.outerMesh(this.ctx , "#E34C26")
        this.innerMesh(this.ctx , "#F06529")
        this.writingFive(this.ctx , "#EBEBEB");
    }
    outerMesh(ctx , color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(39, 250);
        ctx.lineTo(17, 0);
        ctx.lineTo(262, 0);
        ctx.lineTo(239, 250);
        ctx.lineTo(139, 278);
        ctx.closePath();
        ctx.fill();
    }
    innerMesh(ctx , color){
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.moveTo(139, 257);
        ctx.lineTo(220, 234);
        ctx.lineTo(239, 20);
        ctx.lineTo(139, 20);
        ctx.closePath();
        ctx.fill();
    }
    logo(ctx,color){
            var offsety = 80
            ctx.fillText("HTML", 51,60)
            ctx.translate(0,offsety) 
            ctx.fillStyle = color;
    }
    writingFive(ctx , color1, color2 = '#FFFFFF'){
    
        ctx.fillStyle = color1//Set color to gray
    ctx.beginPath()//Start path
    ctx.moveTo(139, 113)
    ctx.lineTo(98, 113)//Draw line to the left
    ctx.lineTo(96, 82)//Draw line up and slightly further left
    ctx.lineTo(139, 82)//Draw line to right
    ctx.lineTo(139, 51)//Draw line up
    ctx.lineTo(62, 51)//Draw line to the left
    ctx.lineTo(70, 144)//Draw line to the left and down
    ctx.lineTo(139, 144)//Draw line to the right
    ctx.closePath()//Close path
    ctx.fill()//Fill in with indicated color
    
    
    ctx.beginPath()//Start a new path
    ctx.moveTo(139, 193)//Move to middle point
    ctx.lineTo(105, 184)//Draw line to the left and up
    ctx.lineTo(103, 159)//Draw line slightly to the left and up
    ctx.lineTo(72, 159)//Draw line more to the left
    ctx.lineTo(76, 207)//Draw line slightly to the right and down
    ctx.lineTo(139, 225)//Draw line to the left and down
    ctx.closePath()//Close path
    ctx.fill();
    
    ctx.fillStyle = color2//Set color to white
    ctx.beginPath()//Start path
    ctx.moveTo(139, 113)//Start at middle pint
    ctx.lineTo(139, 144)//Draw line down
    ctx.lineTo(177, 144)//Draw line to the right
    ctx.lineTo(173, 184)//Draw line slightly left and down
    ctx.lineTo(139, 193)//Draw line more left and down
    ctx.lineTo(139, 225)//Draw line down
    ctx.lineTo(202, 207)//Draw line to the right and up
    ctx.lineTo(210, 113)//Draw line slightly right and up
    ctx.closePath()//Close path
    ctx.fill()//Fill in white
    ctx.beginPath()//Start a new path
    ctx.moveTo(139, 51)//Move to middle point
    ctx.lineTo(139, 82)//Move down
    ctx.lineTo(213, 82)//Move to the right
    ctx.lineTo(216, 51)//Move slightly to the right and up
    ctx.closePath()//Close path
    ctx.fill();
    }
};
class CSS_LOGO{
    constructor(canva , fac , fon="65px 'Gill Sans Ultra Bold', sans-serif"){
        this.ctx = canva.getContext('2d');
        this.factor = fac;
        this.ctx.font = fon;
        this.ctx.save();
    }
    draw(){
        this.ctx.clearRect(0,0,600,400)
        this.ctx.scale(this.factor,this.factor);
        this.logo(this.ctx , "#E34C26");
        this.outerMesh(this.ctx , "#264de4")
        this.innerMesh(this.ctx , "#2965f1")
        this.writingThree(this.ctx , "#EBEBEB");
    }
    outerMesh(ctx , color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(39, 250);
        ctx.lineTo(17, 0);
        ctx.lineTo(262, 0);
        ctx.lineTo(239, 250);
        ctx.lineTo(139, 278);
        ctx.closePath();
        ctx.fill();
    }
    innerMesh(ctx , color){
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.moveTo(139, 257);
        ctx.lineTo(220, 234);
        ctx.lineTo(239, 20);
        ctx.lineTo(139, 20);
        ctx.closePath();
        ctx.fill();
    }
    logo(ctx,color){
            var offsety = 80
            ctx.fillText("CSS", 73,60)
            ctx.translate(0,offsety) 
            ctx.fillStyle = color;
    }
    writingThree(ctx , color1, color2 = '#FFFFFF'){
    
        ctx.fillStyle = color1//Set color to gray
        ctx.beginPath()//Start path
        ctx.moveTo(139, 113)
        ctx.lineTo(68, 113)//Draw line to the left
        ctx.lineTo(70, 144)//Draw line to the left and down
        ctx.lineTo(139, 144)//Draw line to the right
        ctx.closePath()//Close path
        ctx.fill()//Fill in with indicated color
        // ctx.moveTo(139, 113);
        ctx.moveTo(139, 82)//Draw line to right
        ctx.lineTo(65, 82)//Draw line up and slightly further left
        ctx.lineTo(62, 51)//Draw line to the left
        ctx.lineTo(139, 51)//Draw line up
        ctx.closePath()//Close path
        ctx.fill()//Fill in with indicated color    
    ctx.beginPath()//Start a new path
    ctx.moveTo(139, 193)//Move to middle point
    ctx.lineTo(105, 184)//Draw line to the left and up
    ctx.lineTo(103, 159)//Draw line slightly to the left and up
    ctx.lineTo(72, 159)//Draw line more to the left
    ctx.lineTo(76, 207)//Draw line slightly to the right and down
    ctx.lineTo(139, 225)//Draw line to the left and down
    ctx.closePath()//Close path
    ctx.fill();
    
    ctx.fillStyle = color2//Set color to white
    ctx.beginPath()//Start path
    ctx.moveTo(139, 113)//Start at middle pint
    ctx.lineTo(139, 144)//Draw line down
    ctx.lineTo(177, 144)//Draw line to the right
    ctx.lineTo(173, 184)//Draw line slightly left and down
    ctx.lineTo(139, 193)//Draw line more left and down
    ctx.lineTo(139, 225)//Draw line down
    ctx.lineTo(202, 207)//Draw line to the right and up
    ctx.lineTo(210, 113)//Draw line slightly right and up
    ctx.closePath()//Close path
    ctx.fill()//Fill in white

    ctx.beginPath()//Start a new path
    ctx.moveTo(139, 51)//Move to middle point
    ctx.lineTo(139, 82)//Move down
    ctx.lineTo(183, 82)//Move to the right
    ctx.lineTo(181, 113)//Move to the right
    ctx.lineTo(210, 113)//Move to the right
    ctx.lineTo(216, 51)//Move slightly to the right and up
    ctx.closePath()//Close path
    ctx.fill();
    }
};
class JS_LOGO{
    constructor(canva , fac , fon="40px 'Gill Sans Ultra Bold', sans-serif"){
        this.ctx = canva.getContext('2d');
        this.factor = fac;
        this.ctx.font = fon;
        this.ctx.save();
    }
    draw(){
        this.ctx.clearRect(0,0,600,400)
        this.ctx.scale(this.factor,this.factor);
        this.logo(this.ctx , "#E34C26");
        this.outerMesh(this.ctx , "#f7df1e")
        this.innerMesh(this.ctx , "#fddf6e")
        this.writingJS(this.ctx , "#EBEBEB");
    }
    outerMesh(ctx , color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(39, 250);
        ctx.lineTo(17, 0);
        ctx.lineTo(262, 0);
        ctx.lineTo(239, 250);
        ctx.lineTo(139, 278);
        ctx.closePath();
        ctx.fill();
    }
    innerMesh(ctx , color){
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.moveTo(139, 257);
        ctx.lineTo(220, 234);
        ctx.lineTo(239, 20);
        ctx.lineTo(139, 20);
        ctx.closePath();
        ctx.fill();
    }
    logo(ctx,color){
            var offsety = 80
            ctx.fillText("JAVASCRIPT", 21,52)
            ctx.translate(0,offsety) 
            ctx.fillStyle = color;
    }
    writingJS(ctx , color1, color2 = '#FFFFFF'){
    
    ctx.fillStyle = color1//Set color to gray
    ctx.beginPath()//Start path
    ctx.moveTo(136, 82)//Draw line to right
    ctx.lineTo(136, 51)//Draw line up
    ctx.lineTo(62, 51)//Draw line to the left
    ctx.lineTo(67, 84)//Draw line to the left and down
    ctx.lineTo(123, 84)//Draw line to the right
    ctx.lineTo(125, 194)//Draw line to the right
    ctx.lineTo(136, 194)//Draw line to the right
    ctx.closePath()//Close path
    ctx.fill()//Fill in with indicated color
    
    
    ctx.beginPath()//Start a new path
    ctx.moveTo(136, 193)//Move to middle point
    ctx.lineTo(105, 184)//Draw line to the left and up
    ctx.lineTo(103, 159)//Draw line slightly to the left and up
    ctx.lineTo(72, 159)//Draw line more to the left
    ctx.lineTo(76, 207)//Draw line slightly to the right and down
    ctx.lineTo(136, 225)//Draw line to the left and down
    ctx.closePath()//Close path
    ctx.fill();
    
    ctx.fillStyle = color2//Set color to white
    ctx.beginPath()//Start path
    ctx.moveTo(142, 113)//Start at middle pint
    ctx.lineTo(142, 144)//Draw line down
    ctx.lineTo(177, 144)//Draw line to the right
    ctx.lineTo(173, 184)//Draw line slightly left and down
    ctx.lineTo(142, 193)//Draw line more left and down
    ctx.lineTo(142, 225)//Draw line down
    ctx.lineTo(202, 207)//Draw line to the right and up
    ctx.lineTo(210, 113)//Draw line slightly right and up
    ctx.closePath()//Close path
    ctx.fill()//Fill in white

    ctx.beginPath()//Start a new path
    ctx.moveTo(142, 51)//Move to middle point
    ctx.lineTo(142, 113)//Move down
    ctx.lineTo(162, 113)//Move down
    ctx.lineTo(164 , 83)//Move down
    ctx.lineTo(213, 82)//Move to the right
    ctx.lineTo(216, 51)//Move slightly to the right and up
    ctx.closePath()//Close path
    ctx.fill();
    }
};

let main=()=>{
    const canva = document.getElementById('canva');
    const htmlLogo = new HTML_LOGO(canva,1);
    htmlLogo.draw();
    const canva2 = document.getElementById('canva2');
    const htmlLogo2 = new CSS_LOGO(canva2,1);
    htmlLogo2.draw();
    const canva3 = document.getElementById('canva3');
    const htmlLogo3 = new JS_LOGO(canva3,1);
    htmlLogo3.draw();
}
document.addEventListener('DOMContentLoaded' ,main);