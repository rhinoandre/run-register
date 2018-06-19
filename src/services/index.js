import runFn from './runs';
import userFn from './user';

const BASE_URL = 'http://localhost:3001';

const runAPI = runFn(BASE_URL);
const userAPI = userFn(BASE_URL);

export { runAPI, userAPI };
