// ══════════════════════════════════════════════════════════════════════════════
//  🔌 API CONFIG — Sustituye BASE_URL y rutas por las de tu backend
// ══════════════════════════════════════════════════════════════════════════════

export const API = {
  BASE_URL: "https://api.tudominio.com", // ← cambia esto

  // ── Auth ────────────────────────────────────────────────────────────────
  AUTH: {
    LOGIN:         "/api/auth/login",      // POST  { empleadoId, password, role }
    LOGOUT:        "/api/auth/logout",     // POST  {}
    REFRESH_TOKEN: "/api/auth/refresh",    // POST  { refreshToken }
  },

  // ── Enfermero ───────────────────────────────────────────────────────────
  ENFERMERO: {
    PACIENTES:     "/api/enfermero/pacientes",           // GET
    TAREAS:        "/api/enfermero/tareas",              // GET
    TAREA_TOGGLE:  "/api/enfermero/tareas/:id/toggle",  // PATCH { done }
    REGISTROS:     "/api/enfermero/registros",           // POST  { pacienteId, tipo, urgencia, descripcion }
    ENTREGA_TURNO: "/api/enfermero/entrega-turno",      // POST  { checklist[], observaciones, receptor, pin }
  },

  // ── Supervisor ──────────────────────────────────────────────────────────
  SUPERVISOR: {
    DASHBOARD:      "/api/supervisor/dashboard",            // GET
    PERSONAL_TURNO: "/api/supervisor/personal",             // GET
    REPORTES:       "/api/supervisor/reportes",             // GET
    REPORTE_DETAIL: "/api/supervisor/reportes/:id",         // GET
    VALIDAR:        "/api/supervisor/reportes/:id/validar", // POST { supervisor, firma }
    PACIENTES:      "/api/supervisor/pacientes",            // GET
    ENTREGA_TURNO:  "/api/supervisor/entrega-turno",       // POST { resumen, notas, pendientes }
  },

  // ── RH ──────────────────────────────────────────────────────────────────
  RH: {
    DASHBOARD:       "/api/rh/dashboard",                // GET
    PERSONAL:        "/api/rh/personal",                 // GET
    PERSONAL_CREATE: "/api/rh/personal",                 // POST  { nombre, curp, rol, turno }
    PERSONAL_UPDATE: "/api/rh/personal/:id",             // PUT   { nombre, curp, rol, turno, activo }
    AUDITORIA_INC:   "/api/rh/auditoria/incidentes",    // GET   ?severidad=leve|moderado|grave
    AUDITORIA_PAC:   "/api/rh/auditoria/pacientes",     // GET
    BITACORA:        "/api/rh/bitacora",                 // GET
    ENTREGA_TURNO:   "/api/rh/entrega-turno",           // GET
    ENTREGA_CREATE:  "/api/rh/entrega-turno",           // POST  { responsableEntrante, observaciones, checklist[] }
    EXPORT_XLS:      "/api/rh/exportar/xls",            // GET   → blob .xlsx
    EXPORT_PDF:      "/api/rh/exportar/pdf",            // GET   → blob .pdf
  },
};
