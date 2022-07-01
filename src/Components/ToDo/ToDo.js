import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/tasks';
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Checkbox</th>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((task, index) =>
                                <SingleTask index={index} task={task}></SingleTask>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;