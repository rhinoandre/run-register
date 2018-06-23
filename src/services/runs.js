import moment from 'moment';

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
    },
    getById(id, token) {
      return fetch(`${BASE_URL}/runs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/type',
          Authorization: `Bearer ${token}`
        }
      });
    },
    delete(id, token) {
      return fetch(`${BASE_URL}/runs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    update({ id, user_id, friendly_name, duration, distance }, token) {
      return fetch(`${BASE_URL}/runs/${id}`, { id, user_id, friendly_name, duration, distance }, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/type',
          Authorization: `Bearer ${token}`
        }
      });
    },
    create({ friendly_name, duration, distance }, token) {
      const created = moment().format('YYYY-MM-DD HH:mm:SS');
      return fetch(`${BASE_URL}/runs`, { friendly_name, duration, distance, created }, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/type',
          Authorization: `Bearer ${token}`
        }
      });
    }
  }
}