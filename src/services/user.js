export default function(BASE_URL) {
  return {
    login: ({ email, passwd }) => fetch(`${BASE_URL}/users/login`, {
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
  }
}
