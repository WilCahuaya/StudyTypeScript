// 1. Narrowing con `typeof`
function procesarValor(valor: number | string) {
  if (typeof valor === "string") {
    // TypeScript infiere que valor es un string
    console.log(valor.toUpperCase()); // Operación exclusiva de strings
  } else {
    // TypeScript infiere que valor es un número
    console.log(valor.toFixed(2)); // Operación exclusiva de números
  }
}

procesarValor(42); // "42.00"
procesarValor("Hola!"); // "HOLA!"

// 2. Narrowing con `instanceof`
class PerroN {
  ladrar() {
    console.log("Guau!");
  }
}

class Gato {
  maullar() {
    console.log("Miau!");
  }
}

function hacerSonido(animal: PerroN | Gato) {
  if (animal instanceof PerroN) {
    animal.ladrar(); // TypeScript sabe que `animal` es un Perro
  } else {
    animal.maullar(); // TypeScript sabe que `animal` es un Gato
  }
}

const rex = new PerroN();
const felix = new Gato();

hacerSonido(rex); // "Guau!"
hacerSonido(felix); // "Miau!"

// 3. Narrowing con `in` (verificación de propiedades)
type Perro2 = { ladrar: () => void };
type Gato2 = { maullar: () => void };

function hacerSonidoIn(animal: Perro2 | Gato2) {
  if ("ladrar" in animal) {
    animal.ladrar(); // TypeScript sabe que es un Perro
  } else {
    animal.maullar(); // TypeScript sabe que es un Gato
  }
}

const rex2: Perro2 = { ladrar: () => console.log("Guau!") };
const felix2: Gato2 = { maullar: () => console.log("Miau!") };

hacerSonidoIn(rex2); // "Guau!"
hacerSonidoIn(felix2); // "Miau!"

// 4. Narrowing con `===` o comparaciones específicas
function procesarId(id: number | string) {
  if (id === 123) {
    console.log("ID numérico específico");
  } else if (typeof id === "string") {
    console.log("ID de tipo cadena:", id.toUpperCase());
  }
}

procesarId(123); // "ID numérico específico"
procesarId("abc123"); // "ID de tipo cadena: ABC123"

// 5. Narrowing exhaustivo con `never`
type Forma = "cuadrado" | "rectangulo" | "circulo";

function calcularArea(forma: Forma): number {
  switch (forma) {
    case "cuadrado":
      return 1; // Placeholder
    case "rectangulo":
      return 2; // Placeholder
    case "circulo":
      return 3; // Placeholder
    default:
      const _exhaustivo: never = forma; // Asegura que cubrimos todos los casos
      throw new Error(`Forma no soportada: ${forma}`);
  }
}

// Ejemplo de uso
calcularArea("cuadrado"); // 1
calcularArea("circulo"); // 3
