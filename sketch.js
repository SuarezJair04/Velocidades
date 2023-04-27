let vehiculo = [];
let vc = 10;
let vca = vc * 0.6363;
let vb = vc * 0.227;
let vo = vc * 0.1263;
let vt = vc * 2.2727;
let cc = 1000;

function setup() {
  createCanvas(1000, 400);
  const BtnCarro = createButton("Carro");
  BtnCarro.position(10,10);
  BtnCarro.mousePressed(() => {
    
    const carro = new Carro(0, 50 , 20, 35, vc);
    carro.color = color (random(255) , random(255), random(255));
    vehiculo.push(carro);
    
  });
  
  const BtnCamion = createButton("Camion");
  BtnCamion.position(80,10);
  BtnCamion.mousePressed(() => {
    
    const camion = new Camion(0, 100 , 40, 100, vca);
    camion.color = color (random(255) , random(255) , random(255));
    vehiculo.push(camion);
    
  });
  
  const BtnOverboard = createButton("Overboard");
  BtnOverboard.position(160,10);
  BtnOverboard.mousePressed(() => {
    
    const overboard = new OverBoard(0, 200 , 10, 5, vo);
    overboard.color = color (random(255) , random(255) , random(255));
    vehiculo.push(overboard);
    
  });
  
  const BtnBici = createButton("Bicicleta");
  BtnBici.position(250,10);
  BtnBici.mousePressed(() => {
    
    const bicicleta = new Bicicleta(0, 250 ,20, 20,vb,20, 20);
    bicicleta.color = color (random(255) , random(255) , random(255));
    vehiculo.push(bicicleta);
    
  });
  
  const BtnTren = createButton("Tren");
  BtnTren.position(340,10);
  BtnTren.mousePressed(() => {
    
    const tren = new Tren(0, 300 , 50, 300, vt);
    tren.color = color (random(255) , random(255) , random(255));
    vehiculo.push(tren);
    
  });
}

function draw() {
  background(220);
  for (let i = 0; i < vehiculo.length; i++){
    vehiculo[i].conduce();
    vehiculo[i].mostrar();
  }
}

class Vehiculo{
  constructor(x,y, an, a , velocidad){
    this.x = x;
    this.y = y;
    this.a = a;
    this.an = an;
    this.velocidad = velocidad;
    
  }
  conduce(){
    this.x+= this.velocidad;
     if (this.x + this.a >= width) {
    this.velocidad =  - this.velocidad * 0.5454 ; 
    this.x = width - this.a;
       
  } 
    if (this.x <= 0) {
    this.velocidad = -this.velocidad * 1.83351669;
    this.x = 0; 
  }
    
  }
  mostrar(){
    
  }
}
  
  class Carro extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      rect(this.x,this.y,this.a,this.an);
    }
  
}

class Camion extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      rect(this.x,this.y,this.a,this.an);
    }
  
}

class OverBoard extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      ellipse(this.x,this.y,this.a,this.an);
    }
  
}

class Tren extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      rect(this.x,this.y,this.a,this.an);
    }
  
}

class Bicicleta extends Vehiculo {
  constructor(x, y, an, a, velocidad, x1, y1, Color = color(255, 0, 0)) {
    super(x, y, an, a, velocidad);
    this.color = color;
    this.x1 = x1;
    this.y1 = y1;
  }
  
  mostrar() {
    fill(this.color);
    beginShape();
    vertex(this.x, this.y + this.an / 2);
    vertex(this.x + this.a, this.y + this.an / 2);
    vertex(this.x + this.a / 2, this.y + this.y1);
    endShape(CLOSE);
  }

  
}






