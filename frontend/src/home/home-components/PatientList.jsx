import "../../styles/test.css";

const data = [
  {
    patient_id: "000001",
    patient_name: "Nguyen Van A",
    admission_date: "18/07/2024",
    type: "Urgent",
    room_no: "123",
    caregiver: "Nguyen Van B",
  },
  {
    patient_id: "000001",
    patient_name: "Nguyen Van A",
    admission_date: "18/07/2024",
    type: "Urgent",
    room_no: "123",
    caregiver: "Nguyen Van B",
  },
  {
    patient_id: "000001",
    patient_name: "Nguyen Van A",
    admission_date: "18/07/2024",
    type: "Urgent",
    room_no: "123",
    caregiver: "Nguyen Van B",
  },
];

const PatientList = () => {
  return (
    <div className="w-full h-full bg-white rounded-[18px] flex flex-col gap-[16px] p-[24px] overflow-hidden">
      <div className="title-section flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-black text-xl font-semibold leading-[normal]">
            Patient list
          </p>
          <p className="text-black text-sm font-normal leading-[normal]">
            Information about ICU patient
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <p className="text-black text-base font-semibold leading-[normal]">
            New patient
          </p>
          <div className="size-[40px] bg-[#EDEDED] hover:bg-[#BDBDBD] rounded-[8px] flex justify-center items-center">
            <img className="size-[32px]" src="src/assets/new.png" alt="new" />
          </div>
        </div>
      </div>
      <div className="table-section w-full max-h-[204px] overflow-y-auto">
        <table className="w-full table-fixed rounded-[8px] overflow-hidden">
          <thead>
            <tr className="bg-[#EDEDED]">
              <th className="py-[8px] text-center">Patient ID</th>
              <th className="py-[8px] text-center">Patient Name</th>
              <th className="py-[8px] text-center">Admission Date</th>
              <th className="py-[8px] text-center">Type</th>
              <th className="py-[8px] text-center">Room No</th>
              <th className="py-[8px] text-center">Caregiver</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="h-[40px]">
                <td className="py-[8px] text-center">{item.patient_id}</td>
                <td className="py-[8px] text-center">{item.patient_name}</td>
                <td className="py-[8px] text-center">{item.admission_date}</td>
                <td className="py-[8px] text-center">{item.type}</td>
                <td className="py-[8px] text-center">{item.room_no}</td>
                <td className="py-[8px] text-center">{item.caregiver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
