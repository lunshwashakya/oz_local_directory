import {Link, useParams } from 'react-router';
import roomsData from '../data/rooms';



function roomDetails() {

    const params = useParams();
    const id = params.id;
    const room = roomsData.find(room =>room.id == id); 

    return(
        <>
            <div className="bg-white p-4 rounded-2xl hover:bg-gray-50 hover:shadow">
                <div className='flex justify-between  items-center'>
                    <h3 className="font-semibold text-indigo-500 text-2xl">{room.author}</h3>
                    
                    <div className="flex gap-2">
                        <Link to={`/rooms/${id}/edit`} className='text-sm text-gray-400'>Edit</Link>
                        <button className='text-sm text-red-400'>Delete</button>
                    </div>
                </div>
                <p>{room.description}</p>
            </div>

            <div className='flex justify-between '>
                <Link to="/rooms" className='text-blue-600 text-sm'>All rooms</Link>
            </div>
        </>
    );
}

export default roomDetails;