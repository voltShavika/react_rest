import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {useSelector, useDispatch} from 'react-redux'
import { closeModal, callUpdatePostApi } from '../redux/actions';

export default function EditPost() {

    const titleRef = useRef()
    const bodyRef = useRef();

    const dispatch = useDispatch();

    const showModal = useSelector(state => state.showModal)
    const postIndexToEdit = useSelector(state => state.postIndexToEdit);
    const posts = useSelector(state => state.posts);

    var data = {
        title: "",
        body: "",
        userId: "",
        id: ""
    }
    if(postIndexToEdit >= 0 && postIndexToEdit < posts.length){
        data = posts[postIndexToEdit]
    }

    const handleEdit = () => {
        var ptitle = titleRef.current.value;
        var pbody = bodyRef.current.value;
        dispatch(callUpdatePostApi(postIndexToEdit, ptitle, pbody))

    }

    return (
    <Modal show={showModal} onHide={()=> dispatch(closeModal())} backdrop="static" keyboard="false">
        <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-3">
                <label className="form-label" >Title</label>
                <input ref={titleRef} type="text" className="form-control" defaultValue={data.title}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <input ref={bodyRef} type="text" className="form-control" defaultValue={data.body} />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={()=> dispatch(closeModal())}>
                Discard
            </Button>
            <Button variant="primary" onClick={handleEdit}>
                Update
            </Button>
        </Modal.Footer>
    </Modal>
    )
}
