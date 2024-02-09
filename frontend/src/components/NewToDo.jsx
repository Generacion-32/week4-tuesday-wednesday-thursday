import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToDoThunk } from '../store/slices/todos.slice';

const NewToDo = () => {

    const [ task, setTask ] = useState("");
    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault();
        console.log("Me ejecute")
        dispatch(addToDoThunk(task));
        setTask("");
    }

    return (
        <Form className="mb-5" onSubmit={submit}>
            <Form.Group className="mb-3" controlId='task'>
                <Form.Label>New to do</Form.Label>
                <Form.Control 
                    value={task} 
                    onChange={e => setTask(e.target.value)} 
                    as="textarea" 
                    rows={3}
                    required
                />
            </Form.Group>
            <Button className="ms-auto d-flex" type="submit">Add</Button>
        </Form>
    );
};

export default NewToDo;