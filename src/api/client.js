import { API } from "./config";

/**
 * @param {string} endpoint  - Ruta relativa, ej. API.RH.PERSONAL
 * @param {object} options   - Opciones nativas de fetch (method, body, headers…)
 * @returns {Promise<any>}   - JSON parseado o blob si options.blob=true
 */
export async function apiFetch(endpoint, options = {}) {
  const { blob: asBlob, ...fetchOptions } = options;
  const token = localStorage.getItem("st_token");

  const res = await fetch(`${API.BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  });

  if (!res.ok) throw new Error(`API ${res.status}: ${endpoint}`);
  return asBlob ? res.blob() : res.json();
}
