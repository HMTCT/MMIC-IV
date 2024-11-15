import React, { useState, useEffect } from 'react';

const EditPatientModal = ({ showModal, closeModal, patient, handleSave }) => {
  const [formData, setFormData] = useState(patient || {});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(patient || {});
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.roomNo) newErrors.roomNo = 'Room number is required';
    // Add other validations if necessary
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClick = () => {
    if (validate()) {
      handleSave(formData);
      closeModal();
    }
  };

  if (!showModal || !patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Details</h3>
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
              <label className="block text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
              <input
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
              <input
                name="name"
                value={''}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date of birth <span className="text-red-500">*</span></label>
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Gender <span className="text-red-500">*</span></label>
              <select
                name="gender"
                value={formData.gender}
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
                value={formData.ssn}
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
                value={formData.phoneNumber}
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
                value={formData.address}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Insurance</label>
              <input
                name="insurance"
                placeholder="HS0123456789"
                value={formData.insurance}
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

export default EditPatientModal;
