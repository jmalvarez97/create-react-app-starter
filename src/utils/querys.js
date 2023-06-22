const URL_API = "https://expressjs-mongoose-production-14de.up.railway.app/"
<<<<<<< HEAD

=======
>>>>>>> eca476c (tabla, muestra pagos)
export async function getPaymentsOfID(id, state) {
    if (id) {
        try {
            const response = await fetch(URL_API + "socio/payments/" + id);
            const data = await response.json();
<<<<<<< HEAD
            console.log(data)
=======
>>>>>>> eca476c (tabla, muestra pagos)
            state(data);
        } 
        catch (error) {
            console.error(error);
        }
    }
}

