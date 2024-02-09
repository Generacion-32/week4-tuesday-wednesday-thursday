import React, { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateTaskThunk } from '../store/slices/todos.slice';

const ToDoCardEdit = ({ finishEdit, todo }) => {

    const [ task, setTask ] = useState(todo.task);

    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault();
        dispatch(updateTaskThunk(task, todo.id));
        finishEdit();
    }

    return (
        <Col>
            <Card>
                <Card.Body>
                    <Form onSubmit={submit}>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            value={task}
                            onChange={e => setTask(e.target.value)}
                        />
                        <div className="mt-2 text-end">
                            <Button
                                variant='primary'
                                size='sm'
                                className="me-1"
                                type="submit"
                            >
                                Update
                            </Button>
                            <Button
                                variant='secondary'
                                size='sm'
                                onClick={finishEdit}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ToDoCardEdit;