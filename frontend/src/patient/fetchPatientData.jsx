// Function to generate 150 dummy patient records
const fetchPatientData = () => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: `00000${i + 1}`,
      name: `Nguyen Thi B ${i + 1}`,
      age: 46,
      admissionDate: '18/07/2024',
      type: 'Urgent',
      roomNo: 123,
      caregiver: 'Tran Thi C'
    }));
  };

export default fetchPatientData;