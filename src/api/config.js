export const API = {
  BASE_URL: "https://api.tudominio.com",

  AUTH: {
    LOGIN:         "/api/auth/login",    
    LOGOUT:        "/api/auth/logout",     
    REFRESH_TOKEN: "/api/auth/refresh",    
  },

  ENFERMERO: {
    PACIENTES:     "/api/enfermero/pacientes",           
    TAREAS:        "/api/enfermero/tareas",              
    TAREA_TOGGLE:  "/api/enfermero/tareas/:id/toggle", 
    REGISTROS:     "/api/enfermero/registros",          
    ENTREGA_TURNO: "/api/enfermero/entrega-turno",    
  },

  SUPERVISOR: {
    DASHBOARD:      "/api/supervisor/dashboard",            
    PERSONAL_TURNO: "/api/supervisor/personal",           
    REPORTES:       "/api/supervisor/reportes",             
    REPORTE_DETAIL: "/api/supervisor/reportes/:id",       
    VALIDAR:        "/api/supervisor/reportes/:id/validar",
    PACIENTES:      "/api/supervisor/pacientes",          
    ENTREGA_TURNO:  "/api/supervisor/entrega-turno",      
  },

  RH: {
    DASHBOARD:       "/api/rh/dashboard",               
    PERSONAL:        "/api/rh/personal",                 
    PERSONAL_CREATE: "/api/rh/personal",                
    PERSONAL_UPDATE: "/api/rh/personal/:id",            
    AUDITORIA_INC:   "/api/rh/auditoria/incidentes",   
    AUDITORIA_PAC:   "/api/rh/auditoria/pacientes",   
    BITACORA:        "/api/rh/bitacora",                 
    ENTREGA_TURNO:   "/api/rh/entrega-turno",          
    ENTREGA_CREATE:  "/api/rh/entrega-turno",           
    EXPORT_XLS:      "/api/rh/exportar/xls",           
    EXPORT_PDF:      "/api/rh/exportar/pdf",            
  },
};
