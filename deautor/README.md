# Curso React JS - CoderHouse

## Proyecto desarrollado por: Alejandro Giongrande

Mail: agiongrande@gmail.com
GitHub: https://github.com/agiongrande/deautor-react/tree/main/deautor
Linkedin: https://www.linkedin.com/in/alejandro-giongrande/

### Información del Proyecto

DeAutor es un e-commerce desarrollado como trabajo integrador del curso de React JS de CoderHouse. Se trata de un e-commerce de bebidas alcohólicas que cuenta con tres categorías: vodkas, licores y aperitivos.

### Desarrollado con las siguientes herramientas:

Visual Studio Code, utilizando React.

### Variables de entorno

Las variables de entorno que deben configurarse son las siguientes:

REACT_APP_ApiKey
REACT_APP_AuthDomain
REACT_APP_projectId
REACT_APP_StorageBucket
REACT_APP_MessagingSenderId
REACT_APP_AppId

### Tablas de Firebase

Se deben crear dos tablas de Firebase. Una de ellas para las categorías y otras para los productos. Las tablas deben tener la siguiente estructura:

Colección: categorías
ID
Nombre: nombre del producto

Colección: productos
ID (se recomienda de generación automática)
Categoria: categoría del producto. Ejemplo: vodka, licor, etc.
Contenido: tamaño de la botella, en ml. Por ejemplo: 750, 1000.
Marca: marca de la bebida.
Nombre: nombre del producto.
Precio: precio del producto en pesos argentinos. Por ejemplo: 500, 1000.
Stock: stock disponible
img: imagen del producto, en la carpeta img, sin la extensión.

### Rutas de la aplicación

Las rutas de la aplicación son las siguientes:

/ => directorio raíz
/category/:categoryName => Filtra por los productos que son de categoría categoryName
/detail/:productID => Filtra el producto cuyo ID es productID
/carrito/ => visualiza el carrito

### Sitio en funcionamiento

A continuación se muestra el sitio en funcionamiento:

![Proceso de compra](https://agiongrande.github.io/deautor-react/deautor/public/proceso.gif)