/*
Crea una función llamada splitName que divida un nombre completo en nombre y apellido. 
Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

De tal modo que si tenemos el texto "Peter Parker" obtendremos dos variables...una con el valor "Peter" 
y otra con el valor "Parker".

En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()
*/

const splitName = (name) =>{
    //con indexOf() consigo el indice del espacio que separa el nombre del apellido
    let indice=name.indexOf(" ")
    //con el metodo substring() consigo desde la posicion 0 hasta el indice (espacio) el valor del nombre, y con indice+1 el apellido
    let firstName=name.substring(0,indice)
    let lastName=name.substring(indice+1,name.length)

    console.log(`El nombre ${firstName} y el apellido ${lastName}`)
}

splitName("Peter Parker")
splitName("Samuel Martinez")