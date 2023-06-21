import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-scanner';
import Datos from "./components/Datos"


function App() {
  const qrRef = useRef(null);
  const [id, setId] = useState("");

  const handleScan = (data) => {
    if (data) {
      setId(data.text)
      alert(`ID escaneado: ${data.text}`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  
  return (
    
    <div className="App">
      <h1>Escáner de QR</h1>
      <QrReader
        ref={qrRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={{
          video: { facingMode: "environment" }
        }}
        style={{ width: '70%' }}
      />
    </div>
  );
}

export default App;
