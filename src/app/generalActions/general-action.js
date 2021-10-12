import axios from 'axios'




export const save =({
    url,
    data,
    success,
    failed,
})=>{
    return axios.post(`${url}`,data).then(res=>success(res.data)).catch(e =>{failed(e.response.data) 
        console.log(e.response.data.message[0])}
    )
}

export const update =({
    url,
    data,
    success,
    failed,
})=>{
    return axios.put(`${url}`,data).then(res=>res.data)
}

export const remove =({
    url,
    data,
    success,
    failed,
})=>{
    return axios.delete(`${url}`).then(res=>res.data)
}


