import React from 'react';
import { useForm } from "react-hook-form"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
          {errors.name && <span className='text-red-500'>Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className='text-red-500'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true,  minLength: 6, maxLength: 20 },{ pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.password ? "true" : "false"} />
          {/* {errors.password && <span className='text-red-500'>Password is required</span>} */}
          {errors.password?.type === "required" && (
        <p role="alert" className='text-red-500'>Password is required</p>
      )}
          {errors.password?.type === "minLength" && (
        <p role="alert" className='text-red-500'>Minimum 6 characters is required</p>
      )}
          {errors.password?.type === "maxLength" && (
        <p role="alert" className='text-red-500'>You can enter maximum 20 characters</p>
      )}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;