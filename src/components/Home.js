import React, {useEffect, useRef} from 'react'
import Post from './Post'

import {useSelector, useDispatch} from 'react-redux'
import { callCreatePostApi, callFetchPostsApi, showModal } from '../redux/actions'
import EditPost from './EditPost';
import Login from './Login';
import Navbar from './Navbar';

export default function Home() {

    const posts = useSelector(state => state.posts);
    const loading = useSelector(state => state.loading)

    const loggedIn = useSelector(state => state.loggedIn);
    const user = useSelector(state => state.user);
    const userLoading = useSelector(state => state.userLoading);

    const dispatch = useDispatch();

    const titleRef = useRef();
    const bodyRef = useRef();

    useEffect(()=>{
        dispatch(callFetchPostsApi());
    },[])

    const handleClick = () => {
        const ptitle = titleRef.current.value;
        const pbody = bodyRef.current.value;
        if(ptitle.length > 0 && pbody.length > 0){
            const userId = 101
            dispatch(callCreatePostApi(ptitle, pbody, userId));
            titleRef.current.value = ""
            bodyRef.current.value = ""
        }
        
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    loggedIn && 
                    <div className='row'>
                        <h3>Welcome {user.displayName}</h3>
                        <br/>
                        <h5>Create a new Post</h5>
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
                    </div>
                }
                {
                    userLoading && <h3 className='mt-3'>Please wait while we check for Login...</h3>
                }
        
                <br/>
                <h2>All Posts</h2>
                <EditPost />
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
        </>
    
    )
}
