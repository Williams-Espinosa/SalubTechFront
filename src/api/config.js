// ══════════════════════════════════════════════════════════════════════════════
//  🔌 API CONFIG — Ajusta BASE_URL con la IP/dominio donde corre el backend
// ══════════════════════════════════════════════════════════════════════════════

export const API = {
  // ── Cambia esto por la URL de tu servidor Express ─────────────────────────
  // Desarrollo local:  "http://localhost:3000"
  // Si el backend usa otro puerto (e.g. 4000): "http://localhost:4000"
  BASE_URL: "http://localhost:3000",

  // ── Auth ────────────────────────────────────────────────────────────────
  // POST /api/v1/auth/login       body: { email, password }
  // POST /api/v1/auth/register    body: { nombre_completo, email, password, telefono, rol, curp, turno_asignado }
  // POST /api/v1/auth/firebase    body: { idToken }
  AUTH: {
    LOGIN:    "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    FIREBASE: "/api/v1/auth/firebase",
  },

  // ── Usuarios (requiere rol Supervisor) ──────────────────────────────────
  // GET    /api/v1/usuarios
  // GET    /api/v1/usuarios/:id
  // PUT    /api/v1/usuarios/:id   body: { nombre_completo, email, rol, turno_asignado, activo, ... }
  // DELETE /api/v1/usuarios/:id
  USUARIOS: {
    LIST:   "/api/v1/usuarios",
    BY_ID:  "/api/v1/usuarios/:id",
    UPDATE: "/api/v1/usuarios/:id",
    DELETE: "/api/v1/usuarios/:id",
    TURNOS: "/api/v1/usuarios/:id/turnos",
  },

  // ── Pacientes ────────────────────────────────────────────────────────────
  // GET    /api/v1/pacientes
  // GET    /api/v1/pacientes/:id
  // POST   /api/v1/pacientes       body: { nombre_completo, fecha_nacimiento, diagnostico, ... }
  // PUT    /api/v1/pacientes/:id
  // DELETE /api/v1/pacientes/:id   (requiere Supervisor)
  // GET    /api/v1/pacientes/:id/handoff?horas=12
  PACIENTES: {
    LIST:    "/api/v1/pacientes",
    BY_ID:   "/api/v1/pacientes/:id",
    CREATE:  "/api/v1/pacientes",
    UPDATE:  "/api/v1/pacientes/:id",
    DELETE:  "/api/v1/pacientes/:id",
    HANDOFF: "/api/v1/pacientes/:id/handoff",  // ?horas=N (default 12)
  },

  // ── Notas / Registros ────────────────────────────────────────────────────
  // GET  /api/v1/notas
  // GET  /api/v1/notas/:id
  // POST /api/v1/notas   body: { id_paciente, tipo_nota, urgencia, descripcion }
  NOTAS: {
    LIST:   "/api/v1/notas",
    BY_ID:  "/api/v1/notas/:id",
    CREATE: "/api/v1/notas",
  },

  // ── Tareas ───────────────────────────────────────────────────────────────
  // GET    /api/v1/tareas?estado=pendiente|completada
  // GET    /api/v1/tareas/:id
  // POST   /api/v1/tareas   body: { id_paciente, descripcion, hora_programada, categoria }
  // PATCH  /api/v1/tareas/:id/estado   body: { estado } (opcional — sin body hace toggle)
  // DELETE /api/v1/tareas/:id
  TAREAS: {
    LIST:          "/api/v1/tareas",            // ?estado=pendiente|completada
    BY_ID:         "/api/v1/tareas/:id",
    CREATE:        "/api/v1/tareas",
    TOGGLE_ESTADO: "/api/v1/tareas/:id/estado", // PATCH — body vacío = toggle
    DELETE:        "/api/v1/tareas/:id",
  },

  // ── Turnos ───────────────────────────────────────────────────────────────
  // GET   /api/v1/turnos
  // POST  /api/v1/turnos/iniciar       (usa id_usuario del JWT)
  // PATCH /api/v1/turnos/:id/finalizar
  TURNOS: {
    LIST:      "/api/v1/turnos",
    INICIAR:   "/api/v1/turnos/iniciar",
    FINALIZAR: "/api/v1/turnos/:id/finalizar",
  },

  // ── Habitaciones ─────────────────────────────────────────────────────────
  // GET    /api/v1/habitaciones
  // GET    /api/v1/habitaciones/:id
  // POST   /api/v1/habitaciones        (Supervisor)
  // PUT    /api/v1/habitaciones/:id    (Supervisor)
  // PATCH  /api/v1/habitaciones/:id/estado
  // GET    /api/v1/habitaciones/:id/pacientes
  HABITACIONES: {
    LIST:          "/api/v1/habitaciones",
    BY_ID:         "/api/v1/habitaciones/:id",
    CREATE:        "/api/v1/habitaciones",
    UPDATE:        "/api/v1/habitaciones/:id",
    UPDATE_ESTADO: "/api/v1/habitaciones/:id/estado",
    PACIENTES:     "/api/v1/habitaciones/:id/pacientes",
  },

  // ── RH ───────────────────────────────────────────────────────────────────
  // GET /api/v1/rh/exportar/xls          → descarga .xlsx (blob)
  // GET /api/v1/rh/exportar/pdf          → descarga .pdf  (blob)
  // GET /api/v1/rh/auditoria/incidentes  → lista de notas como incidentes
  RH: {
    EXPORT_XLS:   "/api/v1/rh/exportar/xls",
    EXPORT_PDF:   "/api/v1/rh/exportar/pdf",
    AUDITORIA_INC:"/api/v1/rh/auditoria/incidentes",
  },
};
