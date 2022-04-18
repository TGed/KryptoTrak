import {create} from 'apisauce';

const cgApi = create({
    baseURL: 'https://api.coingecko.com/api/v3'
});

export default cgApi;