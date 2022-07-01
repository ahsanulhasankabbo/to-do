import React from 'react';
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        // console.log('form submitted')

        const name = data.taskName;
        const description = data.taskDescription;

        const tasks = {
            taskName : name,
            taskDescription : description,
        }

        // console.log(tasks)
        const url = `http://localhost:5000/tasks`;
        fetch(url, {
            method : 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(tasks)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Task Name</span>
                    </label>
                    <input {...register("taskName", { required: true })} type="text" placeholder="Task Name" class="input input-bordered w-full max-w-xs" />
                    <label class="label text-red-500">
                        {errors.taskName?.type === 'required' && "Task name is required"}
                    </label>
                </div>

                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Task Description</span>
                    </label>
                    {/* <input {...register("taskDescription", { required: true })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" /> */}
                    <textarea {...register("taskDescription", { required: true })} type="text" placeholder="Task Description" class="input input-bordered w-full max-w-xs" id="" cols="30" rows="10"></textarea>
                    <label class="label text-red-500">
                        {errors.taskDescription && "Task Description is required"}
                    </label>
                </div>

                <input className='btn' type="submit" />
            </form>
        </div>
    );
};

export default Home;