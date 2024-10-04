// Ejemplo básico
function sumar(a: number, b: number): number {
  return a + b;
}
type SumarRetorno = ReturnType<typeof sumar>; // number

// Función anónima
const obtenerMensaje = (nombre: string) => `Hola, ${nombre}`;
type MensajeRetorno = ReturnType<typeof obtenerMensaje>; // string

// Función que devuelve un objeto
function crearUsuario(nombre: string, edad: number) {
  return { nombre, edad, activo: true };
}
type UsuarioRetorno = ReturnType<typeof crearUsuario>;
// { nombre: string; edad: number; activo: boolean }

// Función con múltiples sobrecargas
function obtenerDatos(id: number): { id: number; nombre: string } | null {
  if (id > 0) {
    return { id, nombre: "Producto A" };
  }
  return null;
}
type DatosRetorno = ReturnType<typeof obtenerDatos>;
// { id: number; nombre: string } | null

// Función flecha
const multiplicar = (a: number, b: number): number => a * b;
type MultiplicarRetorno = ReturnType<typeof multiplicar>; // number
