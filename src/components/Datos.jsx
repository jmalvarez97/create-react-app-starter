import { useState, useEffect } from "react";
import { getPaymentsOfID } from "../utils/querys";


export default function Datos({socioID}) {
    const [pagos, setPagos] = useState(["HOLA"]);

    useEffect(() => {
        getPaymentsOfID(socioID, setPagos);
    }, [])

    return (
      <div>
        {pagos}
      </div>
          );
    }