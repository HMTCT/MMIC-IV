// src/NewPatientForm.jsx
// import React from 'react';

export default function NewPatientForm() {
  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">New patient</h2>
        
        {/* Tab Menu */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 rounded bg-blue-700 text-white font-semibold">General</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold">Admission</button>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold">ICU Stay</button>
        </div>
        
        {/* Form */}
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Last name *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="Nguyen" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">First name *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="Van A" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date of birth *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="mm/dd/yyyy" value="10/03/2024" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Gender *</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">SSN *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="0123456789" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone number *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="0123456789" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Address *</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="268 Ly Thuong Kiet, Phuong 14, Quan 10, Thanh pho Ho Chi Minh, Viet Nam" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" value="nguyenvana@gmail.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Insurance</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="HS0123456789" />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded font-medium">Cancel</button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded font-medium">Save</button>
        </div>
      </div>
    </div>
  );
}


