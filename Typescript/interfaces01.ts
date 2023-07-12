interface iceCream {
    flavor: string,
    scoopes: number,
  }
  
  interface Sundae extends iceCream {
    sauce:"chocolate"|"lemon"|"caramel",
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
  }
  
  let myIceCream: Sundae= {flavor:"vanilla", scoopes:2, sauce:"lemon"}
  
  
  const tooManyScoopes = (helado: Sundae) => {
    helado.scoopes>4 ? console.log("Demasiados") : console.log("Suficientes")
  }
  console.log("mi helado", myIceCream)
  console.log("scoopes de mi helado", tooManyScoopes(myIceCream))
  console.log(tooManyScoopes({flavor:"chocolate", scoopes:6, sauce:"lemon"}))