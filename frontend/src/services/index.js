import axios from 'axios';
let baseURL='https://eventer-r.herokuapp.com'

// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'https://eventer-r.herokuapp.com')
//   : 
//   (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });


const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: user => {
    return service.post('/login', user);
  },

  logout: async () => {
    return await service.get('/logout');
  },

  getUser: () => {
    return service.get('/profile')
  },

  updateUser: async (data, form) => {
    return await service.patch(data, form);
  },

  createEvent: async (user) => {
    return await service.post('/events', user);
  },
  getEvents: async () => {
    return await service.get('/events');
  },

  getEvent: async (data) => {
    return await service.get(data);
  },

  updateEvent: async (data, form) => {


    return await service.patch(data, form);
  },

  createComment: async (data, form) => {
    return await service.post(data, form);
  }
  // Events: async () => {
  //   return await service.get('/events');
  // },
}

export default MY_SERVICE;
