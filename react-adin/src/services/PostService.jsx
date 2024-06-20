import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/posts'

export const listPosts = () => axios.get(REST_API_BASE_URL);

export const addPosts = (post) => axios.post(REST_API_BASE_URL, post);

export const getPost = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updatePost = (id, post) => axios.put(REST_API_BASE_URL + '/' + id, post);

export const deletePost = (id) => axios.delete(REST_API_BASE_URL + '/' + id);

export const addPhotoToPost = () => axios.put(REST_API_BASE_URL + '/' + photo);