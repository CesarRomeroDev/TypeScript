class Car {
    //Propiedades:
    private static numberOfCars: number = 0;        //*New static property
    private _make: string;
    private _color: string;
    private _doors: number;
    //CONSTRUCTOR
    constructor(make: string, color: string, doors = 4){
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;     //*Increments the value of the static property
    }
    //ACCESSORS
    get make() {
        return this._make;
    }

    set make(make){
        this._make = make;
    }

    get color(){
        return 'The color of the car is ' + this._color
    }
    set color(color){
        this._color = color; 
    }

    get doors(){
        return this._doors;
    }
    set doors(doors){
            this._doors = doors;
    }
    //METHODS
    private worker(): string {
        return this._make;
    }
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string{
        return `${this.worker()} is braking with the standard braking system`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
// console.log(myCar1._color);
// let myCar2 = new Car('Galaxy Motors', 'red', 3);
// console.log(myCar2.doors = 5);

let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('left'));




//* Modificadores de acceso

/*
Modificador de acceso
public:	Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en 
        público mediante la palabra clave public.

private: Si modifica el miembro con la palabra clave private, no se puede tener acceso a él desde fuera de la clase contenedora.

protected: El modificador protected actúa de forma muy similar al modificador private, con la excepción de que también se puede tener
           acceso a los miembros declarados protected dentro de las clases derivadas. (Proporcionaremos más información al respecto más 
            adelante en el módulo).
            687
 */

//* Acceso a una clase

//Establezca el modificador de acceso de las propiedades _color, _doors y _make y la función worker en private.
//Pruebe de nuevo el acceso a los miembros de la clase escribiendo myCar1. y observe que las propiedades y la función worker ahora no están
// disponibles. Cualquier intento de utilizar estos miembros de la clase generará un error en tiempo de compilación.

//* Definición de propiedades estáticas
/**
 * Las propiedades y métodos de las clases definidos hasta ahora son propiedades de instancia, lo que significa que se crea una instancia
 *  de ellos y se les llama en cada instancia del objeto de la clase. Hay otro tipo de propiedad denominada propiedad estática.
 *  Todas las instancias de una clase comparten las propiedades y los métodos estáticos.
    Para convertir una propiedad en estática, use la palabra clave static antes de un nombre de método o propiedad.
 */

/*
Tenga en cuenta que se usa la sintaxis className.propertyName en lugar de this. cuando se obtiene acceso a la propiedad estática.
También puede definir métodos estáticos. Puede llamar al método getNumberOfCars para devolver el valor de numberOfCars.
 */
/**
 * Cree una instancia de la clase Car como de costumbre y, a continuación, use la sintaxis Car.getNumberOfCars()
 *  para devolver el número de instancias.
 */

// Instantiate the Car object with all parameters
let myCar4 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar5 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());