const globalStyle = `
  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
    font-family: Arial, Helvetica, sans-serif; 
  }

  :root {
    --blue:        #3D5BF5;
    --blue-dark:   #2A44D6;
    --blue-light:  #EEF1FE;
    --orange:      #F5813D;
    --red:         #E53E3E;
    --green:       #38A169;
    --green-light: #F0FFF4;
    --gray-bg:     #F0F2F5;
    --white:       #ffffff;
    --text-dark:   #0F1B3D;
    --text-mid:    #4A5578;
    --text-soft:   #8C93AA;
    --border:      #E2E5EF;
    --shadow-sm:   0 2px 8px  rgba(15,27,61,.07);
    --shadow-md:   0 8px 32px rgba(15,27,61,.12);
    --shadow-lg:   0 20px 60px rgba(15,27,61,.16);
    --radius:      20px;
    --radius-sm:   12px;
  }

  html, body, #root { height: 100%; }

  body {
    background: var(--gray-bg);
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif; 
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes cookieDrop {
    from { opacity: 0; transform: translateY(60px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes tickAnim {
    from { opacity: 0; transform: scale(.6); }
    to   { opacity: 1; transform: scale(1); }
  }

  .page { 
    animation: fadeIn .3s ease both; 
  }
  button, input, textarea, select { 
    cursor: pointer; 
    font-family: inherit; 
  }
`;

export default globalStyle;