import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { callDeletePostApi, showModal } from '../redux/actions';

export default function Post(props) {

    const loggedIn = useSelector(state => state.loggedIn);

    const {userId:uid, id:pid, title:ptitle, body:pbody} = props.data
    const postIndex = props.postIndex;

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(callDeletePostApi(postIndex));
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ptitle.substring(0,25)}...</h5>
                    <h6 className="card-subtitle mb-2 text-muted">posted by: user{uid}</h6>
                    <p className="card-text">{pbody.substring(0,30)}...</p>
                    {
                        loggedIn && 
                        <>
                            <button onClick={()=> dispatch(showModal(postIndex))} className='btn btn-primary'>Update</button>
                            <button onClick={handleDelete} className='btn btn-danger ms-3'>Delete</button>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}
