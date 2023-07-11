import axios from 'axios'

const circuitoBD = axios.create({
    baseURL: 'https://backend.peruexploring.pe/public/api/v1/circuitos'    
})

export default circuitoBD;