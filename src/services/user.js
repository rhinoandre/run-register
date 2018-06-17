const BASE_URL = 'http://localhost:3001/users'

export const userAPI = {
  login: ({ email, passwd }) => fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, passwd })
  }),
  getOwnInformation: () => fetch(`${BASE_URL}/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
};
