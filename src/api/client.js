import { API } from "./config";

// Token guardado tras login
export const getToken  = ()        => localStorage.getItem("st_token");
export const setToken  = (token)   => localStorage.setItem("st_token", token);
export const clearToken = ()       => localStorage.removeItem("st_token");

/**
 * Helper genérico autenticado.
 *
 * @param {string} endpoint  - Ruta de API.XX.XX (ya resuelta con .replace si lleva :id)
 * @param {object} options   - Opciones fetch: method, body, headers, blob
 *
 * Ejemplos:
 *   apiFetch(API.PACIENTES.LIST)
 *   apiFetch(API.AUTH.LOGIN, { method:"POST", body: JSON.stringify({email,password}) })
 *   apiFetch(API.TAREAS.TOGGLE_ESTADO.replace(":id", id), { method:"PATCH" })
 *   apiFetch(API.RH.EXPORT_XLS, { blob: true })
 */
export async function apiFetch(endpoint, options = {}) {
  const { blob: asBlob, ...fetchOptions } = options;
  const token = getToken();

  const res = await fetch(`${API.BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  });

  if (!res.ok) {
    // Intenta parsear el mensaje de error del backend
    let errMsg = `Error ${res.status}`;
    try { const data = await res.json(); errMsg = data.message || errMsg; } catch {}
    const err = new Error(errMsg);
    err.status = res.status;
    throw err;
  }

  return asBlob ? res.blob() : res.json();
}
