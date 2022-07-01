import React from 'react';

const SingleTask = ({ task,index }) => {
    const { taskName, taskDescription } = task;
    return (
            <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td>{index + 1}</td>
                <td>{taskName}</td>
                <td>{taskDescription}</td>
            </tr>
    );
};

export default SingleTask;