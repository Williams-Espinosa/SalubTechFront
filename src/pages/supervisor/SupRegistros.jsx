// pages/supervisor/SupRegistros.jsx
import Badge  from "../../components/atoms/Badge";
import { IcUser, IcClock, IcFilter } from "../../components/atoms/Icons";
import { SUP_PATIENTS } from "../../constants/mockData";

export default function SupRegistros() {
  return (
    <div style={{ padding:32, animation:"fadeUp .4s .05s ease both" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24 }}>
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800 }}>Registros de Pacientes</div>
          <div style={{ fontSize:13, color:"var(--text-mid)", marginTop:4 }}>Historial completo y monitoreo de planta.</div>
        </div>
        <button style={{ display:"flex", alignItems:"center", gap:6, padding:"10px 18px", borderRadius:"var(--radius-sm)", background:"#fff", border:"1.5px solid var(--border)", fontSize:13, fontWeight:600, cursor:"pointer" }}>
          <IcFilter/> Filtrar
        </button>
      </div>
      <div style={{ background:"#fff", borderRadius:"var(--radius-sm)", boxShadow:"var(--shadow-sm)", overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr style={{ background:"#FAFBFC" }}>
              {["Paciente","Cama","Diagnóstico","Estado","Prioridad","Último Control"].map(h => (
                <th key={h} style={{ padding:"12px 16px", textAlign:"left", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"var(--text-soft)", borderBottom:"1px solid var(--border)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SUP_PATIENTS.map((p,i) => (
              <tr key={i} onMouseEnter={e=>e.currentTarget.querySelectorAll("td").forEach(td=>td.style.background="var(--gray-bg)")} onMouseLeave={e=>e.currentTarget.querySelectorAll("td").forEach(td=>td.style.background="")}>
                <td style={{ padding:16, borderBottom:"1px solid var(--border)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:32, height:32, borderRadius:"50%", background:"var(--gray-bg)", display:"flex", alignItems:"center", justifyContent:"center" }}><IcUser c="var(--text-soft)" s={14}/></div>
                    <div><div style={{ fontWeight:600 }}>{p.name}</div><div style={{ fontSize:12, color:"var(--text-soft)" }}>{p.age} años</div></div>
                  </div>
                </td>
                <td style={{ padding:16, fontWeight:600, borderBottom:"1px solid var(--border)" }}>{p.bed}</td>
                <td style={{ padding:16, color:"var(--text-mid)", borderBottom:"1px solid var(--border)" }}>{p.dx}</td>
                <td style={{ padding:16, borderBottom:"1px solid var(--border)" }}><Badge variant={p.status}>{p.statusLabel}</Badge></td>
                <td style={{ padding:16, fontWeight:600, color:p.priority==="Alta"?"var(--red)":p.priority==="Media"?"#D69E2E":"var(--text-mid)", borderBottom:"1px solid var(--border)" }}>{p.priority}</td>
                <td style={{ padding:16, color:"var(--text-soft)", display:"flex", alignItems:"center", gap:5, borderBottom:"1px solid var(--border)" }}><IcClock c="var(--text-soft)" s={13}/>{p.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderTop:"1px solid var(--border)", fontSize:12, color:"var(--text-soft)" }}>
          <span>Mostrando 5 de 128 pacientes</span>
          <div style={{ display:"flex", gap:8 }}>
            {["Anterior","Siguiente"].map(l=><button key={l} style={{ padding:"7px 16px", borderRadius:8, border:"1.5px solid var(--border)", background:"#fff", fontSize:13, fontWeight:500, cursor:"pointer" }}>{l}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}
