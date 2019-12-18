import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (
    baseURL = 'http://localhost:3000'
    );

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

  getEvent: async () => {
    return await service.get('/events/:id');
  },

  updateEvent: async (data, form) => {
    console.log(form)

    return await service.patch(data, form);
  },

  // Events: async () => {
  //   return await service.get('/events');
  // },
}

export default MY_SERVICE;
