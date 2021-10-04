import axios from 'axios';

export const getCountries = () => 
    axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')

    

