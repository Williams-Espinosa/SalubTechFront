import { useState } from "react";
import DashboardLayout from "../../components/templates/DashboardLayout";
import { IcUser, IcClip, IcActivity, IcDoc, IcSwap } from "../../components/atoms/Icons";

import RhPersonal    from "./RhPersonal";
import RhAuditoria   from "./RhAuditoria";
import RhDashHome    from "./RhDashHome";
import RhRegistros   from "./RhRegistros";
import RhEntregaTurno from "./RhEntregaTurno";

const NAV_SECTIONS = [
  {
    label: "GESTIÓN HUMANA",
    items: [
      { id:"personal",  label:"Personal",  icon: c => <IcUser c={c} s={16}/> },
      { id:"auditoria", label:"Auditoría", icon: c => <IcClip c={c} s={16}/> },
    ],
  },
  {
    label: "SISTEMA",
    items: [
      { id:"dashboard", label:"Dashboard",     icon: c => <IcActivity c={c}/> },
      { id:"registros", label:"Registros",     icon: c => <IcDoc c={c} s={16}/> },
      { id:"entrega",   label:"Entrega Turno", icon: c => <IcSwap c={c} s={16}/> },
    ],
  },
];

export default function RhApp({ onLogout }) {
  const [section, setSection] = useState("personal");
  return (
    <div className="page">
      <DashboardLayout
        navSections={NAV_SECTIONS}
        activeSection={section}
        onSectionChange={setSection}
        onLogout={onLogout}
        userName="Admin Intranet"
        userRole="Recursos Humanos"
        searchPlaceholder="Buscar paciente o registro..."
      >
        {section === "personal"  && <RhPersonal/>}
        {section === "auditoria" && <RhAuditoria/>}
        {section === "dashboard" && <RhDashHome/>}
        {section === "registros" && <RhRegistros/>}
        {section === "entrega"   && <RhEntregaTurno/>}
      </DashboardLayout>
    </div>
  );
}
