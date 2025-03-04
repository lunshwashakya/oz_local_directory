import { HashtagIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from '../validationSchemas/register';

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    
      const onSubmit = (data) => console.log(data)

    return(
        <>
            <p className="text-sm text-gray-500">
                One DeepSeek account is all you need to access to all DeepSeek services.
            </p>

            <p className="text-sm text-gray-500">
                Only email registration is supported in your region.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <div>
                    <input className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 px-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type="text" id="email" {...register("email")} placeholder="Email Address"/>
                    {errors.email && (<span className='text-sm text-red-500'>{errors.email.message}</span>)}
                </div>

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

                <div className='flex gap-2'>
                    <div>
                        <div className="mt-2 grid grid-cols-1 ">
                        <input
                        id="code"
                        {...register("code")} 
                        type="text"
                        placeholder="Code"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                        />
                        <HashtagIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                        />
                        </div>

                    </div>

                    <button className="rounded-md mt-2 bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 w-[100px] hover:bg-gray-50">Send code</button>

                </div>


                <div>
                    <label className="text-sm items-start flex gap-1.5 text-gray-900">
                        
                    <input  className=" mt-1" type="checkbox" {...register("confirm")}  id="confirm" />
                    <span>I confirm that I have read, consent and agree to DeepSeek's 
                    <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html" target="_blank" rel="noopener noreferrer" className='text-blue-600'> Terms of Use</a> and 
                    <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer" className='text-blue-600'> Privacy Policy</a>
                    </span>
                    </label>
                </div>

                <input type="submit" value="Sign up" className="mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />



            </form>


            <div className='flex justify-between '>
                <Link to="/forget-password" className='text-blue-600 text-sm '>Forgot Password?</Link>
                <Link to="/login" className='text-blue-600 text-sm'>Login</Link>
            </div>
        </>
    );
}

export default Register;