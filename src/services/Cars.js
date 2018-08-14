import axios from 'axios'
// importujem axios

export default class Cars {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('cars')
    }

    add(car) {
        console.log(car);
        return axios.post('cars', car)
    }

}

export const cars = new Cars ()