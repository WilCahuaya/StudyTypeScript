// 1. Definición de un Tipo de Objeto
interface Persona {
  nombre: string;
  edad: number;
}

const wilder: Persona = {
  nombre: "Wilder",
  edad: 30,
};

// 2. Propiedades Opcionales
interface UsuarioO {
  nombre: string;
  edad?: number; // Propiedad opcional
}

const usuario1: UsuarioO = { nombre: "Anita" }; // Válido
const usuario2: UsuarioO = { nombre: "Wilder", edad: 30 }; // También válido

// 3. Propiedades de Solo Lectura
interface Vehiculo {
  readonly marca: string;
  modelo: string;
}

const vehiculo: Vehiculo = { marca: "Toyota", modelo: "Corolla" };
// vehiculo.marca = "Honda"; // Error: no se puede modificar
vehiculo.modelo = "Camry"; // Válido

// 4. Tipos de Índice
interface DiccionarioO {
  [clave: string]: string; // Todas las claves son strings y sus valores también
}

const diccionario: DiccionarioO = {
  hola: "Hello",
  adiós: "Goodbye",
};

console.log(diccionario["hola"]); // Hello

// 5. Tipos de Función como Propiedades
interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
}

const calculadora: Calculadora = {
  sumar: (x, y) => x + y,
  restar: (x, y) => x - y,
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2

// 6. Extensión de Interfaces
interface AnimalO {
  nombre: string;
  especie: string;
}

interface Mascota extends AnimalO {
  dueño: string;
}

const miMascota: Mascota = {
  nombre: "Rex",
  especie: "Perro",
  dueño: "Wilder",
};

// 7. Intersección de Tipos
type PersonaType = {
  nombre: string;
};

type EstudianteType = {
  matricula: number;
};

type EstudiantePersona = PersonaType & EstudianteType;

const estudiante: EstudiantePersona = {
  nombre: "Wilder",
  matricula: 12345,
};
