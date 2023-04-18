const flock = []; //array yang akan diisikan banyak benda
let alignSlider, cohesionSlider, separationSlider, populationSlider;
let population;
let canvasInfo = "Tugas MK MA2213 Visualisasi dalam Sains\nSimulasi Flocking\n\nNama: Cindy Salvia Situmorang\nNIM: 121160089\nProgram Studi: Matematika";

function setup() {
  createCanvas(500, 500);
  
  // create sliders
  alignSlider = createSlider(0, 5, 1, 0.1);
  alignSlider.position(20, 20);
  let alignLabel = createElement("label", "Alignment");
  alignLabel.position(20, 5);
  
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider.position(20, 50);
  let cohesionLabel = createElement("label", "Cohesion");
  cohesionLabel.position(20, 35);
  
  separationSlider = createSlider(0, 5, 1, 0.1);
  separationSlider.position(20, 80);
  let separationLabel = createElement("label", "Separation");
  separationLabel.position(20, 65);

  populationSlider = createSlider(50, 500, 200, 10);
  populationSlider.position(20, 110);
  let populationLabel = createElement("label", "Population");
  populationLabel.position(20, 95);
  
  population = populationSlider.value();
  
  // create flock of boids
  for (let i = 0; i < population; i++) {
    flock.push(new Boid(random(width), random(height)));
  }
}

function draw() {
  background(119,136,153);
  
  // display canvas info
  textSize(12);
  text(canvasInfo, 10, height - 100);
  
  // update and display boids
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock, alignSlider.value(), cohesionSlider.value(), separationSlider.value());
    boid.update();
    boid.show();
  }
}
