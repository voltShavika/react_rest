import axios from 'axios'

export const FETCH_POSTS_REQ = "FETCH_POSTS_REQ";
export const FETCH_POSTS_SUC = "FETCH_POSTS_SUC";
export const FETCH_POSTS_ERR = "FETCH_POSTS_ERR";

export const CREATE_POST_REQ = "CREATE_POST_REQ";
export const CREATE_POST_SUC = "CREATE_POST_SUC";
export const CREATE_POST_ERR = "CREATE_POST_ERR";

export const UPDATE_POST_REQ = "UPDATE_POST_REQ";
export const UPDATE_POST_SUC = "UPDATE_POST_SUC";
export const UPDATE_POST_ERR = "UPDATE_POST_ERR";

export const DELETE_POST_REQ = "DELETE_POST_REQ";
export const DELETE_POST_SUC = "DELETE_POST_SUC";
export const DELETE_POST_ERR = "DELETE_POST_ERR";

export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const fetchPostsReq = () => {
    return {
        type: FETCH_POSTS_REQ
    }
}

export const fetchPostsSuc = (posts) => {
    return {
        type: FETCH_POSTS_SUC,
        payload: posts
    }
}

export const fetchPostsErr = (error) => {
    return {
        type: FETCH_POSTS_ERR,
        payload: error
    }
}

export const callFetchPostsApi = () => {
    return (dispatch) => {
        dispatch(fetchPostsReq());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            dispatch(fetchPostsSuc(res.data))
        })
        .catch(error => {
            dispatch(fetchPostsErr(error))
        })
    }
}

export const createPostReq = () => {
    return {
        type: CREATE_POST_REQ
    }
}

export const createPostSuc = (post) => {
    return {
        type: CREATE_POST_SUC,
        payload: post
    }
}

export const createPostErr = (error) => {
    return {
        type: CREATE_POST_ERR,
        payload: error
    }
}

export const callCreatePostApi = (ptitle, pbody, uid) => {
    return (dispatch) => {
        dispatch(createPostReq());
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: ptitle,
            body: pbody,
            userId: uid
        })
        .then(res => {
            dispatch(createPostSuc(res.data))
        })
        .catch(error => {
            dispatch(createPostErr(error))
        })
    }
}

export const deletePostReq = () => {
    return {
        type: DELETE_POST_REQ
    }
}

export const deletePostSuc = (postIndex) => {
    return {
        type: DELETE_POST_SUC,
        payload: postIndex
    }
}

export const deletePostErr = (error) => {
    return {
        type: DELETE_POST_ERR,
        payload: error
    }
}

export const callDeletePostApi = (postIndex) => {
    return (dispatch) => {
        dispatch(deletePostReq());
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            dispatch(deletePostSuc(postIndex))
        })
        .catch(error => {
            dispatch(deletePostErr(error))
        })
    }
}

export const showModal = (postIndex) => {
    return {
        type: SHOW_MODAL,
        payload: postIndex
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}


export const updatePostReq = () => {
    return {
        type: UPDATE_POST_REQ
    }
}

export const updatePostSuc = (postIndex, post) => {
    return {
        type: UPDATE_POST_SUC,
        pIndex: postIndex,
        payload: post
    }
}

export const updatePostErr = () => {
    return {
        type: UPDATE_POST_ERR
    }
}

export const callUpdatePostApi = (postIndex, ptitle, pbody) => {
    return (dispatch) => {
        dispatch(updatePostReq());
        axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            title: ptitle,
            body: pbody
        })
        .then(res => {
            dispatch(updatePostSuc(postIndex, res.data))
            dispatch(closeModal());
        })
        .catch(error => {
            dispatch(updatePostErr(error))
            dispatch(closeModal())
        })
    }
}