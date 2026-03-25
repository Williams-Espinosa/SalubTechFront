import { useState } from "react";
import LandingLayout from "../../components/templates/LandingLayout";
import ConsentBanner from "../../components/organisms/ConsentBanner";
import { IcUsers, IcShield, IcArrow } from "../../components/atoms/Icons";
import nurseImage from "../../assets/hero-nurses.png";

function HospitalImage() {
  return (
    <div style={{ width:"100%", height:"100%", position:"relative" }}>
      <img
        src={nurseImage}
        alt="Nurses and Medical Staff"
        style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
      />
    </div>
  );
}

export default function HeroPage({ onStart, onPolicy }) {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <LandingLayout stats={[{ val:"100%", label:"Seguridad Clínica" }]}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"calc(100vh - 64px)", overflow:"hidden" }}>
        {}
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 64px", animation:"fadeUp .7s .1s ease both" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"var(--blue-light)", borderRadius:100, padding:"6px 14px", marginBottom:28, fontSize:12, fontWeight:600, color:"var(--blue)", width:"fit-content" }}>
            <IcShield s={13}/> Sistema Hospitalario
          </div>
          <h1 style={{ fontFamily:"'TuFuente',sans-serif", fontSize:"clamp(36px,4vw,56px)", fontWeight:800, lineHeight:1.1, marginBottom:24, animation:"fadeUp .7s .15s ease both" }}>
            Gestión<br/>Inteligente de<br/><span style={{ color:"var(--blue)" }}>Cambios de<br/>Turno</span>
          </h1>
          <p style={{ fontSize:15, lineHeight:1.7, color:"var(--text-mid)", maxWidth:420, marginBottom:48, animation:"fadeUp .7s .2s ease both" }}>
            Optimiza la transferencia de información clínica crítica entre equipos médicos. Asegura que cada paciente reciba atención continua y de alta calidad.
          </p>
          <button
            onClick={onStart}
            style={{ display:"inline-flex", alignItems:"center", gap:18, background:"var(--blue)", borderRadius:"var(--radius)", padding:"20px 28px", cursor:"pointer", border:"none", textAlign:"left", boxShadow:"0 12px 32px rgba(61,91,245,.35)", transition:"transform .2s,box-shadow .2s,background .2s", animation:"fadeUp .7s .3s ease both", width:"fit-content" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.background="var(--blue-dark)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.background="var(--blue)"; }}
          >
            <div style={{ width:40, height:40, borderRadius:10, background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><IcUsers/></div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'TuFuente',sans-serif", fontSize:16, fontWeight:700, color:"#fff" }}>Iniciar Turno</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,.7)", marginTop:2 }}>Validación de personal y relevo</div>
            </div>
            <div style={{ width:32, height:32, borderRadius:"50%", background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center" }}><IcArrow/></div>
          </button>
        </div>

        {}
        <div style={{ position:"relative", overflow:"hidden", background:"linear-gradient(135deg,#E8ECFF,#D6DCFF)" }}>
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", padding:"60px 48px 60px 24px", animation:"fadeUp .7s .25s ease both" }}>
            <div style={{ width:"100%", maxWidth:480, borderRadius:24, overflow:"hidden", boxShadow:"var(--shadow-lg)", aspectRatio:"16/10" }}>
              <HospitalImage/>
            </div>
          </div>
        </div>
      </div>

      {showCookie && (
        <ConsentBanner
          onAccept={() => setShowCookie(false)}
          onReject={() => setShowCookie(false)}
          onPolicy={() => { setShowCookie(false); onPolicy(); }}
        />
      )}
    </LandingLayout>
  );
}
