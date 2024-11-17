import EmergencyCases from "./home-components/EmergencyCases";
import GeneralInfo from "./home-components/GeneralInfo";
import PatientList from "./home-components/PatientList";
import AdmissionEvent from "./home-components/AdmissionEvent";
import AdmissionUrgency from "./home-components/AdmissionUrgency";
import PatientLoad from "./home-components/PatientLoad";
import PatientStatistics from "./home-components/PatientStatistics";

export const Home = () => (
  <div className="flex w-full min-h-screen h-full flex-col items-center p-[46px] gap-[40px]">
    <section className="first-section w-full h-[348px] gap-[40px] flex justify-between">
      <div className="1-left-section basis-1/3">
        <GeneralInfo />
      </div>
      <div className="1-right-section basis-2/3 overflow-hidden">
        <EmergencyCases />
      </div>
    </section>
    <section className="second-section gap-[40px] w-full h-[703px] flex">
      <div className="2-left-section gap-[40px] flex flex-col basis-3/4">
        <div className="2-l-top-section basis-1/2">
          <PatientList />
        </div>
        <div className="2-l-bot-section gap-[40px] flex basis-1/2">
          <div className="basis-1/2">
            <AdmissionUrgency />
          </div>
          <div className="basis-1/2">
            <PatientLoad />
          </div>
        </div>
      </div>
      <div className="2-right-section basis-1/4">
        <AdmissionEvent />
      </div>
    </section>
    <section className="third-section w-full h-[440px]">
      <PatientStatistics />
    </section>
  </div>
);
