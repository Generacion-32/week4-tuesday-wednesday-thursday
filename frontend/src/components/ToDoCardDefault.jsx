import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkToDoThunk, deleteTaskThunk } from '../store/slices/todos.slice';
import ButtonsEditDelete from './ButtonsEditDelete';

const ToDoCardDefault = ({ todo, edit }) => {

    const dispatch = useDispatch();

    const remove = () => dispatch(deleteTaskThunk(todo.id))
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {todo.task}
                    </Card.Text>
                    <Form.Check
                        type='checkbox'
                        label='Is completed'
                        id={`${todo.id}-is-completed`}
                        checked={todo.isCompleted}
                        onChange={() => dispatch(checkToDoThunk(todo))}
                    />
                    <ButtonsEditDelete onUpdate={edit} onDelete={remove}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ToDoCardDefault;