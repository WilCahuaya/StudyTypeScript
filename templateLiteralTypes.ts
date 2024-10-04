// Definición básica de Template Literal Type
type Nombre = "Wilder";
type Saludo = `Hola, ${Nombre}!`;
// Resultado: "Hola, Wilder!"

// Uso de unión de tipos en una plantilla literal
type Parte1 = "bajo";
type Parte2 = "mesa" | "caja";
type Combinacion = `${Parte1}-${Parte2}`;
// Resultado: "bajo-mesa" | "bajo-caja"

// Template Literal Type con múltiples uniones
type Prefijo = "grande" | "pequeño";
type Color = "rojo" | "azul";
type Descripcion = `${Prefijo}-${Color}`;
// Resultado: "grande-rojo" | "grande-azul" | "pequeño-rojo" | "pequeño-azul"

// Uso en una función genérica con restricciones de tipo
function agregarPrefijo<T extends string>(str: T): `${T}-id` {
  return `${str}-id` as `${T}-id`;
}

const nuevoId = agregarPrefijo("usuario");
// Resultado: nuevoId tiene el tipo "usuario-id"

// Uso de Template Literal Types para manejar eventos y estados
type Evento = "click" | "hover";
type Estado = "activo" | "inactivo";
type EventoConEstado = `${Evento}-${Estado}`;
// Resultado: "click-activo" | "click-inactivo" | "hover-activo" | "hover-inactivo"

// Creación dinámica de claves de objetos
type PropiedadesBase = "tamaño" | "color";
type Variantes = "pequeño" | "grande";
type Propiedades = `${PropiedadesBase}-${Variantes}`;
// Resultado: "tamaño-pequeño" | "tamaño-grande" | "color-pequeño" | "color-grande"

// Uso combinado de Template Literal Type y genéricos
function crearClave<T extends string, U extends string>(
  parte1: T,
  parte2: U
): `${T}-${U}` {
  return `${parte1}-${parte2}` as `${T}-${U}`;
}

const clave = crearClave("producto", "123");
// Resultado: clave tiene el tipo "producto-123"

// Uso con restricciones estrictas, genera un error si no se pasa una cadena
// const claveInvalida = crearClave(123, "abc");
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Integración con Mapped Types
type PropiedadesMapeadas = {
  [K in `${Prefijo}-${Color}`]: boolean;
};

// Esto genera un tipo de objeto como:
// {
//   "grande-rojo": boolean;
//   "grande-azul": boolean;
//   "pequeño-rojo": boolean;
//   "pequeño-azul": boolean;
// }

const ejemploMapeado: PropiedadesMapeadas = {
  "grande-rojo": true,
  "grande-azul": false,
  "pequeño-rojo": true,
  "pequeño-azul": false,
};
