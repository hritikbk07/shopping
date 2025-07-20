import React from 'react'
import Slidebar from './Slidebar'

const AdminQuery = () => {
  return (
    <div className='flex mt-16'>
        <Slidebar/>
        <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>
                Query Management📧
            </h1>
            

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S.No.
                </th>
                <th scope="col" class="px-6 py-3">
                    User Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Query
                </th>
                <th scope="col" class="px-6 py-3">
                    Email-id
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action-1
                </th>
                <th scope="col" class="px-6 py-3">
                    Action-2
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td class="px-6 py-4">
                 hritik
                </td>
                <td class="px-6 py-4">
                    mern
                </td>
                <td class="px-6 py-4">
                    mail@gmail.com
                </td>
                <td class="px-6 py-4">
                    <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">unread</button>
                </td>
                <td class="px-6 py-4">
                    <button  className="text-xs bg-green-600 text-white px-3 py-1 rounded">Reply</button>
                    </td>
                    <td class="px-6 py-4">
                    <button  className="text-xs bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    </div>
  )
}

export default AdminQuery