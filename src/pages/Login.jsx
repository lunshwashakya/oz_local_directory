import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from '../validationSchemas/login';
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
    
      const onSubmit = (data) => {
            console.log(data);
            if (data.email === 'lunshwa.shakya95@gmail.com' && data.password === '12345678') {
                navigate('/dashbaord');
            } else {
                setErrorMessage(true);
            }
        }

    return(
        <>
            <p className="text-sm text-gray-500">
            Only login via email, Google, or +86 phone number login is supported in your region.
            </p>

            {
                errorMessage && (
                    <p className="text-sm text-red-500">Invalid email or password</p>
                )
            }

            <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mt-1 grid grid-cols-1s">
                        <input className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" type="text" id="phoneNumber" placeholder="Phone number / email address" {...register("email")} />
                        {errors.email && (<span className='text-sm text-red-500'>{errors.email.message}</span>)}
                        <EnvelopeIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                            />
                    </div>
                </div>

                <div>
                    <div className="mt-2 grid grid-cols-1s">
                        <input className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" type="password" id="password" placeholder="Password" {...register("password")}/>
                        {errors.password && (<span className='text-sm text-red-500'>{errors.password.message}</span>)}
                        <LockClosedIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                            />
                    </div>
                </div>
                
                <div>
                    <label className="text-xs items-start flex gap-1.5 text-gray-900">
                        <input className="mt-1" type="checkbox" id="confirm" />
                        <span>
                            I confirm that I have read, consent and agree to DeepSeek's 
                            <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html" target="_blank" rel="noopener noreferrer" className='text-blue-600'> Terms of Use</a> and 
                            <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer" className='text-blue-600'> Privacy Policy</a>
                        </span>
                    </label>
                    {errors.confirm && (<span className='text-sm text-red-500'>{errors.confirm.message}</span>)}
                </div>

                <input type="submit" value="Log in" className="mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />


            </form>

            <div className='flex justify-between'>
                <Link to="/forget-password" className='text-blue-600 text-sm '>Forgot Password?</Link>
                <Link to="/register" className='text-blue-600 text-sm'>Sign up</Link>
            </div>

            <div className=" flex items-center">
                <div className="h-[1px] bg-gray-200 flex-grow"></div>
                <div className="text-sm text-gray-500 px-4">OR</div>
                <div className="h-[1px] bg-gray-200 flex-grow"></div>
            </div>

            <div className="flex items-center">
                <Link  to="/login" className='flex justify-center items-center gap-2 text-blue-600 text-sm col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-100 placeholder:text-gray-200 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style={{ width: "16px", height: "16px" }}><path fill="#4285f4" fillOpacity="1" fillRule="evenodd" stroke="none" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path><path fill="#34a853" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"></path><path fill="#fbbc05" fillOpacity="1" fillRule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"></path><path fill="#ea4335" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"></path></svg> Log in with Google</Link>  
            </div>
        </>
    );
}

export default Login;