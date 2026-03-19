// pages/enfermero/EnfermeroApp.jsx
// Shell del dashboard de enfermero — gestiona sección activa y estado compartido.

import { useState } from "react";
import DashboardLayout from "../../components/templates/DashboardLayout";
import { IcActivity, IcClip, IcSwap } from "../../components/atoms/Icons";
import { PATIENTS, TASKS_INIT } from "../../constants/mockData";

// Secciones
import DashboardHome    from "./DashboardHome";
import RegistrosPage    from "./RegistrosPage";
import EntregaTurnoPage from "./EntregaTurnoPage";

const NAV_ITEMS = [
  { id:"dashboard", label:"Dashboard",     icon: c => <IcActivity c={c}/> },
  { id:"registros", label:"Registros",     icon: c => <IcClip c={c} s={16}/> },
  { id:"entrega",   label:"Entrega Turno", icon: c => <IcSwap c={c} s={16}/> },
];

export default function EnfermeroApp({ onLogout }) {
  const [section, setSection]                   = useState("dashboard");
  const [tasks, setTasks]                       = useState(TASKS_INIT);
  const [selectedPatientId, setSelectedPatientId] = useState(PATIENTS[0].id);

  const toggleTask = id => setTasks(p => p.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const handleAtender = patientId => {
    setSelectedPatientId(patientId);
    setSection("registros");
  };

  return (
    <div className="page">
      <DashboardLayout
        navItems={NAV_ITEMS}
        activeSection={section}
        onSectionChange={setSection}
        onLogout={onLogout}
        userName="JOSE JOSE"
        userRole="Enfermero"
        searchPlaceholder="Buscar paciente..."
      >
        {section === "dashboard" && (
          <DashboardHome tasks={tasks} onToggleTask={toggleTask} onAtender={handleAtender}/>
        )}
        {section === "registros" && (
          <RegistrosPage initialPatientId={selectedPatientId}/>
        )}
        {section === "entrega" && (
          <EntregaTurnoPage onLogout={onLogout}/>
        )}
      </DashboardLayout>
    </div>
  );
}
