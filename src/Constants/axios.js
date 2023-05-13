import axios from 'axios';
import {baseUrl} from './constans'

const instance=axios.create({
    baseURL:baseUrl,

})

export default instance