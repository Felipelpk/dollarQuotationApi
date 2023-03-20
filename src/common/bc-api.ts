import axios from 'axios';

export const bcApi = axios.create({
  baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/',
});
