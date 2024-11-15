import React, { useState, useEffect } from 'react';
import fetchPatientData from './fetchPatientData'; // Ensure this function is asynchronous and returns a list of patients
import NewPatientModal from './NewPatientModal';
import EditPatientModal from './EditPatientModal';

const PatientTable = () => {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(false);

  // Structure to store new patient data
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    admissionDate: '',
    type: '',
    roomNo: '',
    caregiver: ''
  });

  const recordsPerPage = 10;

  // Fetch patient data initially
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPatientData();
      setPatients(data);
    };
    loadData();
  }, []);

  const totalPages = Math.ceil(patients.length / recordsPerPage);
  const currentRecords = patients.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openEditModal = (patient) => {
    setSelectedPatient(patient);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Add new patient with an automatically generated ID
    const newPatientWithId = { ...newPatient, id: `00000${patients.length + 1}` };
    setPatients([...patients, newPatientWithId]);

    // Reset form and close modal
    closeModal();
    setNewPatient({
      name: '',
      age: '',
      admissionDate: '',
      type: '',
      roomNo: '',
      caregiver: ''
    });
  };

  const handleEditSave = (updatedPatient) => {
    const updatedPatients = patients.map((p) =>
      p.id === updatedPatient.id ? updatedPatient : p
    );
    setPatients(updatedPatients);
    closeEditModal();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Patient list</h2>
        <button onClick={openModal} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
          New patient <span className="ml-2 text-xl font-bold">+</span>
        </button>
      </div>

      <NewPatientModal
        showModal={showModal}
        closeModal={closeModal}
        newPatient={newPatient}
        handleChange={handleChange}
        handleSave={handleSave}
      />

      <EditPatientModal
        showModal={showEditModal}
        closeModal={closeEditModal}
        patient={selectedPatient}
        handleSave={handleEditSave}
      />

      <p className="text-gray-500 mb-4">Information about ICU patient</p>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">Patient ID</th>
            <th className="p-2">Patient Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Admission date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Room No</th>
            <th className="p-2">Caregiver</th>
            <th className="p-2">More</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((patient, index) => (
            <tr key={index} className="border-b">
              <td className="p-2"><input type="checkbox" /></td>
              <td className="p-2">{patient.id}</td>
              <td className="p-2">{patient.name}</td>
              <td className="p-2">{patient.age}</td>
              <td className="p-2">{patient.admissionDate}</td>
              <td className="p-2">{patient.type}</td>
              <td className="p-2">{patient.roomNo}</td>
              <td className="p-2">{patient.caregiver}</td>
              <td className="p-2 text-blue-500 cursor-pointer" onClick={() => openEditModal(patient)}>
                Detail
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-gray-600 mt-4">Total number of patients: {patients.length}</p>

      <div className="flex justify-end space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PatientTable;
