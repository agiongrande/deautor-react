let productos = [
    { "id": 1, "Nombre": "Smirnoff clásico", "Marca": "Smirnoff", "Categoria": "vodka", "Precio": 500, "Contenido": 700, "Stock": 10},
    { "id": 2, "Nombre": "Fernet", "Marca": "Branca", "Categoria": "aperitivo", "Precio": 700, "Contenido": 1000, "Stock": 10},
    { "id": 3, "Nombre": "Smirnoff Raspberry", "Marca": "Smirnoff", "Categoria": "vodka", "Precio": 650, "Contenido": 700, "Stock": 15},
    { "id": 4, "Nombre": "Smirnoff Apple", "Marca": "Smirnoff", "Categoria": "vodka", "Precio": 650, "Contenido": 700, "Stock": 10},
    { "id": 5, "Nombre": "Fernet Menta", "Marca": "Branca", "Categoria": "aperitivo", "Precio": 720, "Contenido": 700, "Stock": 10},
    { "id": 6, "Nombre": "Gancia", "Marca": "Gancia", "Categoria": "aperitivo", "Precio": 350, "Contenido": 1000, "Stock": 20},
    { "id": 7, "Nombre": "Absolut clásico", "Marca": "Absolut", "Categoria": "vodka", "Precio": 1000, "Contenido": 700, "Stock": 20},
    { "id": 8, "Nombre": "Absolut Raspberry", "Marca": "Absolut", "Categoria": "vodka", "Precio": 1200, "Contenido": 700, "Stock": 10},
    { "id": 9, "Nombre": "Licor de Melón", "Marca": "Bols", "Categoria": "licor", "Precio": 500, "Contenido": 700, "Stock": 5},
    { "id": 10, "Nombre": "Licor de Chocolate Blanco", "Marca": "Bols", "Categoria": "licor", "Precio": 500, "Contenido": 700, "Stock": 10},
    { "id": 11, "Nombre": "Licor de Dulce de Leche", "Marca": "Bols", "Categoria": "licor", "Precio": 500, "Contenido": 700, "Stock": 5},
    { "id": 12, "Nombre": "Licor de Chocolate", "Marca": "Bols", "Categoria": "licor", "Precio": 500, "Contenido": 700, "Stock": 10}
  ]

  const categorias = [
    { "id": "vodka", "nombre": "Vodkas"},
    { "id": "licor", "nombre": "Licores"},
    { "id": "aperitivo", "nombre": "Aperitivos"}
  ]

  export const getCategorias = () => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(categorias)
      },2000)
    })
  }

 export const getProducts = (category = "") => {
    return new Promise((resolve)=>{
      setTimeout(() => {

        const prod = productos.filter(p => p.Categoria === category)
        category ? resolve(prod) : resolve(productos)
      },2000)
    })
  }

  export const getProduct = (id) => {
    return new Promise((resolve)=>{
      const prod = productos.find(p => p.id === parseInt(id))
      setTimeout(() => {
        resolve(prod)
      },2000)
    })
  }
