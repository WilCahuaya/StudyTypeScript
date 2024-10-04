// Tipo condicional básico
type EsString<T> = T extends string ? "Es un string" : "No es un string";

type Prueba1 = EsString<string>; // "Es un string"
type Prueba2 = EsString<number>; // "No es un string"

// Filtrar tipos
type FiltrarNumeros<T> = T extends number ? T : never;
type SoloNumeros = FiltrarNumeros<string | number | boolean>; // number

// Uso de 'infer' para obtener el tipo de retorno de una función
type RetornoDeFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

const ejemploFuncion = () => 42;
type TipoDeRetorno = RetornoDeFuncion<typeof ejemploFuncion>; // number

// Desempaquetar promesas
type DesempaquetarPromesa<T> = T extends Promise<infer U> ? U : T;
type Resultado1 = DesempaquetarPromesa<Promise<string>>; // string
type Resultado2 = DesempaquetarPromesa<number>; // number

// Anidar múltiples tipos condicionales
type TipoExtendido<T> = T extends string
  ? "Es un string"
  : T extends number
  ? "Es un número"
  : T extends boolean
  ? "Es un booleano"
  : "Tipo desconocido";

type Prueba3 = TipoExtendido<boolean>; // "Es un booleano"
type Prueba4 = TipoExtendido<null>; // "Tipo desconocido"
