export const TOKEN_KEY = 'token';
export const ID_USUARIO = 'id';
export const NOME_USUARIO = 'name'

export const login = token => {
   localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => { localStorage.clear()}

export const setIdUsuario = id => localStorage.setItem(ID_USUARIO, id);
export const getIdUsuario = () => localStorage.getItem(ID_USUARIO)

export const setNomeUsuario = name => localStorage.setItem(NOME_USUARIO, name);
export const getNomeUsuario = () => localStorage.getItem(NOME_USUARIO)

export const getToken = () => localStorage.getItem(TOKEN_KEY)