import axios from "./axios"
import { API_ADDRESS } from "./urls"
import * as urls from "./urls";
const route = API_ADDRESS + '/events'
export const getEvents = async ()=> {
    const response = await axios({
        method: 'GET',
        headers:{
            "apikey": urls.API_KEY,
                  "Authorization": `Bearer ${urls.API_KEY}`,
                  "Content-Type": "application/json",

        },
        url: route,

    })
    return response.data
}