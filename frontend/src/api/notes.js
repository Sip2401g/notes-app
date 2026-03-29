import axios from 'axios';

const API = axios.create({
  baseURL: 'https://notes-app-3-o1wo.onrender.com/api',
});

export const getNotes = () => API.get('/notes');
export const createNote = (data) => API.post('/notes', data);
export const updateNote = (id, data) => API.put(`/notes/${id}`, data);
export const deleteNote = (id) => API.delete(`/notes/${id}`);
export const pinNote = (id) => API.patch(`/notes/${id}/pin`);
