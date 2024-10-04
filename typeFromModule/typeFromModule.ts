// Importando tipos con 'import type'
import type { Usuario, Producto } from "./types";

const usuario: Usuario = {
  nombre: "Wilder",
  edad: 30,
};

const producto: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
};

// Alias de tipos importados
import { Usuario as UsuarioSistema } from "./types";
const otroUsuario: UsuarioSistema = {
  nombre: "Ana",
  edad: 25,
};
