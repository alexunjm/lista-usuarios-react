import { axiosIntance } from '../config/AxiosConfig';

const FORMATO = 'json';
const TOKEN = 'nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE';
const token = (format: string, accessToken: string) =>
  `_format=${format}&access-token=${accessToken}`;

export const UsuarioRepositorio = {
  listar: () =>
    axiosIntance.get(`/users?${token(FORMATO, TOKEN)}`),
};
