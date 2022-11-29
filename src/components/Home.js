import React, {useEffect, useRef} from 'react'
import Post from './Post'

import {useSelector, useDispatch} from 'react-redux'
import { callCreatePostApi, callFetchPostsApi, showModal } from '../redux/actions'
import EditPost from './EditPost';

export default function Home() {

    const posts = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch();

    const titleRef = useRef();
    const bodyRef = useRef();

    useEffect(()=>{
        dispatch(callFetchPostsApi());
    },[])

    const handleClick = () => {
        const ptitle = titleRef.current.value;
        const pbody = bodyRef.current.value;
        const userId = 101
        dispatch(callCreatePostApi(ptitle, pbody, userId));
    }

    return (
    <div className='container'>
        <h2>Create a new Post</h2>
        <hr/>
        <div className='row'>
            <div className='col-md-5'>
                <div className="mb-3">
                    <label className="form-label">Post Title</label>
                    <input ref={titleRef} type="text" className="form-control" /> 
                </div>
                <div className="mb-3">
                    <label className="form-label">Post Body</label>
                    <input ref={bodyRef} type="text" className="form-control" /> 
                </div>
                <button onClick={handleClick} className="btn btn-primary">Submit</button>
            </div>
        </div>
        <br/>
        <h2>All Posts</h2>
        <EditPost />
        <button onClick={()=> dispatch(showModal(2))} className='btn btn-danger'>Update</button>
        <hr/>
        <div className='row'>
            {
                loading && <h5>Loading...</h5>
            }
            {
                posts.map((post, i) => {
                    return (
                        <div key={i} className='col-md-3 mb-4'>
                            <Post postIndex={i} data={post}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
