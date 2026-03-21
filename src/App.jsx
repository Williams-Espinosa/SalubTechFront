import { useState } from "react";
import { clearToken } from "./api/client";

import HeroPage    from "./pages/public/HeroPage.jsx";
import ProfilePage from "./pages/public/ProfilePage.jsx";
import LoginPage   from "./pages/public/LoginPage.jsx";
import PrivacyPage from "./pages/public/PrivacyPage.jsx";
import EnfermeroApp  from "./pages/enfermero/EnfermeroApp.jsx";
import SupervisorApp from "./pages/supervisor/SupervisorApp.jsx";
import RhApp         from "./pages/rh/RhApp.jsx";

export default function App() {
  const [page,     setPage]     = useState("hero");
  const [role,     setRole]     = useState(null);
  const [authUser, setAuthUser] = useState(null);  // datos del usuario logueado

  const goLogout = () => {
    clearToken();
    setAuthUser(null);
    setRole(null);
    setPage("hero");
  };

  const handleSelectRole = r => { setRole(r); setPage("login"); };

  // onLogin ahora recibe (rolFrontend, userData) desde LoginPage
  const handleLogin = (frontendRol, userData) => {
    setAuthUser(userData);
    setRole(frontendRol);
    if (frontendRol === "supervisor") setPage("dash-supervisor");
    else if (frontendRol === "rh")   setPage("dash-rh");
    else                              setPage("dash-enfermero");
  };

  return (
    <>
      {page === "hero"            && <HeroPage    onStart={() => setPage("profile")} onPolicy={() => setPage("privacy")}/>}
      {page === "profile"         && <ProfilePage onSelect={handleSelectRole}/>}
      {page === "login"           && <LoginPage   role={role} onBack={() => setPage("profile")} onLogin={handleLogin}/>}
      {page === "privacy"         && <PrivacyPage onBack={() => setPage("hero")}/>}
      {page === "dash-enfermero"  && <EnfermeroApp  onLogout={goLogout} user={authUser}/>}
      {page === "dash-supervisor" && <SupervisorApp onLogout={goLogout} user={authUser}/>}
      {page === "dash-rh"         && <RhApp         onLogout={goLogout} user={authUser}/>}
    </>
  );
}
