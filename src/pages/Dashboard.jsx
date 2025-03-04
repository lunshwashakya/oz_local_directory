import { Link } from 'react-router';

function Dashboard() {
    return (
        <div className="flex gap-3 justify-center items-center">
            <Link to="/jobs" className="p-4 px-10 text-4xl bg-indigo-600 text-white rounded-2xl hover:bg-indigo-800">Jobs</Link>
            <Link to="/rooms" className="p-4 px-10 text-4xl bg-indigo-600 text-white rounded-2xl hover:bg-indigo-800">Rooms</Link>
        </div>
    )
}

export default Dashboard;