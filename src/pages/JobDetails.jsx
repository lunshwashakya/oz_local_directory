import {Link, useParams } from 'react-router';
import jobsData from '../data/jobs';



function JobDetails() {

    const params = useParams();
    const id = params.id;
    const job = jobsData.find(job =>job.id == id); 

    return(
        <>
            <div className="bg-white p-4 rounded-2xl hover:bg-gray-50 hover:shadow">
                <div className='flex justify-between  items-center'>
                    <h3 className="font-semibold text-indigo-500 text-2xl">{job.author}</h3>
                    
                    <div className="flex gap-2">
                        <Link to={`/jobs/${id}/edit`} className='text-sm text-gray-400'>Edit</Link>
                        <button className='text-sm text-red-400'>Delete</button>
                    </div>
                </div>
                <p>{job.description}</p>
            </div>

            <div className='flex justify-between '>
                <Link to="/jobs" className='text-blue-600 text-sm'>All Jobs</Link>
            </div>
        </>
    );
}

export default JobDetails;