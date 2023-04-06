/*
**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que 
se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
*/
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

function repeatCounter(param){
  notDuplicated=[];
  arraySuma=[];

  param.forEach(palabra=>{
    let sumatorio=0;
    for(i=0;i<param.length;i++){
      if(palabra==param[i]) sumatorio+=1;
    }
    if(!notDuplicated.includes(palabra)){
      notDuplicated.push(palabra)
      console.log(`"${palabra}" se repite ${sumatorio} veces`)
    }
  })
}

repeatCounter(counterWords)


//PRUEBAS QUE HE HECHO HASTA CONSEGUIR IMPRIMIR POR CONSOLA SIN REPETIR LAS PALABRAS

/*function repeatCounter(param) {
  notDuplicated=[];
  arraySuma=[];

   param.forEach(palabra=>{
    let sumatorio=0

    if(!notDuplicated.includes(palabra)) notDuplicated.push(palabra)

    for(let i=0;i<param.length;i++){
      if(param[i]==palabra) sumatorio+=1
    }
    arraySuma.push(sumatorio)
  })
  
  for(let i=0;i<param.length;i++){
    if (notDuplicated.includes(param[i])) console.log(`palabra: "${param[i]}" repetida ${arraySuma[i]} veces`)
  }
 }

 repeatCounter(counterWords)*/

/*   function repeatCounter(param) {
    arraySuma=[]
    notDuplicated=[];
    arrayObj=[]

    let conjunto = new Object()
    conjunto.pal = "";
    conjunto.rep = 0;
    
   param.forEach(palabra=>{
      let sumatorio=0
      if(!notDuplicated.includes(palabra)) 
        notDuplicated.push(palabra)
        conjunto.pal=palabra;
       
      for(let i=0;i<param.length;i++){
           if(param[i]==palabra) sumatorio+=1
       }
       arraySuma.push(sumatorio)
       conjunto.rep=sumatorio;
   })
   arrayObj.push(conjunto);
   console.log(arrayObj);
 }


repeatCounter(counterWords) */