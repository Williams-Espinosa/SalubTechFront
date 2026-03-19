// constants/exportFiles.js
// ─────────────────────────────────────────────────────────────────────────────
// Estos valores los genera el script build/generateExports.js
// Para conectar al backend real, elimina estas constantes y usa:
//   apiFetch(API.RH.EXPORT_XLS, { blob: true })
//   apiFetch(API.RH.EXPORT_PDF, { blob: true })
// en RhRegistros.jsx y RhAuditoria.jsx respectivamente.
// ─────────────────────────────────────────────────────────────────────────────

// Reemplaza con la salida del script generateExports.js
export const XLSX_B64 = ""; // ← pegar base64 del .xlsx
export const PDF_B64  = ""; // ← pegar base64 del .pdf
