// 1. Obtener el tipo de una variable o constante
let nombre = "Wilder";

// 'typeof nombre' obtiene el tipo de la variable 'nombre', que es 'string'
type NombreType = typeof nombre; // NombreType es "string"

// 2. Obtener el tipo de una propiedad de un objeto
const persona = {
  nombre: "Wilder",
  edad: 30,
};

// 'typeof persona.edad' obtiene el tipo de la propiedad 'edad' del objeto 'persona', que es 'number'
type EdadType = typeof persona.edad; // EdadType es "number"

// 3. Obtener el tipo de una función
function sumarTypeof(a: number, b: number): number {
  return a + b;
}

// 'typeof sumar' obtiene el tipo de la función 'sumar', que es '(a: number, b: number) => number'
type SumarType = typeof sumarTypeof; // SumarType es "(a: number, b: number) => number"

// 4. Obtener el tipo de un array
let numeros = [1, 2, 3, 4];

// 'typeof numeros' obtiene el tipo del array 'numeros', que es 'number[]'
type NumerosType = typeof numeros; // NumerosType es "number[]"

// 5. Combinar 'typeof' con 'as const' para obtener tipos literales exactos
const colores = ["rojo", "verde", "azul"] as const;

// 'typeof colores' obtiene el tipo exacto del array de solo lectura ['rojo', 'verde', 'azul']
type ColoresType = typeof colores; // ColoresType es "readonly ['rojo', 'verde', 'azul']"

// 'typeof colores[number]' obtiene los valores del array como una unión de literales
type Color = (typeof colores)[number]; // Color es "rojo" | "verde" | "azul"
