import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/posts'

export const listPosts = () => axios.get(REST_API_BASE_URL + "/getAll");

export const getPost = (id) => axios.get(REST_API_BASE_URL + '/' + id);