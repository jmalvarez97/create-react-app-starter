const URL_API = "https://expressjs-mongoose-production-14de.up.railway.app/"
export async function getPaymentsOfID(id, state) {
    if (id) {
        try {
            const response = await fetch(URL_API + "socio/payments/" + id);
            const data = await response.json();
            state(data);
        } 
        catch (error) {
            console.error(error);
        }
    }
}

