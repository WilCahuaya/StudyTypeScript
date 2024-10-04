// 1. Acceso a propiedades de un objeto por clave
type Personai = { nombre: string; edad: number; profesion: string };
type NombreTypei = Persona["nombre"]; // string
type EdadTypei = Persona["edad"]; // number

// 2. Función genérica con acceso dinámico
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}
const personaWilderi: Persona = {
  nombre: "Wilder",
  edad: 30,
  profesion: "Desarrollador",
};
const nombreWilderi = obtenerPropiedad(persona, "nombre"); // string

// 3. Acceso a elementos de un array
type ArrayNumerosi = number[];
type ElementoDelArray = ArrayNumeros[number]; // number

// 4. Acceso a elementos de una tupla
type Tupla = [string, number, boolean];
type PrimerElemento = Tupla[0]; // string
type CualquierElemento = Tupla[number]; // string | number | boolean

// 5. Acceso a propiedades anidadas
type Empresai = {
  nombre: string;
  ubicacion: { ciudad: string; pais: string };
  empleados: number;
};
type UbicacionType = Empresa["ubicacion"]; // { ciudad: string, pais: string }
type CiudadType = Empresa["ubicacion"]["ciudad"]; // string

// 6. Combinar 'typeof' con acceso por índice
const otraPersonai = { nombre: "Ana", edad: 25, profesion: "Doctora" };
type OtraPersonaType = typeof otraPersona;
type EdadOtraPersona = OtraPersonaType["edad"]; // number
