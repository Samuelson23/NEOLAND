//DECLARACION DE LA CLASE Car
class Car {
    //propiedades
    protected _make:string;
    private _color:string;
    private _doors:number;
    private static numberOfCars:number = 0
    //constructor
    constructor(make:string, color:string, doors=4){
        this._make=make;
        this._color=color;
        this._doors=doors;
        Car.numberOfCars++
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
    public static getNumberOfCars():number {
        return Car.numberOfCars
    }

    // Creamos un metodo worker() para pasarle la marca del coche
    protected worker(): string {
        return this._make;
    }
}
//CREACION DE CLASES Car
let myCar = new Car ("audi", "red")
console.log(myCar.color)    //nos devuelve el constructor getColor()
//console.log(myCar._color)   //nos devuelve la propiedad color de myCar
let myCarTwo = new Car ("bmw", "blue", 3)   //nos devuelve 3 puertas pq la validacion esta en el metodo set y no en el creador

//EXTENDER UNA CLASE

//Para poder utilizar propiedades y metodos de la clase padre que están declarados como "private" hay que cambiarlos a "protected", asi se nos permite
//utilizarlos al extender una clase (como por ejemplo la propiedad _make o el metodo brake())
//Ademas utilizamos "super" en el constructor para coger de referencia los de la clase padre

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range:number;
    // Constructor
    constructor(make:string, color:string, range:number, doors=2){
        super(make,color,doors)
        this._range=range
    }
    // Accessors
    get range(){
        return this._range
    }
    set range(range:number){
        this._range=range
    }
    // Methods
    charge(){
        console.log("El coche " + this._make + " está cargandose")
    }
    brake():string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());