/*
En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.
*/
const animals = [
    "Rintintín",
    "Cosmo",
    "Gato con botas",
    "Asno",
  ];

  const contarLetras = (array,letra) => {
    let acc=0;
    let tildes=["á","é","í","ó","ú","à","è","ì","ò","ù"]
 
    array.forEach(palabra=>{
       //let palabraContar=[]
       //palabraContar.push(palabra.toLowerCase())
       //console.log(palabraContar)
       //console.log(palabra)
       for(let i=0;i<palabra.length;i++){
        
        (palabra.toLowerCase()[i]==letra||tildes.includes(palabra.toLowerCase()[i])) && (acc++)
       }
       
    })
    console.log(`La letra "${letra}" se repite un total de ${acc} veces`)
  }

  contarLetras(animals,"i")