import { IcDoc, IcClock } from "../../components/atoms/Icons";
import { BIT_LOGS } from "../../constants/mockData";
import { XLSX_B64, PDF_B64 } from "../../constants/exportFiles";

function downloadFile(b64, filename, mime) {
  const link = document.createElement("a");
  link.href  = `data:${mime};base64,${b64}`;
  link.download = filename;
  link.click();
}

export default function RhRegistros() {
  return (
    <div style={{ padding:32, animation:"fadeUp .4s .05s ease both" }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:8 }}>
        <div>
          <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:20, fontWeight:800 }}>Bitácora de Sistema</div>
          <div style={{ fontSize:13, color:"var(--text-mid)", marginTop:4 }}>Registros generales de acceso y modificaciones técnicas.</div>
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:6, background:"#fff", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", padding:"8px 14px", fontSize:13, fontWeight:600 }}>
            <IcClock c="var(--text-mid)" s={14}/> Hoy, 29 Ene 2026
          </div>
          <button
            onClick={() => downloadFile(XLSX_B64, "saludtech_bitacora.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")}
            style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 18px", borderRadius:"var(--radius-sm)", background:"var(--text-dark)", color:"#fff", border:"none", fontSize:13, fontWeight:700, cursor:"pointer" }}
          >
            <IcDoc c="white" s={14}/> Exportar XLS
          </button>
        </div>
      </div>

      <div style={{ display:"flex", gap:10, marginBottom:20, marginTop:16 }}>
        <select style={{ padding:"8px 16px", borderRadius:"var(--radius-sm)", border:"1.5px solid var(--border)", background:"#fff", fontSize:13, fontFamily:"'DM Sans',sans-serif", outline:"none", color:"var(--text-dark)" }}>
          <option>TIPO:</option><option>Login</option><option>Error</option>
        </select>
        <select style={{ padding:"8px 16px", borderRadius:"var(--radius-sm)", border:"1.5px solid var(--border)", background:"#fff", fontSize:13, fontFamily:"'DM Sans',sans-serif", outline:"none", color:"var(--text-dark)" }}>
          <option>SERVIDOR:</option><option>HT-MAIN</option><option>HT-SERVICE-GATE</option>
        </select>
        <span style={{ marginLeft:"auto", display:"inline-block", padding:"3px 9px", borderRadius:6, fontSize:10, fontWeight:700, background:"var(--green-light)", color:"var(--green)" }}>Sistema Operativo</span>
      </div>

      <div style={{ background:"#fff", borderRadius:"var(--radius-sm)", boxShadow:"var(--shadow-sm)", overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead><tr style={{ background:"#FAFBFC" }}>
            {["Evento","Usuario / Módulo","Timestamp","Estado"].map(h => <th key={h} style={{ padding:"12px 16px", textAlign:"left", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"var(--text-soft)", borderBottom:"1px solid var(--border)" }}>{h}</th>)}
          </tr></thead>
          <tbody>
            {BIT_LOGS.map((l,i) => (
              <tr key={i}>
                <td style={{ padding:16, fontWeight:600, borderBottom:"1px solid var(--border)" }}>{l.event}</td>
                <td style={{ padding:16, color:"var(--text-mid)", borderBottom:"1px solid var(--border)" }}>{l.user}</td>
                <td style={{ padding:16, color:"var(--text-soft)", fontSize:12.5, borderBottom:"1px solid var(--border)" }}>{l.ts}</td>
                <td style={{ padding:16, borderBottom:"1px solid var(--border)" }}>
                  <span style={{ display:"inline-block", padding:"3px 8px", borderRadius:6, fontSize:10, fontWeight:800, letterSpacing:.6, textTransform:"uppercase", background:l.status==="success"?"var(--green-light)":"#FFF5F5", color:l.status==="success"?"var(--green)":"var(--red)" }}>
                    {l.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
