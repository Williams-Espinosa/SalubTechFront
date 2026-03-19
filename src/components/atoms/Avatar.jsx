// atoms/Avatar.jsx

/**
 * Avatar atom — muestra iniciales sobre fondo de color.
 * @param {string} name   - nombre completo (se extraen iniciales)
 * @param {number} size   - tamaño en px (default 36)
 * @param {string} bg     - color de fondo (default var(--blue))
 */
export default function Avatar({ name = "", size = 36, bg = "var(--blue)", style = {} }) {
  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Syne',sans-serif", fontSize: size * 0.38,
      fontWeight: 700, color: "#fff", flexShrink: 0, ...style,
    }}>
      {initials || "?"}
    </div>
  );
}
