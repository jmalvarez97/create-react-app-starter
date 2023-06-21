import axios from "axios"

const URL_API = "https://expressjs-mongoose-production-14de.up.railway.app/"

export async function getPaymentsOfID(id,state) {
    console.log(id)
    if(id){
        axios.get(URL_API + "socio/payments/" + id)
         .then((res) => {
            console.log(res.data)
            state(res.data)
         })
    }
}
