import axios from "./axios"
import { API_ADDRESS } from "./urls"
import * as urls from "./urls";
const route = API_ADDRESS + '/events'
export const getEvents = async ()=> {
    const response = await axios({
        method: 'GET',
        url: route,

    })
    return response.data
}

export const getOneEvent = async (id: string) => {
    const response = await axios({
        method: 'GET',
        url: `${route}?id=eq.${id}`, // مقدار id را به درستی در URL جایگذاری کنید
    })
    return response.data
}
