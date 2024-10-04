// 1. Obtener las claves de un objeto simple
type Persona = {
  nombre: string;
  edad: number;
  profesion: string;
};

type PersonaKeys = keyof Persona; // "nombre" | "edad" | "profesion"

// 2. Función genérica que obtiene propiedades de manera segura usando 'keyof'
function obtenerPropiedadk<T, K extends keyof T>(objeto: T, clave: K): T[K] {
  return objeto[clave];
}

const personaWilder: Persona = {
  nombre: "Wilder",
  edad: 30,
  profesion: "Desarrollador",
};
const nombreWilder = obtenerPropiedadk(personaWilder, "nombre"); // nombre es string
const edadWilder = obtenerPropiedadk(personaWilder, "edad"); // edad es number

// 3. Uso de 'keyof' en objetos anidados
type Empresa = {
  nombre: string;
  ubicacion: {
    ciudad: string;
    pais: string;
  };
  empleados: number;
};

type EmpresaKeys = keyof Empresa; // "nombre" | "ubicacion" | "empleados"

// 4. Uso de 'keyof' con tipos indexados (arrays y objetos)
type ArrayNumeros = number[];
type ArrayKeys = keyof ArrayNumeros; // "length" | "push" | "pop" | ...

type ObjetoIndexado = { [key: string]: number };
type ObjetoIndexadoKeys = keyof ObjetoIndexado; // "string"

// 5. Combinar 'keyof' con 'typeof'
const otraPersona = { nombre: "Ana", edad: 25, profesion: "Ingeniera" };
type OtraPersonaKeys = keyof typeof otraPersona; // "nombre" | "edad" | "profesion"
