import React from 'react';
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300 hover:bg-gray-50 transition'>
      <th className='px-2 py-4 text-gray-600'>{index}</th>
      <td className='px-2 py-4 font-medium text-gray-600'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden text-gray-600'>
        {BlogDate.toDateString()}
      </td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${isPublished ? 'text-green-600' : 'text-orange-700'}`}>
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          className='w-5 hover:scale-110 transition-all cursor-pointer'
          alt='cross icon'
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
