import axios from 'axios';

export default {

  getBook: (id) => {
    return axios.get(`/api/books/${id}`);
  },
 
  getBooks: () => {
    return axios.get('/api/books');
  },

  getAuthors: (bookAuthor) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${bookAuthor}`);
  },

  getTitles: (bookTitle) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
  },
  
  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  },
  
  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  }

};
