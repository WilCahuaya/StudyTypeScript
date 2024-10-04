// Ejemplo de tipo base
type Usuario = {
  nombre: string;
  edad: number;
};

// Mapped Type 1: Hace que todas las propiedades sean opcionales
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

type UsuarioOpcional = Opcional<Usuario>;
// Resultado: { nombre?: string; edad?: number; }

// Mapped Type 2: Hace que todas las propiedades sean readonly
type SoloLectura<T> = {
  readonly [P in keyof T]: T[P];
};

type UsuarioSoloLectura = SoloLectura<Usuario>;
// Resultado: { readonly nombre: string; readonly edad: number; }

// Mapped Type 3: Convierte todas las propiedades a 'string'
type TodasString<T> = {
  [P in keyof T]: string;
};

type UsuarioConStrings = TodasString<Usuario>;
// Resultado: { nombre: string; edad: string; }

// Mapped Type 4: Remueve 'null' de todas las propiedades
type RemoverNull<T> = {
  [P in keyof T]: Exclude<T[P], null>;
};

type UsuarioSinNull = RemoverNull<{
  nombre: string | null;
  edad: number | null;
}>;
// Resultado: { nombre: string; edad: number; }

// Mapped Type 5: Combinación - Hace propiedades opcionales y readonly
type OpcionalReadonly<T> = {
  readonly [P in keyof T]?: T[P];
};

type UsuarioOpcionalReadonly = OpcionalReadonly<Usuario>;
// Resultado: { readonly nombre?: string; readonly edad?: number; }

// ------ Mapped Types ya listos en TypeScript ------

// 1. Partial<T>: Hace que todas las propiedades sean opcionales
type UsuarioParcial = Partial<Usuario>;
// Resultado: { nombre?: string; edad?: number; }

// 2. Required<T>: Hace que todas las propiedades sean requeridas
type UsuarioRequerido = Required<Usuario>;
// Resultado: { nombre: string; edad: number; }

// 3. Readonly<T>: Hace que todas las propiedades sean readonly
type UsuarioSoloLecturaTS = Readonly<Usuario>;
// Resultado: { readonly nombre: string; readonly edad: number; }

// 4. Record<K, T>: Crea un tipo con claves K y valores T
type Diccionario = Record<string, number>;
// Resultado: { [key: string]: number; }

// 5. Pick<T, K>: Crea un tipo con un subconjunto de propiedades
type NombreDeUsuario = Pick<Usuario, "nombre">;
// Resultado: { nombre: string; }

// 6. Omit<T, K>: Crea un tipo eliminando ciertas propiedades
type UsuarioSinEdad = Omit<Usuario, "edad">;
// Resultado: { nombre: string; }
