const fetchPatientData = () => {
  const genders = ['Male', 'Female'];

  return Array.from({ length: 150 }, (_, i) => ({
    id: `00000${i + 1}`,
    name: `Nguyen Thi B ${i + 1}`,
    age: 46,
    admissionDate: '18/07/2024',
    type: 'Urgent',
    roomNo: 123,
    caregiver: 'Tran Thi C',
    address: '',
    SSN: '',
    gender: genders[Math.floor(Math.random() * genders.length)], // Random gender selection
  }));
};

export default fetchPatientData;
