
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from './../../../hooks/useAuth';
import { FaProductHunt, FaUser } from 'react-icons/fa';


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({

        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')

            return res.data;

        }

    })
    return (
        <div className="p-4">
  <h2 className='text-3xl text-center sm:text-left'>
    <span> Hi welcome </span>
    {user?.displayName ? user.displayName : 'Back'}
  </h2>

  <div className="stats shadow mt-4 text-lg bg-red-200 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="stat p-4 sm:p-8 lg:p-12">
      <div className="stat-figure text-secondary">
        <FaUser className="text-3xl sm:text-4xl lg:text-5xl" />
      </div>
      <div className="stat-title text-white">Users</div>
      <div className="stat-value">{stats?.users}</div>
    </div>

    <div className="stat p-4 sm:p-8 lg:p-12">
      <div className="stat-figure text-secondary">
        <FaProductHunt className="text-3xl sm:text-4xl lg:text-5xl" />
      </div>
      <div className="stat-title text-white">Products</div>
      <div className="stat-value">{stats?.products}</div>
    </div>

    <div className="stat p-4 sm:p-8 lg:p-12">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      </div>
      <div className="stat-title text-white">Orders</div>
      <div className="stat-value">{stats?.orders}</div>
    </div>
  </div>
</div>

    );
};

export default AdminHome;