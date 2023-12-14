import { createContext, useState } from "react";
import Home from "./pages/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InitialModal from "./component/InitialModal/InitialModal";
import ProfileFormModal, {
  IParticipantData,
} from "./component/ProfileFormModal/ProfileFormModal";
import InstructionModal from "./component/InstructionModal/InstructionModal";
import axios from "axios";

interface IStepContext {
  step: number;
  nextStep: () => void;
}

interface IStepTwoPassed {
  passed: boolean;
  togglePassed: () => void;
}

interface ICurrentDesign {
  isKontrol: boolean | null;
  toTreatment: () => void;
  toControl: () => void;
}

interface ITimeContext {
  startTime: Date | null;
  initCount: () => void;
  countTime: () => void;
}

export const CurrentUserContext = createContext<IParticipantData | null>(null);
export const StepContext = createContext<IStepContext>({
  step: 0,
  nextStep: () => {},
});
export const StepTwoPassed = createContext<IStepTwoPassed>({
  passed: false,
  togglePassed: () => {},
});
export const CurrentDesign = createContext<ICurrentDesign>({
  isKontrol: null,
  toTreatment: () => {},
  toControl: () => {},
});
export const TimeContext = createContext<ITimeContext>({
  startTime: null,
  initCount: () => {},
  countTime: () => {},
});

export default function App() {
  const [isParticipant, setIsParticipant] = useState(false);
  const [currentP, setCurrentP] = useState<IParticipantData | null>(null);
  const [step, setStep] = useState(0);
  const [passed, setPassed] = useState(false);
  const [isKontrol, setIsKontrol] = useState<boolean | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const setParticipant = (choice: boolean) => {
    setIsParticipant(choice);
  };

  const setCurrentParticipant = (data: IParticipantData) => setCurrentP(data);

  const nextStep = () => setStep((prev) => prev + 1);

  const togglePassed = () => setPassed(true);

  const toTreatment = () => setIsKontrol(false);

  const toControl = () => setIsKontrol(true);

  const initCount = () => setStartTime(new Date());

  const countTime = () => {
    console.log("masok");
    console.log(startTime);
    if (currentP === null) return;
    if (startTime === null) return;
    const endTime = new Date();
    const diffTime = +endTime - +startTime;

    const key = () => {
      if (step === 1) return "Task 1";
      if (step === 3) return "Task 2";
      if (step === 5) return "Task 3";
      return "";
    };

    const dataTask = {
      [`Waktu Mulai ${key()}`]: new Intl.DateTimeFormat("id", {
        timeStyle: "long",
      }).format(startTime),
      [`Waktu Selesai ${key()}`]: new Intl.DateTimeFormat("id", {
        timeStyle: "long",
      }).format(endTime),
      [`Waktu Pengerjaan ${key()}`]: diffTime,
    };

    setStartTime(null);

    axios
      .patch(
        `https://sheet.best/api/sheets/4e2181cc-a70c-4f45-aa09-9fdc6853cfbf/Nama/${currentP.Nama}`,
        dataTask
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center w-full mb-8">
      <TimeContext.Provider value={{ startTime, countTime, initCount }}>
        <CurrentDesign.Provider value={{ isKontrol, toTreatment, toControl }}>
          <CurrentUserContext.Provider value={currentP}>
            <StepContext.Provider value={{ step, nextStep }}>
              <StepTwoPassed.Provider value={{ passed, togglePassed }}>
                <Home />
                <ToastContainer />
                <InitialModal setChoice={setParticipant} />
                {isParticipant && currentP === null && (
                  <ProfileFormModal
                    setCurrentPartipant={setCurrentParticipant}
                  />
                )}
                {currentP && <InstructionModal />}
              </StepTwoPassed.Provider>
            </StepContext.Provider>
          </CurrentUserContext.Provider>
        </CurrentDesign.Provider>
      </TimeContext.Provider>
    </div>
  );
}
