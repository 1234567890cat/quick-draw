function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    
}



function clearCanvas() {
  
    background("white");
  }
  
  function draw() {
  
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }

  
  function preload() {
  
  
    classifier = ml5.imageClassifier('DoodleNet');
  }
  
  function classifyCanvas()
  {
  classifier.classify(canvas, gotResult)
  {
  
  }
  }

   
  function gotResult(error, results) {
    if (error) {
      console.error(error);
        console.log(results);
    }
}