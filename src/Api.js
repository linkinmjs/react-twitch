import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID': '9mnsvv9soajrg5q55cop34a6khcuxg',
        'Authorization': 'Bearer nh2lpiwq8igzeqvnl2wqktp8luhn80' // Se debe actualizar
    }
})

export default api;