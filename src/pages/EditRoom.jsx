import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../validationSchemas/room";
import { useNavigate, useParams } from "react-router";
import roomsData from "../data/rooms";



function EditRoom() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const room = roomsData.find(room =>room.id == id); 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            author: room.author,
            description: room.description
        }
      });

      function onSubmit(data) {
        console.log(data);
      }

    return(
        <>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white p-4 rounded-2xl hover:bg-gray-50 hover:shadow">
                    <h3 className="font-semibold text-indigo-500 text-2xl">Add new room</h3>
                    <div>
                        <input {...register("author")} className="mt-3 col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" type="text" id="author" placeholder="Author" />
                        {errors.author && (<span className='text-sm text-red-500'>{errors.author.message}</span>)}

                    </div>

                    <div>
                        <textarea {...register("description")} className="mt-3 col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" id="description" placeholder="Enter your description..."></textarea>
                        {errors.description && (<span className='text-sm text-red-500'>{errors.description.message}</span>)}
                    </div>

                    <input type="submit" value="Update" className="mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focusVisible:outline focusVisible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                </div>
            </form>
            <div className='flex justify-items-end '>
                <button onClick={() => navigate(-1)}  className='text-blue-600 text-sm'>Back</button>
            </div>
        </>
    );
}

export default Editroom;