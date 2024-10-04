// 1. Definición de Tipos Genéricos
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<number>(10)); // 10
console.log(identidad<string>("Hola")); // "Hola"

// 2. Genéricos en Clases
class Almacen<T> {
  private items: T[] = [];

  agregar(item: T) {
    this.items.push(item);
  }

  obtener(index: number): T {
    return this.items[index];
  }
}

const almacenNumeros = new Almacen<number>();
almacenNumeros.agregar(5);
console.log(almacenNumeros.obtener(0)); // 5

// 3. Genéricos en Interfaces
interface Resultado<T> {
  data: T;
  error?: string;
}

const resultadoExito: Resultado<number> = { data: 42 };
const resultadoError: Resultado<string> = {
  data: "No encontrado",
  error: "404",
};

// 4. Restricciones de Genéricos
function imprimirLongitud<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

imprimirLongitud("Hola"); // 4
imprimirLongitud([1, 2, 3]); // 3

// 5. Tipos Genéricos Predeterminados
function agregar<T = string>(item: T): T {
  return item;
}

console.log(agregar(100)); // 100
console.log(agregar("Texto")); // "Texto"

// 6. Genéricos en Funciones de Orden Superior
function map<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}

const numerosG = [1, 2, 3];
const numerosDoblados = map(numerosG, (n) => n * 2);

// 7. Ejemplo Completo con Genéricos
class Pair<T, U> {
  constructor(public primero: T, public segundo: U) {}

  mostrar(): void {
    console.log(`Primero: ${this.primero}, Segundo: ${this.segundo}`);
  }
}

const par = new Pair<number, string>(1, "Uno");
par.mostrar(); // Primero: 1, Segundo: Uno
