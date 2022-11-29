import { CREATE_POST_ERR, CREATE_POST_REQ, CREATE_POST_SUC, DELETE_POST_ERR, DELETE_POST_REQ, DELETE_POST_SUC, FETCH_POSTS_ERR, FETCH_POSTS_REQ, FETCH_POSTS_SUC } from "./actions";

const initialState = {
    loggedIn: false,
    email: "",
    posts: [],
    loading: false,
    errors: []
}

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_POSTS_REQ: return {
            ...state,
            loading: true,
            errors: []
        }
        case FETCH_POSTS_SUC: return {
            ...state,
            loading: false,
            errors: [],
            posts: [...action.payload]
        }
        case FETCH_POSTS_ERR: return {
            ...state,
            loading: false,
            errors: [...action.payload],
        }


        case CREATE_POST_REQ: return {
            ...state,
            loading: true,
            errors: []
        }
        case CREATE_POST_SUC: return {
            ...state,
            loading: false,
            errors: [],
            posts: [action.payload, ...state.posts]
        }
        case CREATE_POST_ERR: return {
            ...state,
            loading: false,
            errors: [...action.payload],
        }


        case DELETE_POST_REQ: return {
            ...state,
            loading: true,
            errors: []
        }
        case DELETE_POST_SUC:
            var posts = [...state.posts];
            posts.splice(action.payload, 1)
             return {
            ...state,
            loading: false,
            errors: [],
            posts: posts
        }
        case DELETE_POST_ERR: return {
            ...state,
            loading: false,
            errors: [...action.payload],
        }
        default: return state

    }
}

export default rootReducer;