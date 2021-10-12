import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
    (res)=>res,
    (err)=>
    Promise.reject(
        (err.response && err.response.data)|| 'Hata'
    )
)

export default axiosInstance