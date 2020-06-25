var gross;
var namaste; 
var gameState = 0;
var textinp, button;
var welcome;
var text1;
var sec;

function setup() {
  createCanvas(1200, 600);
  gross = createRadio();
  welcome = createElement("h1");
  text1 = createElement("h4");
  namaste = createButton('Picked =>');
  textinp = createInput();
  button = createButton('Enter');
  
  gross.option('black');
  gross.option('blue');
  gross.option('gold');
  gross.option('green');
  gross.option('grey');
  gross.option('pink');
  gross.style('width', '60px');

}

function draw() {
     background(255);

      if(gameState===0){
        gross.position(200,100);
        namaste.position(200,250);
        textinp.hide();
        button.hide();
        //fill(0);
        textSize(30);
        text('Choose A Color',120,50);
        namaste.mousePressed(()=>{
        gross.hide();
        namaste.hide();
        gameState = 1;
      });
      }

      if(gameState === 1){
        sec = second();
        console.log(sec);
        
        text1.html('Name');
        text1.position(50,30)
        textinp.position(100,50);
        button.position(200,100);
        textinp.show();
        button.show();
        var name = textinp.value();
        button.mousePressed(()=>{
        var s = sec;
        s++
        if(s > 10){
          gameState = 2;
          console.log(gameState);
          
        }

        textinp.remove();
        button.remove();
        text1.remove();
        welcome.html('Welcome To the Camp '+'<br>'+name);
        welcome.position(100,150);  
        
        });
      }
  
}