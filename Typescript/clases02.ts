//EJEMPLO SOBRE CUANDO USAR INTERFACES O CLASES

/*
Si va a crear una aplicación de pila completa con implementaciones de cliente y de servidor, normalmente deberá definir cómo 
se estructurarán los datos. Si los datos en cuestión fueran para almacenar información sobre un perro, por ejemplo, podría 
crear una interfaz con el siguiente aspecto:
*/

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

/*
Esta interfaz se puede usar en un módulo compartido para el código de cliente y de servidor, 
asegurándose de que la estructura de datos es la misma en ambos lados. En el cliente, puede tener código para recuperar el perro de la API 
del servidor que defina, que se parece a lo siguiente:

async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}

Al utilizar la interfaz, loadDog permitirá a TypeScript conocer la estructura del objeto. 
No es necesario crear una clase para asegurarse de que funciona.
*/

/*
Volviendo al ejemplo anterior, en el servidor puede que desee agregar código para cargar o guardar un perro en la base de datos.
Una técnica común para administrar los datos en una base de datos es utilizar lo que se conoce como "patrón de registro activo", 
lo que significa que el propio objeto tiene save, load y métodos similares. Podemos utilizar la interfaz Dog definida anteriormente 
para asegurarnos de que tenemos las mismas propiedades y la misma estructura, al tiempo que agregamos el código necesario para realizar 
las operaciones.
*/
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    /* static load(id: number): DogRecord {
                                                // code to load dog from database
        return dog
    } */

    save() {
        // code to save dog to database
    }
}