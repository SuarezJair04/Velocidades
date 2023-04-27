//declaraciones
let vehiculo = [];

//declaracion de velocidades de cada vehiculo guiandose con la velocidad del carro llamado "vc"
let vc = 10;
// la velocidad de cada vehiculo se multiplica acorde a una tipo regla de tres guiandonos con formulas
let vca = vc * 0.6363;
let vb = vc * 0.227;
let vo = vc * 0.1263;
let vt = vc * 2.2727;
//tamanio del ancho del canvas o lienzo
let cc = 1000;

function setup() {
  createCanvas(1000, 400);
  //Crear botones de los vehiculos con una posicion distinta
  // Al clickear se creara el vehiculo en donde ingresa informacion de las coordenadas x , y el alto, ancho y la velocidad
  // se le asignara un color aleatorio y usamos "random" hasta el 255 3 veces debido a que es el maximo en la paleta de colores
  const BtnCarro = createButton("Carro");
  BtnCarro.position(10,10);
  BtnCarro.mousePressed(() => {
    
    const carro = new Carro(0, 50 , 20, 35, vc);
    carro.color = color (random(255) , random(255), random(255));
    vehiculo.push(carro);
    
  });
  //mismo proceso comentado linea 16 a 18
  const BtnCamion = createButton("Camion");
  BtnCamion.position(80,10);
  BtnCamion.mousePressed(() => {
    
    const camion = new Camion(0, 100 , 40, 100, vca);
    camion.color = color (random(255) , random(255) , random(255));
    vehiculo.push(camion);
    
  });
  //mismo proceso comentado linea 16 a 18
  const BtnOverboard = createButton("Overboard");
  BtnOverboard.position(160,10);
  BtnOverboard.mousePressed(() => {
    
    const overboard = new OverBoard(0, 200 , 10, 5, vo);
    overboard.color = color (random(255) , random(255) , random(255));
    vehiculo.push(overboard);
    
  });
  //mismo proceso comentado linea 16 a 18
  //en bicicleta se le acomoda distinto los datos de la figura
  const BtnBici = createButton("Bicicleta");
  BtnBici.position(250,10);
  BtnBici.mousePressed(() => {
    
    const bicicleta = new Bicicleta(0, 250 ,20, 20,vb,20, 20);
    bicicleta.color = color (random(255) , random(255) , random(255));
    vehiculo.push(bicicleta);
    
  });
  //mismo proceso comentado linea 16 a 18
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
  //creamos ciclo for donde i es igual a 0 e i debe de ser menor al tamanio del vehiculo, se le agrega un +1 cada vez que se hace el proceso
  for (let i = 0; i < vehiculo.length; i++){
    //uso de matriz para usar funciones de conduce y mostrar
    vehiculo[i].conduce();
    vehiculo[i].mostrar();
  }
}
//la clase padre, caracteristicas que la mayoria de clases hijos tendran por necesidad
class Vehiculo{
  constructor(x,y, an, a , velocidad){
    this.x = x;
    this.y = y;
    this.a = a;
    this.an = an;
    this.velocidad = velocidad;
    
  }
  conduce(){
    //funcion de conduce en donde la x le agregamos un +1
    this.x+= this.velocidad;
    //si la coordenada es mayor o igual al ancho del lienzo entonces la nueva velocidad sera la velocidad en negativo por el 0.5454 debido a que al ir de reversa reduce la velocidad
     if (this.x + this.a >= width) {
    this.velocidad =  - this.velocidad * 0.5454 ; 
    this.x = width - this.a;
       
  } 
    //si x es menor o igual a cero entonces la nueva velocidad sera la velocidad negativo (negativo y negativo es igual a positivo) y esto multiplicado por el termino que permita que vuelva a la normalidad la velocidad
    
    if (this.x <= 0) {
    this.velocidad = -this.velocidad * 1.83351669;
    this.x = 0; 
  }
    
  }
  mostrar(){
    
  }
}
  //Carro toma a vehiculo como clase padre
  class Carro extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      //tomar variables creadas anteriormente
      super(x,y,an,a, velocidad);
      //nueva variable
      this.color = color
    }
    //funcion de mostrar
    mostrar(){
      //llenar la figura del color
      fill(this.color);
      //crear rectangulo mediante estas caracteristicas
      rect(this.x,this.y,this.a,this.an);
    }
  
}
//Camion toma a vehiculo como clase padre
class Camion extends Vehiculo{
  
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      //crear rectangulo mediante estas caracteristicas
      rect(this.x,this.y,this.a,this.an);
    }
  
}

class OverBoard extends Vehiculo{
  //Overboard toma a vehiculo como clase padre
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      //crear elipse mediante estas caracteristicas
      ellipse(this.x,this.y,this.a,this.an);
    }
  
}

class Tren extends Vehiculo{
   //Tren toma a vehiculo como clase padre 
    constructor (x, y, an,a , velocidad, Color = color(255,0,0)){
      super(x,y,an,a, velocidad);
      this.color = color
    }
    mostrar(){
      fill(this.color);
      //crear rectangulo mediante estas caracteristicas
      rect(this.x,this.y,this.a,this.an);
    }
  
}

class Bicicleta extends Vehiculo {
  //Bicicleta toma a vehiculo como clase padre 
  constructor(x, y, an, a, velocidad, x1, y1, Color = color(255, 0, 0)) {
    super(x, y, an, a, velocidad);
    this.color = color;
    //crear nuevas variables relacionadas al vertice de la figura
    this.x1 = x1;
    this.y1 = y1;
  }
  
  mostrar() {
    fill(this.color);
    //codigo para poder crear un triangulo
    beginShape();
    vertex(this.x, this.y + this.an / 2);
    vertex(this.x + this.a, this.y + this.an / 2);
    vertex(this.x + this.a / 2, this.y + this.y1);
    endShape(CLOSE);
  }

  
}






