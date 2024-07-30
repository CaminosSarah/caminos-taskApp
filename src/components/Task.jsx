import React from 'react';

const Task = ({ task, index, toggleStatus }) => {
    const statusClass = task.status === 'Pending' ? 'status-pending' : 'status-completed';

    return (
        <li>
            <span>{index + 1}</span>
            <span>{task.description}</span>
            <span>{task.assignee}</span>
            {task.status === 'Pending' && <span>{task.deadline}</span>}
            <span className={statusClass}>{task.status}</span>
            <button onClick={toggleStatus}>Toggle Status</button>
        </li>
    );
};

export default Task;
