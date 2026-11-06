# Lista de Espera TR

App web (PWA) para consultar la lista de espera de trasplante renal con donador fallecido desde celular, iPad o computadora.

- **La app** (este código) vive en GitHub Pages. No contiene datos de pacientes.
- **Los datos** viven en Firebase (Firestore), protegidos con inicio de sesión de Google y reglas de acceso (`firestore.rules`).
- Funciona con mala señal: guarda en el dispositivo y sincroniza al volver la conexión.

> ⚠️ Nunca subas a este repositorio archivos con datos de pacientes (`pacientes*.json`, respaldos, CSV). El repositorio es público.

## Instalar como app

- **iPhone / iPad:** abre la dirección en **Safari** → Compartir → **Agregar a inicio**.
- **Android:** en Chrome → menú ⋮ → **Instalar app**.

## Pestañas

| Pestaña | Para qué |
|---|---|
| **Elegibles** | Pacientes con estatus COMPLETO, por grupo, con botón para llamar. Avisa si alguno tiene estudios caducados. |
| **Lista** | Buscador (nombre, NSS, teléfono) y filtros por grupo, estatus y alerta. |
| **Resumen** | Conteos por grupo y estatus; estudios que vencen en 30 días. |
| **Cambios** | Quién modificó qué y cuándo. No se puede borrar. |
| **Ajustes** | (Solo administrador) accesos, importar, respaldo en Excel/JSON. |

- **Protocolo** se calcula solo: Cardiología, ECOTT, Serologías, PPD y Otorrino caducan a los 6 meses. Para cambiar la vigencia, edita `ESTUDIOS` en `index.html`.
- **Bajas**: usar INACTIVO DEFINITIVO en lugar de eliminar.
