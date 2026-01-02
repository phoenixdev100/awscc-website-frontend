import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject({
      message: error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data
    });
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
  changePassword: (passwordData) => api.post('/auth/change-password', passwordData),
  verifyToken: () => api.post('/auth/verify-token'),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.put('/users/profile', profileData),
  getDashboard: () => api.get('/users/dashboard'),
  registerForEvent: (eventId) => api.post(`/users/events/${eventId}/register`),
  unregisterFromEvent: (eventId) => api.delete(`/users/events/${eventId}/unregister`),
};

// Events API
export const eventsAPI = {
  getEvents: (params = {}) => api.get('/events', { params }),
  getEvent: (id) => api.get(`/events/${id}`),
  getEventRegistrations: (id) => api.get(`/events/${id}/registrations`),
  getAllTags: () => api.get('/events/tags/all'),
};

// Admin API
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  
  // Users management
  getUsers: (params = {}) => api.get('/admin/users', { params }),
  getUser: (userId) => api.get(`/admin/users/${userId}`),
  createUser: (userData) => api.post('/admin/users', userData),
  updateUser: (userId, userData) => api.put(`/admin/users/${userId}`, userData),
  updateUserRole: (userId, role) => api.put(`/admin/users/${userId}/role`, { role }),
  deleteUser: (userId) => api.delete(`/admin/users/${userId}`),
  
  // Events management
  getAdminEvents: (params = {}) => api.get('/admin/events', { params }),
  createEvent: (eventData) => api.post('/admin/events', eventData),
  updateEvent: (eventId, eventData) => api.put(`/admin/events/${eventId}`, eventData),
  deleteEvent: (eventId) => api.delete(`/admin/events/${eventId}`),
  
  // Announcements management
  getAnnouncements: (params = {}) => api.get('/admin/announcements', { params }),
  createAnnouncement: (announcementData) => api.post('/admin/announcements', announcementData),
  deleteAnnouncement: (announcementId) => api.delete(`/admin/announcements/${announcementId}`),
};

// Contact API
export const contactAPI = {
  submitContact: (contactData) => api.post('/contact', contactData),
  getContacts: (params = {}) => api.get('/contact', { params }),
  getContact: (id) => api.get(`/contact/${id}`),
  updateContactStatus: (id, status) => api.put(`/contact/${id}/status`, { status }),
  deleteContact: (id) => api.delete(`/contact/${id}`),
  getContactStats: () => api.get('/contact/stats/summary'),
};

export default api;
