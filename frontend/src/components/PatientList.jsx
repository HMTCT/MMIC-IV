import React, { useState, useEffect } from 'react';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5; // Adjust this as per your needs

  useEffect(() => {
    // Fetch patient data when the component mounts
    const fetchData = async () => {
      const data = await fetchPatientData();
      setPatients(data);
    };

    fetchData();
  }, []);

  const fetchPatientData = () => {
    // Mock patient data for now
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = Array.from({ length: 50 }).map((_, index) => ({
          patientId: `00000${index + 1}`,
          name: `Nguyen Thi ${String.fromCharCode(66 + index)}`,
          age: 46 + index,
          admissionDate: '18/07/2024',
          type: index % 2 === 0 ? 'Urgent' : 'Regular',
          roomNo: 123 + index,
          caregiver: `Tran Thi ${String.fromCharCode(67 + index)}`,
        }));
        resolve(data);
      }, 500);
    });
  };

  // Get the patients to display for the current page
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-blue-100 min-h-screen p-8">
      {/* Header and Navigation */}
      <div className="w-full bg-[#0D5074] p-4 flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded bg-blue-700 text-white font-semibold">Overview</button>
          <button className="px-4 py-2 rounded bg-white text-blue-700 font-semibold border border-blue-700">Patient</button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white font-semibold">Nguyen Van A</span>
          <span className="text-gray-200">Admin</span>
          <div className="bg-gray-300 p-2 rounded-full"></div>
        </div>
      </div>

      {/* Patient list */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold">Patient list</h2>
            <p className="text-gray-500">Information about ICU patient</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded font-semibold">
            <span>New patient</span>
            <span className="text-lg font-bold">+</span>
          </button>
        </div>

        {/* Table of patients */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2">Patient ID</th>
                <th className="px-4 py-2">Patient Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Admission date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Room No</th>
                <th className="px-4 py-2">Caregiver</th>
                <th className="px-4 py-2">More</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((patient, index) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="px-4 py-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{patient.patientId}</td>
                  <td className="px-4 py-2">{patient.name}</td>
                  <td className="px-4 py-2">{patient.age}</td>
                  <td className="px-4 py-2">{patient.admissionDate}</td>
                  <td className="px-4 py-2">{patient.type}</td>
                  <td className="px-4 py-2">{patient.roomNo}</td>
                  <td className="px-4 py-2">{patient.caregiver}</td>
                  <td className="px-4 py-2 text-blue-700 cursor-pointer">Detail</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total number of patients */}
        <p className="text-gray-500 mt-4">Total number of patients: {patients.length}</p>

        {/* Pagination */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700"
          >
            &lt;
          </button>
          {Array.from({ length: Math.ceil(patients.length / patientsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(patients.length / patientsPerPage)}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
