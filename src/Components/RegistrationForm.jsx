import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = ({ onRegister }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle registration logic here (e.g., API call)
        // For demonstration, we assume registration is successful
        onRegister();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" {...register('name', { required: true })} />
                {errors.name && <p>Name is required</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
                {errors.email && <p>Valid email is required</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;