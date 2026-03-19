import React from "react";
import ReactDOM from "react-dom/client";
import globalStyle from "./styles/globalStyle.js";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null, info: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e, info) { this.setState({ info }); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding:40, fontFamily:"monospace", background:"#fff2f2", minHeight:"100vh" }}>
          <h2 style={{ color:"red", marginBottom:16 }}>💥 Error al renderizar</h2>
          <pre style={{ background:"#fff", padding:20, borderRadius:8, fontSize:13, whiteSpace:"pre-wrap", border:"1px solid #fcc", overflowX:"auto" }}>
            {String(this.state.error)}
            {"\n\n--- Stack ---\n"}
            {this.state.error?.stack}
            {"\n\n--- Componente ---\n"}
            {this.state.info?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <style>{globalStyle}</style>
    <App />
  </ErrorBoundary>
);
