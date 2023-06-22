import "./App.css"
import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-scanner';
<<<<<<< HEAD
import { getPaymentsOfID } from "./utils/querys";
=======
import { getPaymentsOfID } from './utils/querys';
import "./App.css"

>>>>>>> eca476c (tabla, muestra pagos)

function App() {
  const qrRef = useRef(null);
  const [id, setId] = useState("");
  const [pagos, setPagos] = useState([])
<<<<<<< HEAD
<<<<<<< HEAD

  const handleScan = (data) => {
    if (data) {
      setId(data.text);
      getPaymentsOfID(data.text, setPagos);
=======
=======
  
>>>>>>> 51e2276 (act)
  const handleScan = (data) => {
    if (data) {
      setId(data.text)
      getPaymentsOfID(data.text, setPagos)
>>>>>>> eca476c (tabla, muestra pagos)
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
<<<<<<< HEAD
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
      
=======
        style={{ width: '400px' }}
      />
      <div className='id'>ID: {id}</div>
      
      <table>
    <tr>
      <th>Fecha</th>
      <th>Monto</th>
    </tr>
    
    {pagos.map((p) => {
      return <tr>
        <td>{p.date}</td>
        <td>{p.amount}</td>
      </tr>
    })}
    </table>



>>>>>>> eca476c (tabla, muestra pagos)
    </div>
  );
}

export default App;
