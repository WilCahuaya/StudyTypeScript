// 1. Function Type Expressions
type Operacion = (a: number, b: number) => number;

const sumar: Operacion = (x, y) => x + y;
const multiplicar: Operacion = (x, y) => x * y;

console.log(sumar(2, 3)); // 5
console.log(multiplicar(2, 3)); // 6

// 2. Call Signatures
interface Comparador {
  (a: number, b: number): number;
}

const comparar: Comparador = (x, y) => x - y;

console.log(comparar(10, 5)); // 5

// 3. Construct Signatures
interface ConstructorDePersonas {
  new (nombre: string, edad: number): Persona;
}

class Persona {
  constructor(public nombre: string, public edad: number) {}
}

const CrearPersona: ConstructorDePersonas = Persona;
const personaF = new CrearPersona("Wilder", 30);
console.log(personaF.nombre); // Wilder

// 4. Generic Functions
function identidadF<T>(valor: T): T {
  return valor;
}

console.log(identidadF<number>(10)); // 10
console.log(identidadF<string>("Hola")); // "Hola"

// 5. Optional Parameters
function saludar(nombre: string, saludo?: string): string {
  return saludo ? `${saludo}, ${nombre}` : `Hola, ${nombre}`;
}

console.log(saludar("Wilder")); // Hola, Wilder
console.log(saludar("Wilder", "Buen día")); // Buen día, Wilder

// 6. Function Overloads
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;
function combinar(a: any, b: any): any {
  return a + b;
}

console.log(combinar(10, 5)); // 15
console.log(combinar("Hola", " Mundo")); // Hola Mundo

// 7. Declaring `this` in a Function
interface Boton {
  texto: string;
  click(this: Boton): void;
}

const boton: Boton = {
  texto: "Hacer clic",
  click() {
    console.log(this.texto);
  },
};

boton.click(); // Hacer clic

// 8. Other Types to Know About (void, never, unknown)
function hacerAlgo(): void {
  console.log("Haciendo algo...");
}

function lanzarError(): never {
  throw new Error("¡Error!");
}

hacerAlgo(); // Haciendo algo...
// lanzarError(); // Detendría la ejecución lanzando un error

// 9. Rest Parameters and Arguments
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumarTodos(1, 2, 3, 4)); // 10

// 10. Parameter Destructuring
function imprimirPersona({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const personaDestructurada = { nombre: "Wilder", edad: 30 };
imprimirPersona(personaDestructurada); // Nombre: Wilder, Edad: 30

// 11. Assignability of Functions
type Binaria = (a: number, b: number) => number;
type Unaria = (a: number) => number;

const sumarDos: Binaria = (a, b) => a + b;
const duplicar: Unaria = (a) => a * 2;

const operacion: Unaria = (a) => sumarDos(a, a);
console.log(operacion(5)); // 10
