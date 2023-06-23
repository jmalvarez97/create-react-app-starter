import "./App.css"
import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-scanner';
import { getPaymentsOfID } from "./utils/querys";

function App() {
  const qrRef = useRef(null);
  const [id, setId] = useState("");
  const [pagos, setPagos] = useState([])

    const handleScan = (data) => {
    if (data) {
      setId(data.text)
      getPaymentsOfID(data.text, setPagos)
      alert(`ID escaneado: ${data.text}`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  console.log(pagos)
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
        style={{ width: "400px" }}
      />
      <div className="id"> ID: {id}</div>
      <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Monto</th>
        </tr>
    </thead>
    <tbody>
    {pagos.map((p) => {
      return <tr>
                <td>{p.date}</td>
                <td>{p.amount}</td>
            </tr>
    })}
    
    </tbody>
    
    </table>
      
    </div>
  );
}

export default App;
