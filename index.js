// -----------------------------------------------------------------------------------------------------------------

// ✓ Realizar una clase “ProductManager” que
// gestione un conjunto de productos✓
// ✓ Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío✓
// ✓ Cada producto que gestione debe contar con las propiedades:✓
// - title (nombre del producto)
// - description (descripción del
// producto)
// - price (precio)
// - thumbnail (ruta de imagen)
// - code (código identificador)
// - stock (número de piezas
// disponibles)
// ✓ Debe contar con un método  “addProduct” el cual agregará un  producto al arreglo de productos inicial.✓
// - Validar que no se repita el campo “code” y que todos los campos sean obligatorios✓
// - Al agregarlo, debe crearse con un id autoincrementable✓
// ✓ Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos✓
// creados hasta ese momento✓
// ✓ Debe contar con un método “getProductById” el cual debe buscar en  el arreglo el producto que coincida con el id
// - En caso de no coincidir ningún id, mostrar en consola un error “Not found"
// Formato del entregable
// ✓ Archivo de Javascript listo para
// ejecutarse desde node.

class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  //   Metodo para agregar producto

  addProduct(title, description, price, thumbnail, code, stock) {
    // verificando si hay algun producto con el mismo codigo
    if (this.products.some((product) => product.code === code)) {
      console.error("Error: El código ya existe en la lista de productos.");
      return;
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.productIdCounter++,
    };

    // Validamos que tenga todos los campos con el if

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof price !== "number" ||
      typeof code !== "number" ||
      typeof stock !== "number"
    ) {
      console.error("Error: Los tipos de datos no son correctos.");
      return;
    }

    this.products.push(newProduct);
  }

  //   Metodo para mostrar el array

  getProduct() {
    return this.products;
  }

  // Metodo para buscar un producto por su id

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      return console.error("Error: Producto no encontrado (Not found).");
    }

    return product;
  }
}

// Agregando productos

const evento1 = new ProductManager();
evento1.addProduct("Caramelo", "Arcor", 122, "", 12, 15);
evento1.addProduct("Prod2", "Arcor", 13, "", 11, 18);
evento1.addProduct("`prod3", "Arcor", 12, "", 10, 14);
console.log(evento1.getProduct());

console.log(evento1.getProductById(5));
