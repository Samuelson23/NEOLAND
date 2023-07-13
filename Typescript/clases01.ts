//DECLARACION DE LA CLASE Car
class Car {
    //propiedades
    _make:string;
    _color:string;
    _doors:number;

    //constructor
    constructor(make:string, color:string, doors=4){
        this._make=make;
        this._color=color;
        this._doors=doors;
    }

    //metodos de acceso (get y set)
    get make(){
        return this._make
    }
    set make(make){
        this._make=make
    }

    get color(){
        return "The color is " +this._color
    }
    set color(color){
        this._color=color
    }

    get doors(){
        return this._doors
    }
    set doors(doors){
        if((doors%2===0)){
            this._doors=doors
        }else{
            throw new Error ("The car only has 2 or 4 doors")
        }
    }

    //metodos de clase
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    // Creamos un metodo worker() para pasarle la marca del coche
    worker(): string {
        return this._make;
    }
}

//CREACION DE CLASES Car
let myCar = new Car ("audi", "red")

console.log(myCar.color)    //nos devuelve el constructor getColor()
console.log(myCar._color)   //nos devuelve la propiedad color de myCar

let myCarTwo = new Car ("bmw", "blue", 3)   //nos devuelve 3 puertas pq la validacion esta en el metodo set y no en el creador
console.log(myCarTwo.doors)

console.log(myCar.accelerate(35));
console.log(myCar.brake());
console.log(myCar.turn('right'));