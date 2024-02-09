import React, { useState } from 'react';
import ToDoCardDefault from './ToDoCardDefault';
import ToDoCardEdit from './ToDoCardEdit';


const ToDoCard = ({ todo }) => {

    const [ isEditing, setIsEditing ] = useState(false);

    if(isEditing){
        return <ToDoCardEdit 
            finishEdit={() => setIsEditing(false)} 
            todo={todo}
        />
    } else return <ToDoCardDefault todo={todo} edit={() => setIsEditing(true)} />
};

export default ToDoCard;