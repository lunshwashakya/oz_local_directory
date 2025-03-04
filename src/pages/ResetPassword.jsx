import { HashtagIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import { Link, useNavigate } from 'react-router';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from '../validationSchemas/resetPassword';

function ResetPassword() {
    const navigate = useNavigate();

    const { 
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    
      const onSubmit = (data) => console.log(data)

    return (
        <>
            <h2 className="text-2xl font-medium text-center">
                Reset password
            </h2>

            <p className="text-sm text-gray-500">
                Enter your email address and we will send you a verification code to reset your password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <div className="mt-2 grid grid-cols-1 ">
                    <input
                    id="password"
                    {...register("password")} 
                    type="password"
                    placeholder="Password"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                {errors.password && (<span className='text-sm text-red-500'>{errors.password.message}</span>)}

                <div className="mt-2 grid grid-cols-1 ">
                    <input
                    id="confirmPassword"
                    {...register("confirmPassword")} 
                    type="confirmPassword"
                    placeholder="Confirm Password"
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                {errors.confirmPassword && (<span className='text-sm text-red-500'>{errors.confirmPassword.message}</span>)}

                <input type="submit" value="Reset password" className="mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />

            </form>


            <div className='flex justify-between'>
                <Link onClick={() => {navigate(-1);}} to="/login" className='text-blue-600 text-sm'>Back to login</Link>
            </div>
        </>
    );
}

export default ResetPassword;


