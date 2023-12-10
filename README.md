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