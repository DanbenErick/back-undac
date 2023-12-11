# dash-admin-undac


## Endpoint: `POST /api/administrador/registrar-voucher`

**Descripción**
Este endpoint se utiliza para registrar un voucher en el sistema.

**Datos de Entrada**
- `proceso` (string): Número del proceso al que se asocia el voucher.
- `fecha_reg` (string): Fecha de registro del voucher.
- `dni` (string): Número de DNI asociado al voucher.
- `nombre` (string): Nombre del titular del voucher.
- `monto` (string): Monto del voucher.
- `codigo` (string): Código único del voucher.
- `idusu` (string): ID del usuario asociado al voucher.
- `signup` (string): Campo adicional para el registro.

**Ejemplo de Solicitud**
```json
{
   "proceso": "12", 
   "fecha_reg": "12", 
   "dni": "73027833", 
   "nombre": "12", 
   "monto": "12", 
   "codigo": "12", 
   "idusu": "12",
   "signup": "12"
}
```
## Endpoint: `POST /api/administrador/crear-proceso`

**Descripción**
Este endpoint se utiliza para crear un nuevo proceso en el sistema.

**Datos de Entrada**
- `nombre` (string): Nombre del nuevo proceso.
- `estado` (string): Estado del nuevo proceso (puede ser "abierto", "cerrado", etc.).
- `fecha` (string): Fecha de inicio del nuevo proceso.

**Ejemplo de Solicitud**
```json
{
  "nombre": "ORDINARIO X",
  "estado": "abierto",
  "fecha": "10/12/2023"
}
```

## Registro de Datos del Postulante

Registra los datos de un estudiante postulante.

- **URL:** `localhost:8000/api/estudiantes/registrar-datos-postulante`
- **Método:** `POST`
- **Requiere Autenticación:** No

### Parámetros de la Solicitud

| Campo            | Tipo      | Descripción                                       |
|------------------|-----------|---------------------------------------------------|
| `dni`            | String    | Número de DNI del estudiante.                     |
| `sexo`           | String    | Género del estudiante (`MASCULINO` o `FEMENINO`). |
| `nac`            | Date      | Fecha de nacimiento del estudiante (formato: YYYY-MM-DD). |
| `Departamento`   | String    | Departamento de nacimiento del estudiante.        |
| `Provincia`      | String    | Provincia de nacimiento del estudiante.           |
| `Distrito`       | String    | Distrito de nacimiento del estudiante.            |
| `direccionActual`| String    | Dirección actual del estudiante.                  |
| `dis`            | String    | ¿Tiene discapacidad? (`SI` o `NO`).               |
| `tipodis`        | String    | Tipo de discapacidad (opcional).                  |
| `etnica`         | String    | Grupo étnico al que pertenece el estudiante.     |
| `celular`        | String    | Número de celular del estudiante.                 |
| `fono`           | String    | Número de teléfono del estudiante.                |
| `logo`           | String    | Nombre del archivo de la foto del estudiante.    |
| `colegio`        | String    | Nombre del colegio del estudiante.                |
| `fecha_reg`      | Date      | Fecha de registro (formato: YYYY-MM-DD).          |
| `tipo_colegio`   | String    | Tipo de colegio (`PUBLICA` o `PRIVADA`).          |

### Ejemplo de Solicitud

```json
{
  "dni": "78787878",
  "sexo": "MASCULINO",
  "nac": "2023-12-14",
  "Departamento": "Amazonas",
  "Provincia": "Chachapoyas",
  "Distrito": "Granada",
  "direccionActual": "Av bolivar mz a1 lote 30",
  "dis": "SI",
  "tipodis":"a",
  "etnica": "AYMARA",
  "celular": "952354116",
  "fono": "930617118",
  "logo": "pergil.png",
  "colegio": "IE TICLACAYAN",
  "fecha_reg": "2023-12-14",
  "tipo_colegio": "PRIVADA"
}
