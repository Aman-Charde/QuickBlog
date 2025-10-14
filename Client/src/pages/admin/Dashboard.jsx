import React, { useState, useEffect } from 'react';
import { assets } from "../../assets/assets";
import BlogTableItem from '../../components/admin/BlogTableItem';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  });

  const fetchDashboard = async () => {
    // Mock data for demonstration
    const data = {
      blogs: 12,
      comments: 45,
      drafts: 3,
      recentBlogs: [
        {
          _id: 1,
          title: "How to Master React in 2025",
          createdAt: "2025-10-10T12:00:00Z",
          isPublished: true
        },
        {
          _id: 2,
          title: "Understanding Node.js Performance",
          createdAt: "2025-10-12T09:30:00Z",
          isPublished: false
        }
      ]
    };
    setDashboardData(data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      {/* Stats Cards */}
      <div className='flex flex-wrap gap-4'>

        {/* Blogs Card */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-[230px] rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt="icon" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>

        {/* Comments Card */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-[230px] rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt="icon" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>

        {/* Drafts Card */}
        <div className='flex items-center gap-4 bg-white p-4 min-w-[230px] rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt="icon" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>

      </div>

      {/* Recent Blogs Section */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4} alt="" />
          <p className='font-semibold text-lg'>Latest Blogs</p>
        </div>

        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase bg-gray-50'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Blog Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
