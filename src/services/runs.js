export default function(BASE_URL) {
  return {
    getAll(token) {
      return fetch(`${BASE_URL}/runs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/type',
          Authorization: `Bearer ${token}`
        }
      });
    }
  }
}