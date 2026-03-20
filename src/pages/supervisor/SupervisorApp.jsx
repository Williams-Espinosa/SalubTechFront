import { useState } from "react";
import DashboardLayout from "../../components/templates/DashboardLayout";
import { IcActivity, IcClip, IcDoc, IcSwap } from "../../components/atoms/Icons";

import SupDashHome       from "./SupDashHome";
import ValidarGuardia    from "./ValidarGuardia";
import SupRegistros      from "./SupRegistros";
import SupEntregaTurno   from "./SupEntregaTurno";

const NAV_ITEMS = [
  { id:"dashboard", label:"Dashboard",      icon: c => <IcActivity c={c}/> },
  { id:"validar",   label:"Validar Guardia",icon: c => <IcClip c={c} s={16}/> },
  { id:"registros", label:"Registros",      icon: c => <IcDoc c={c} s={16}/> },
  { id:"entrega",   label:"Entrega Turno",  icon: c => <IcSwap c={c} s={16}/> },
];

export default function SupervisorApp({ onLogout }) {
  const [section, setSection] = useState("dashboard");
  return (
    <div className="page">
      <DashboardLayout
        navItems={NAV_ITEMS}
        activeSection={section}
        onSectionChange={setSection}
        onLogout={onLogout}
        userName="Jose Luis"
        userRole="Médico / Supervisor"
        searchPlaceholder="Buscar paciente..."
      >
        {section === "dashboard" && <SupDashHome/>}
        {section === "validar"   && <ValidarGuardia/>}
        {section === "registros" && <SupRegistros/>}
        {section === "entrega"   && <SupEntregaTurno onLogout={onLogout}/>}
      </DashboardLayout>
    </div>
  );
}
