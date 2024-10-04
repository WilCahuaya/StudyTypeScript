// 1. TIPOS PRIMITIVOS

let nombre: string = "Wilder"; // Cadena de texto
let edad: number = 30; // Número
let esActivo: boolean = true; // Booleano
let vacio: null = null; // Valor nulo
let noDefinido: undefined = undefined; // Valor indefinido

// 2. TIPOS ESPECIALES

let variableAny: any = "Hola"; // Puede ser cualquier tipo
variableAny = 42; // Cambia a número sin error

let valorDesconocido: unknown = "Texto"; // Similar a 'any', pero requiere verificación
if (typeof valorDesconocido === "string") {
  console.log(valorDesconocido.toUpperCase()); // Operación segura después de verificar el tipo
}

function sinRetorno(): void {
  console.log("Esta función no retorna nada");
}

// 3. TIPOS COMPUESTOS

// Array: Lista de valores del mismo tipo
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Juan", "Ana", "Luis"];

// También se puede declarar usando el constructor genérico
let booleanos: Array<boolean> = [true, false, true];

// Tuple: Un array con un número fijo de elementos y tipos específicos
let persona: [string, number] = ["Juan", 25];

// Object: Definimos objetos con propiedades específicas
let coche: { marca: string; año: number } = {
  marca: "Toyota",
  año: 2021,
};

// Enum: Conjunto de constantes con nombres descriptivos
enum ColorB {
  Rojo,
  Verde,
  Azul,
}
let colorFavorito: ColorB = ColorB.Verde; // Asigna un valor del enum

// 4. UNION TYPES

let id: number | string; // Puede ser un número o una cadena
id = 123; // Válido
id = "ABC123"; // También válido

// 5. LITERAL TYPES

let direccion: "izquierda" | "derecha"; // Solo puede ser uno de estos valores
direccion = "izquierda"; // Válido
// direccion = "arriba";  // Error: "arriba" no está permitido

// 6. FUNCIONES TIPADAS

function suma(a: number, b: number): number {
  return a + b; // Retorna un número
}

function log(mensaje: string): void {
  console.log(mensaje); // No retorna nada, es de tipo 'void'
}

// 7. TIPOS PERSONALIZADOS (type)

type Punto = {
  x: number;
  y: number;
};

let coordenada: Punto = { x: 10, y: 20 };

// 8. INTERSECCIÓN DE TIPOS

type Animal = {
  nombre: string;
};

type Mamifero = {
  tienePelo: boolean;
};

type Perro = Animal & Mamifero; // Combina ambos tipos

let miPerro: Perro = {
  nombre: "Rex",
  tienePelo: true,
};

// EJEMPLO CON MAPPED TYPES
type EstadoB = "activo" | "inactivo";
type EventoB = "click" | "hover";
type EventoConEstadoB = `${Evento}-${Estado}`; // Combinamos tipos con Template Literal Types

// Resultado: "click-activo" | "click-inactivo" | "hover-activo" | "hover-inactivo"
