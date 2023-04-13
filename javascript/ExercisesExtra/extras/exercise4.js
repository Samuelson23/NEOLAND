//Segun la siguiente lista, ordena los elementos en base a la propiedad .order.
const list = [
    { name: "Mc Aitana", gender: "pop", order: 3 },
    { name: "Tote Queen", gender: "rap", order: 2 },
    { name: "Good Bunny", gender: "reggeaton", order: 4 },
    { name: "El sueño de Neo", gender: "pop", order: 1 },
  ];

   const ordenaListas = (lista) => {
        lista.sort(function(a,b){
            if(a.order>b.order){
                return 1;
            }else if(a.order<b.order){
                return -1
            }else return 0;
        })
        return lista
    }


  console.log(ordenaListas(list))


/*   console.log(ordenaListas(list)) 

  array.sort(ordena(a, b)
    return a - b;
  });
  console.log(array) */