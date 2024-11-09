import React, { useState } from 'react';

const NewPatientModal = ({ showModal, closeModal, newPatient, handleChange, handleSave }) => {
  const [errors, setErrors] = useState({});

  if (!showModal) return null;

  const validate = () => {
    const newErrors = {};
    if (!newPatient.lastName) newErrors.lastName = 'Last name is required';
    if (!newPatient.firstName) newErrors.firstName = 'First name is required';
    if (!newPatient.dob) newErrors.dob = 'Date of birth is required';
    if (!newPatient.gender) newErrors.gender = 'Gender is required';
    if (!newPatient.ssn) newErrors.ssn = 'SSN is required';
    if (!newPatient.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!newPatient.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClick = () => {
    if (validate()) {
      handleSave(); // Gọi hàm handleSave từ props
      closeModal(); // Đóng popup sau khi lưu thành công
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">New patient</h3>
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>

        <div className="p-6">
          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button className="py-2 px-4 text-blue-600 font-semibold border-b-2 border-blue-600">General</button>
            <button className="py-2 px-4 text-gray-600 hover:text-blue-600">Admission</button>
            <button className="py-2 px-4 text-gray-600 hover:text-blue-600">ICU Stay</button>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Last name <span className="text-red-500">*</span></label>
              <input
                name="lastName"
                placeholder="Nguyen"
                value={newPatient.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">First name <span className="text-red-500">*</span></label>
              <input
                name="firstName"
                placeholder="Van A"
                value={newPatient.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Date of birth <span className="text-red-500">*</span></label>
              <input
                name="dob"
                type="date"
                value={newPatient.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Gender <span className="text-red-500">*</span></label>
              <select
                name="gender"
                value={newPatient.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">SSN <span className="text-red-500">*</span></label>
              <input
                name="ssn"
                placeholder="0123456789"
                value={newPatient.ssn}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.ssn && <p className="text-red-500 text-xs">{errors.ssn}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Phone number <span className="text-red-500">*</span></label>
              <input
                name="phoneNumber"
                placeholder="0123456789"
                value={newPatient.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Address <span className="text-red-500">*</span></label>
              <input
                name="address"
                placeholder="268 Ly Thuong Kiet, Phuong 14, Quan 10, Ho Chi Minh City"
                value={newPatient.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                placeholder="nguyenvana@gmail.com"
                value={newPatient.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Insurance</label>
              <input
                name="insurance"
                placeholder="HS0123456789"
                value={newPatient.insurance}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
            <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPatientModal;
