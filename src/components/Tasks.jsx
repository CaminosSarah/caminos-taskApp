import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';

const Tasks = () => {
    const [tasks, setTasks] = useState(customTasks);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleTaskStatus = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index
                ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
                : task
        );
        setTasks(newTasks);
        filterTasks(searchQuery, newTasks);
    };

    const filterTasks = (query, taskList) => {
        const filtered = taskList.filter(task =>
            task.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredTasks(filtered);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        filterTasks(query, tasks);
    };

    return (
        <div>
            <h2>Task Lists</h2>
            <SearchFilter onSearch={handleSearch} />
            <div className="header">
                <span>No.</span>
                <span>Task Description</span>
                <span>Assignee</span>
                <span>Deadline</span>
                <span>Status</span>
                <span>Actions</span>
            </div>
            <ul>
                {filteredTasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        index={index}
                        toggleStatus={() => toggleTaskStatus(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

//  own custom task data
const customTasks = [
    { description: 'Complete project report', assignee: 'Raylen Joy Pocong', deadline: '2024-08-15', status: 'Pending' },
    { description: 'Prepare presentation slides', assignee: 'Elon Musk', deadline: '2024-08-10', status: 'Completed' },
    { description: 'Review team performance', assignee: 'Charlie Puth', deadline: '2024-08-20', status: 'Pending' },
    { description: 'Organize team meeting', assignee: 'Alice Guo', deadline: '2024-08-12', status: 'Completed' },
    { description: 'Update project documentation', assignee: 'Bob Marley', deadline: '2024-08-25', status: 'Pending' },
    { description: 'Send out survey', assignee: 'Sarah Caminos', deadline: '2024-08-30', status: 'Pending' },
    { description: 'Plan next sprint', assignee: 'Artchel ', deadline: '2024-08-18', status: 'Completed' },
    { description: 'Check code reviews', assignee: 'Amante Christel Mae', deadline: '2024-08-22', status: 'Completed' },
    { description: 'Finalize budget report', assignee: 'Charlie Pocong', deadline: '2024-08-28', status: 'Pending' },
    { description: 'Schedule client meeting', assignee: 'Riza Hontiveros', deadline: '2024-08-15', status: 'Completed' },
];

export default Tasks;
