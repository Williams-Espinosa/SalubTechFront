// pages/rh/RhPersonal.jsx
import { useState } from "react";
import Button  from "../../components/atoms/Button";
import Badge   from "../../components/atoms/Badge";
import Modal   from "../../components/molecules/Modal";
import { IcUser, IcPlus, IcSearch } from "../../components/atoms/Icons";
import { RH_STAFF } from "../../constants/mockData";

export default function RhPersonal() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ nombre:"", curp:"", rol:"", turno:"" });
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const inputStyle = { width:"100%", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", padding:"10px 13px", fontSize:14, fontFamily:"'DM Sans',sans-serif", color:"var(--text-dark)", outline:"none" };

  return (
    <div style={{ padding:32, animation:"fadeUp .4s .05s ease both" }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:24 }}>
        <div>
          <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:22, fontWeight:800 }}>Personal del Hospital</div>
          <div style={{ fontSize:13, color:"var(--text-mid)", marginTop:4 }}>Administra los roles, turnos y altas de todo el equipo médico.</div>
        </div>
        <Button onClick={() => setShowModal(true)}><IcPlus c="white" s={16}/> Registrar Empleado</Button>
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, background:"#fff", border:"1.5px solid var(--border)", borderRadius:"var(--radius-sm)", padding:"8px 14px", flex:1, maxWidth:400 }}>
          <IcSearch c="var(--text-soft)" s={14}/><input placeholder="Filtrar por nombre o CURP..." style={{ border:"none", outline:"none", background:"transparent", fontSize:13.5, fontFamily:"'DM Sans',sans-serif", flex:1 }}/>
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:"var(--radius-sm)", boxShadow:"var(--shadow-sm)", overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr style={{ background:"#FAFBFC" }}>
              {["Colaborador","Rol & Especialidad","Turno","Estado","Acciones"].map(h=>(
                <th key={h} style={{ padding:"12px 16px", textAlign:"left", fontSize:10, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:"var(--text-soft)", borderBottom:"1px solid var(--border)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RH_STAFF.map((s,i) => (
              <tr key={i}>
                <td style={{ padding:14, borderBottom:"1px solid var(--border)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:38, height:38, borderRadius:"50%", background:"var(--gray-bg)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><IcUser c="var(--text-soft)" s={16}/></div>
                    <div><div style={{ fontWeight:600, fontSize:14 }}>{s.name}</div><div style={{ fontSize:11, color:"var(--text-soft)", marginTop:1 }}>{s.id}</div></div>
                  </div>
                </td>
                <td style={{ padding:14, borderBottom:"1px solid var(--border)" }}>
                  <Badge variant={s.role}>{s.role.toUpperCase()}</Badge>
                  <div style={{ fontSize:13, color:"var(--text-mid)", marginTop:4 }}>{s.spec}</div>
                </td>
                <td style={{ padding:14, fontWeight:500, borderBottom:"1px solid var(--border)" }}>{s.turno}</td>
                <td style={{ padding:14, borderBottom:"1px solid var(--border)" }}><Badge variant={s.activo?"activo":"inactivo"}>{s.activo?"Activo":"Inactivo"}</Badge></td>
                <td style={{ padding:14, borderBottom:"1px solid var(--border)" }}>
                  <button style={{ padding:"6px 12px", borderRadius:8, fontSize:12, fontWeight:600, border:"1.5px solid var(--border)", background:"#fff", cursor:"pointer" }}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal title="Nuevo Colaborador" subtitle="Completa los datos del nuevo empleado." onClose={() => setShowModal(false)}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:24 }}>
            {[["nombre","Nombre"],["curp","CURP"],["rol","Rol"],["turno","Turno"]].map(([k,l]) => (
              <div key={k}>
                <label style={{ display:"block", fontSize:10, fontWeight:700, letterSpacing:1.2, textTransform:"uppercase", color:"var(--text-soft)", marginBottom:7 }}>{l}</label>
                <input style={inputStyle} value={form[k]} onChange={set(k)} placeholder={l}/>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:12, justifyContent:"flex-end" }}>
            <button style={{ padding:"11px 24px", borderRadius:"var(--radius-sm)", background:"#fff", border:"1.5px solid var(--border)", fontSize:14, fontWeight:500, cursor:"pointer" }} onClick={() => setShowModal(false)}>Cerrar</button>
            <Button onClick={() => setShowModal(false)}>Guardar</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
