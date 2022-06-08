export const ENV = (process.env.REACT_APP_ENV || 'development').trim();
export const API_ENDPOINT = (process.env.REACT_APP_SERVER_URL || `localhost:8080`).trim();
export const USER_API = (process.env.REACT_APP_USER_API || '/api/auth').trim();

