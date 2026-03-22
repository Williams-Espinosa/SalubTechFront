import { useState, useEffect } from "react";
import DashboardLayout from "../../components/templates/DashboardLayout";
import { IcActivity, IcClip, IcSwap } from "../../components/atoms/Icons";
import { apiFetch } from "../../api/client";
import { API } from "../../api/config";
import { adaptPaciente, adaptTarea } from "../../api/adapters";
import { PATIENTS, TASKS_INIT } from "../../constants/mockData";

import DashboardHome    from "./DashboardHome";
import RegistrosPage    from "./RegistrosPage";
import EntregaTurnoPage from "./EntregaTurnoPage";

const NAV_ITEMS = [
  { id:"dashboard", label:"Dashboard",     icon: c => <IcActivity c={c}/> },
  { id:"registros", label:"Registros",     icon: c => <IcClip c={c} s={16}/> },
  { id:"entrega",   label:"Entrega Turno", icon: c => <IcSwap c={c} s={16}/> },
];

export default function EnfermeroApp({ onLogout, user }) {
  const [section,  setSection]  = useState("dashboard");
  const [patients, setPatients] = useState([]);
  const [tasks,    setTasks]    = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [rawPacs, rawTareas] = await Promise.all([
          apiFetch(API.PACIENTES.LIST),
          apiFetch(API.TAREAS.LIST),
        ]);
        const pacs   = Array.isArray(rawPacs)   ? rawPacs.map(adaptPaciente)   : PATIENTS;
        const tareas = Array.isArray(rawTareas)  ? rawTareas.map(adaptTarea)   : TASKS_INIT;
        setPatients(pacs);
        setTasks(tareas);
        setSelectedPatientId(pacs[0]?.id ?? null);
      } catch (e) {
        console.warn("Usando datos mock:", e.message);
        setPatients(PATIENTS);
        setTasks(TASKS_INIT);
        setSelectedPatientId(PATIENTS[0]?.id ?? 1);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const toggleTask = async (id) => {
    // Optimistic UI
    setTasks(p => p.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
    try {
      await apiFetch(API.TAREAS.TOGGLE_ESTADO.replace(":id", id), { method: "PATCH" });
    } catch (e) {
      console.warn("Toggle tarea:", e.message);
      setTasks(p => p.map(t => t.id === id ? { ...t, done: !t.done } : t));
    }
  };

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
        userName={user?.nombre_completo || "Enfermero"}
        userRole="Enfermero"
        searchPlaceholder="Buscar paciente..."
      >
        {section === "dashboard" && (
          <DashboardHome
            tasks={tasks}
            patients={patients}
            loading={loading}
            onToggleTask={toggleTask}
            onAtender={handleAtender}
          />
        )}
        {section === "registros" && (
          <RegistrosPage
            patients={patients}
            initialPatientId={selectedPatientId}
          />
        )}
        {section === "entrega" && <EntregaTurnoPage onLogout={onLogout}/>}
      </DashboardLayout>
    </div>
  );
}
