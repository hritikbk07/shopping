import React from 'react'

const Contacts = () => {
  return (

      <div className='max-w-3xl mx-auto mt-24 p-6 bg-white ronded-xl shadow-md '>
        <h2 className='text-green-500 text-2xl text-center font-bold mb-4'>Query Form</h2>
         <form action="" >
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="userName"
          id=""
          placeholder="Your Name..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Email
        </label>
        <input
          type="Your Email..."
          name="userEmail"
          id=""
          placeholder="e.g Freash Fruits"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label htmlFor="" className="block text-gray-700 font-medium mb-1">
          Your Query...
        </label>
        <textarea
          name="userQuery"
          id=""
          placeholder=" Your Query..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
        <button className="w-full bg-green-500 py-2 text-white rounded mt-3 hover:bg-green-700 transition">
          Submit Query 📧
        </button>
      </form>
     </div>

  )
}

export default Contacts