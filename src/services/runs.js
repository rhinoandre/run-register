export default function(BASE_URL) {
  return {
    getAll() {
      return fetch(`${BASE_URL}/runs`, {
        method: 'GET',
        'Content-Type': 'application/type'
      });
    }
  }
}