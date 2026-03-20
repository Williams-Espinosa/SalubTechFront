import { useState } from "react";

import HeroPage    from "./pages/public/HeroPage.jsx";
import ProfilePage from "./pages/public/ProfilePage.jsx";
import LoginPage   from "./pages/public/LoginPage.jsx";
import PrivacyPage from "./pages/public/PrivacyPage.jsx";
import EnfermeroApp  from "./pages/enfermero/EnfermeroApp.jsx";
import SupervisorApp from "./pages/supervisor/SupervisorApp.jsx";
import RhApp         from "./pages/rh/RhApp.jsx";

export default function App() {
  const [page, setPage] = useState("hero");
  const [role, setRole] = useState(null);

  const goLogout       = () => { setRole(null); setPage("hero"); };
  const handleSelectRole = r => { setRole(r); setPage("login"); };
  const handleLogin    = () => {
    if (role === "supervisor") setPage("dash-supervisor");
    else if (role === "rh")   setPage("dash-rh");
    else if (role === "enfermero") setPage("dash-enfermero");
    else throw new Error("Rol desconocido: " + role);
  };

  return (
    <>
      {page === "hero"            && <HeroPage    onStart={() => setPage("profile")} onPolicy={() => setPage("privacy")}/>}
      {page === "profile"         && <ProfilePage onSelect={handleSelectRole}/>}
      {page === "login"           && <LoginPage   role={role} onBack={() => setPage("profile")} onLogin={handleLogin}/>}
      {page === "privacy"         && <PrivacyPage onBack={() => setPage("hero")}/>}
      {page === "dash-enfermero"  && <EnfermeroApp  onLogout={goLogout}/>}
      {page === "dash-supervisor" && <SupervisorApp onLogout={goLogout}/>}
      {page === "dash-rh"         && <RhApp         onLogout={goLogout}/>}
    </>
  );
}
