let productos = [
    { "id": 1, "Nombre": "Smirnoff clásico", "Marca": "Smirnoff", "Bebida": "Vodka", "Precio": 500, "Contenido": 700, "Stock": 10},
    { "id": 2, "Nombre": "Fernet", "Marca": "Branca", "Bebida": "Fernet", "Precio": 700, "Contenido": 1000, "Stock": 10},
    { "id": 3, "Nombre": "Smirnoff Raspberry", "Marca": "Smirnoff", "Bebida": "Vodka", "Precio": 650, "Contenido": 700, "Stock": 15},
    { "id": 4, "Nombre": "Smirnoff Apple", "Marca": "Smirnoff", "Bebida": "Vodka", "Precio": 650, "Contenido": 700, "Stock": 10},
    { "id": 5, "Nombre": "Fernet Menta", "Marca": "Branca", "Bebida": "Fernet", "Precio": 720, "Contenido": 700, "Stock": 10},
    { "id": 6, "Nombre": "Gancia", "Marca": "Gancia", "Bebida": "Gancia", "Precio": 350, "Contenido": 1000, "Stock": 20},
    { "id": 7, "Nombre": "Absolut clásico", "Marca": "Absolut", "Bebida": "Vodka", "Precio": 1000, "Contenido": 700, "Stock": 20},
    { "id": 8, "Nombre": "Absolut Raspberry", "Marca": "Absolut", "Bebida": "Vodka", "Precio": 1200, "Contenido": 700, "Stock": 10},
    { "id": 9, "Nombre": "Licor de Melón", "Marca": "Bols", "Bebida": "Licor", "Precio": 500, "Contenido": 700, "Stock": 5},
    { "id": 10, "Nombre": "Licor de Chocolate Blanco", "Marca": "Bols", "Bebida": "Licor", "Precio": 500, "Contenido": 700, "Stock": 10},
    { "id": 11, "Nombre": "Licor de Dulce de Leche", "Marca": "Bols", "Bebida": "Licor", "Precio": 500, "Contenido": 700, "Stock": 5},
    { "id": 12, "Nombre": "Licor de Chocolate", "Marca": "Bols", "Bebida": "Licor", "Precio": 500, "Contenido": 700, "Stock": 10}
  ]
  
 export const getProducts = () => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(productos)
      },2000)
    })
  }
