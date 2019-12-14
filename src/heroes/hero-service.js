import axios from 'axios'

const BaseUrl = 'http://localhost:5000/heroes'

export async function getHeroes() {
    return await axios.get(BaseUrl);
}