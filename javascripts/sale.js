const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = []
let opcionesParaElegir = []

function Opcion (nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

let opcion1 = new Opcion ("Original blend 200g 500 yen", 500);
let opcion2 = new Opcion ("Original blend 500g 900 yen", 900);
let opcion3 = new Opcion ("Special Blend 200g 700 yen", 700);
let opcion4 = new Opcion ("Special Blend 500g 1200 yen", 1200)

opcionesParaElegir.push(opcion1, opcion2, opcion3, opcion4)


function add() {

    const indice = parseInt(priceElement.value - 1);
    const number = parseInt(numberElement.value);
    let purchase = {
      nombre: opcionesParaElegir[indice].nombre, 
      price: opcionesParaElegir[indice].precio,
      number: number,
    };

    const newPurchase = purchases.findIndex((item) => item.price === purchase.price)
    if(purchases.length < 1 || newPurchase === -1) {
      purchases.push(purchase);
    } else {
      purchases[newPurchase].number += purchase.number;
    }
    //sacare la funcion display afuera
    display()

    window.alert(`${display()}\n\nSubtotal: ${subtotal()} yen`);
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.nombre}: ${purchase.number} item`
  }).join("\n");
};

  function subtotal() {
    return purchases.reduce((prev, purchase) => {
      return prev + purchase.price * purchase.number 
    }, 0);
  }

function calc() {

    let sf = 0
    let sum = subtotal()
    if (sum < 2000) {
      sf = 500
    } else if (sum >= 2000 && sum < 3000) {
      sf= 250
    } else {
      sf = 0
    }

    window.alert(`${display()}\n\nThe subtotal is ${subtotal()} yen and the shipping fee is ${sf} yen. The total is ${subtotal() + sf} yen.`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
  }

