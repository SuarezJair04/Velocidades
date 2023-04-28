# Velocidades
## Programa que usa herencia y polimorfismo para mostrar las distintas velocidades de cada vehiculo.

## [PROGRAMA - CLICK AQUI](https://suarezjair04.github.io/Velocidades/)
#### Suarez Castro Jair Alberto
## **Explicacion del programa:**

### En este programa podras observar como es que la velocidad de todos los vehiculos depende de uno solo. Mediante combinaciones de formulas fisicas y reglas de tres se creo un promedio mediante los km por hora que recorre cada vehiculo, utilizando la velocidad del carro como un 100%


![velocidades](https://user-images.githubusercontent.com/124205146/235058556-dd0bea94-1023-401c-a0ab-e61f066f37dd.jpg)

### **Observamos que la mayoria de velocidades se reducen ya que no son lo suficientemente veloces como lo es el carro sin embargo, el tren aumenta la velocidad.**

## **Clases**

![vv](https://user-images.githubusercontent.com/124205146/235059109-bbb074a3-f8b9-4401-bd8c-700b4129cb9b.jpg)


### Consideramos la clase "Vehiculo" como la clase padre, la clase que se tomara la mayoria para poder crear otras clases hijas, este contiene x,y, alto, ancho, velocidad. Existen dos funciones, uno que se le llama conduce que contiene una condicion en la que si x se encuentra el el borde del lienzo, entonces sus valores son negativos para que pueda volver, pero si nos basamos en la realidad, cuando un carro va en reversa, reduce la velocidad; se necesita reducir un 0.54 a la velocidad, pero cuando llegue al inicio del lienzo entonces este volvera a sus valores normales. Encontramos "mostrar()" en donde no se le agrega nada solo obliga a usarlo.



![Screenshot 2023-04-27 221402](https://user-images.githubusercontent.com/124205146/235059937-e58b1d34-6b65-4bbf-82a2-dd33b4ea0fd1.jpg)

Mayoritariamente todas las clases que toman como base a la clase "Vehiculo" se comporta de tal manera que tome como super la x,y, alto, ancho y velocidad. Se le agreaga color. Tenemos en la funtion de "Mostrar()" el rellenar de color y el formar una figura en este caso un rectangulo mediante la x,y,a y an. Esto lo aplicamos para casi todas las clases hijas.

![mmm](https://user-images.githubusercontent.com/124205146/235060737-39cca016-eece-4ead-8a54-bd83d81b85b3.jpg)

### Observamos que en la clase "Bicicleta" utilizamos una tecnica distinta para crear figuras, ya que resulta un poco mas complejo el crear un triangulo si se compara. En este caso, aparte de color se agrega otras dos donde se le consideran como los datos que faltan para calcular la vertex.

[Video en donde se inspira](https://www.youtube.com/watch?v=IY9bYwWiGLs&ab_channel=Steve%27sMakerspace)

## Setup

![asas](https://user-images.githubusercontent.com/124205146/235061736-5550f74f-81e1-457b-af64-c1733e0d519a.jpg)

### Creamos un boton para cada vehiculo iniciando desde la parte superior izquierda, dentro del mouseclicked se encuentra el proceso que ayuda a crear el vehiculo donde se le pone los datos necesarios para crear la figura y se observa que es completamente aleatorio el color que puede tener el vehiculo. Realizamos el push y se genera.

![fig](https://user-images.githubusercontent.com/124205146/235062736-78bf38c5-f6f4-457c-aadc-eae26c1bb6b0.jpg)

**Demo del programa**

## **- DRAW**
![draw](https://user-images.githubusercontent.com/124205146/235063295-2d1f5316-24b6-4fc0-9fb4-0efdca842e8d.jpg)

### Encontramos dentro del draw un ciclo for que permite el funcionamiento de "Mostrar()" y "conduce()". Dentro del draw se encuentra lo que queremos poner como el title en este caso "Speed comparison between vehicles" y las especificaciones que se muestra al momento de pasar el cursor en cada vehiculo en donde te notifica cuanto se aumenta o disminuye.

![FINALE](https://user-images.githubusercontent.com/124205146/235064081-8871739b-2be4-46a6-89dd-a136653583af.jpg)

# **DIAGRAMA UML**
![Diagrama sin título](https://user-images.githubusercontent.com/124205146/235064342-30c9a0a7-7692-41be-b380-b16968f198e2.jpg)




