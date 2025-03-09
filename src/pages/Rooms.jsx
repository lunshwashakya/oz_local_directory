import roomsData from "../data/rooms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../validationSchemas/search";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Rooms() {
    let [allRooms, SetAllRooms] = useState(roomsData);
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });


    const onSubmit = (data) => {
        const query = data.query;
        const filteredRooms = roomsData.filter(room => room.author.includes(query) || room.description.includes(query));
        SetAllRooms(filteredRooms);
        console.log(filteredRooms);
    }

    function deleteRoom(id) {
        const filteredRooms = allRooms.filter(room => room.id !== id);
        setAllRooms(filteredRooms);
    }

    return(
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-center">All Rooms</h2>

                <Link to="/rooms/new" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focusVisible:outline focusVisible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add new room</Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('query')} className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" type="search" placeholder='Search for rooms...' id="query" />
                {errors.query && (<span className="text-red-500">{errors.query.message}</span>)}
            </form>

            {
                allRooms.map(room => (
                    <div  key={room.id} className="bg-white p-4 rounded hover:bg-gray-50 hover:shadow">
                         <div className="flex justify-between items-center">
                                <h3 onClick={() => navigate(`/rooms/${room.id}`)} className="font-semibold text-indigo-500 text-2xl">{room.author}</h3>

                                <div  className="flex gap-2">
                                    <Link to={`/rooms/${room.id}/edit`} className="text-sm text-gray-400">Edit</Link>
                                    <button onClick={() => deleteJob(room.id)} className="text-sm  text-red-400">Delete</button>
                                </div>
                        </div>
                        <p onClick={() => navigate(`/rooms/${room.id}`)}>{room.description}</p>
                    </div>
                ))
            }

            
        </>
    );
}

export default Rooms;
