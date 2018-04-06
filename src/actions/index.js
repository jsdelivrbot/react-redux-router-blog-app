import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const API='http://reduxblog.herokuapp.com/api';
const KEY='?key=arifulhb';


/**
 *
 * @returns {{type: string, payload: AxiosPromise<T>}}
 */
export function fetchPosts() {

    const request = axios.get(`${API}/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


/**
 *
 * @param values
 * @returns {{type: string, payload: AxiosPromise<T>}}
 */
export function createPost(values, callback) {

    const request = axios.post(`${API}/posts${KEY}`, values)
        .then( () => callback() );

    return {

        type: CREATE_POST,
        payload: request
    }

}


export function fetchPost(id) {

    const request = axios.get(`${API}/posts/${id}${KEY}`);
    return {

        type: FETCH_POST,
        payload: request
    }

}


export function deletePost(id, callback) {

    const request = axios.delete(`${API}/posts/${id}${KEY}`)
        .then( () => callback() );


    return {

        type: DELETE_POST,
        payload: id
    }

}