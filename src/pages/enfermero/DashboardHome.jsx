// pages/enfermero/DashboardHome.jsx
import { useTimer } from "../../hooks/useTimer";
import PatientCard from "../../components/molecules/PatientCard";
import TaskItem    from "../../components/molecules/TaskItem";
import { IcUsers, IcClip, IcClock, IcPlus } from "../../components/atoms/Icons";
import { PATIENTS } from "../../constants/mockData";

export default function DashboardHome({ tasks, onToggleTask, onAtender }) {
  const timer = useTimer();

  return (
    <div style={{ padding:32, animation:"fadeUp .4s .05s ease both" }}>
      {/* Header row */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:28, background:"#fff", borderRadius:"var(--radius)", padding:"28px 32px", boxShadow:"var(--shadow-sm)" }}>
        <div>
          <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:24, fontWeight:800 }}>Resumen del Turno</div>
          <div style={{ fontSize:13, color:"var(--text-mid)", marginTop:4 }}>Matutino • Miércoles 28 Ene, 2026</div>
        </div>
        <div style={{ display:"flex", gap:32, alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:44, height:44, borderRadius:12, background:"#FFF3EB", display:"flex", alignItems:"center", justifyContent:"center" }}><IcClock/></div>
            <div>
              <div style={{ fontSize:10, fontWeight:600, letterSpacing:1, textTransform:"uppercase", color:"var(--text-soft)" }}>Tiempo Restante</div>
              <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:22, fontWeight:800, fontVariantNumeric:"tabular-nums", letterSpacing:1 }}>{timer}</div>
            </div>
          </div>
          <div style={{ width:1, background:"var(--border)", margin:"0 8px" }}/>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:44, height:44, borderRadius:12, background:"var(--blue-light)", display:"flex", alignItems:"center", justifyContent:"center" }}><IcUsers c="var(--blue)"/></div>
            <div>
              <div style={{ fontSize:10, fontWeight:600, letterSpacing:1, textTransform:"uppercase", color:"var(--text-soft)" }}>Pacientes</div>
              <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:22, fontWeight:800 }}>{PATIENTS.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:24 }}>
        {/* Patients */}
        <div>
          <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:16, fontWeight:700, display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            <IcUsers c="var(--text-dark)" s={16}/> Pacientes Asignados
            <span style={{ fontSize:13, color:"var(--blue)", fontWeight:500, marginLeft:"auto", cursor:"pointer" }}>Ver todos</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {PATIENTS.map(p => <PatientCard key={p.id} patient={p} onAtender={onAtender}/>)}
          </div>
        </div>

        {/* Tasks */}
        <div>
          <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:16, fontWeight:700, display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            <IcClip c="var(--text-dark)" s={16}/> Tareas Pendientes
            <span style={{ marginLeft:"auto", background:"var(--blue-light)", color:"var(--blue)", fontSize:12, fontWeight:700, padding:"3px 8px", borderRadius:20 }}>
              {tasks.filter(t => !t.done).length}
            </span>
          </div>
          <div style={{ background:"#fff", borderRadius:"var(--radius-sm)", padding:20, boxShadow:"var(--shadow-sm)" }}>
            {tasks.map(t => <TaskItem key={t.id} task={t} onToggle={onToggleTask}/>)}
            <button style={{ display:"flex", alignItems:"center", gap:6, color:"var(--text-soft)", fontSize:13, cursor:"pointer", border:"none", background:"transparent", padding:"12px 0 0", width:"100%" }}>
              <IcPlus/> Añadir tarea rápida
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
