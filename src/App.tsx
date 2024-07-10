import { createContext, useEffect, useState } from "react";
import Home from "./pages/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InitialModal from "./component/InitialModal/InitialModal";
import ProfileFormModal, {
  IParticipantData,
} from "./component/ProfileFormModal/ProfileFormModal";
import InstructionModal from "./component/InstructionModal/InstructionModal";
import { callApi } from "./utlils";

interface IStepContext {
  step: number;
  nextStep: () => void;
}

interface IStepTwoPassed {
  passed: boolean;
  togglePassed: () => void;
}

interface IStepThreeReady {
  ready: boolean;
  toggleReady: () => void;
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
export const StepThreeReady = createContext<IStepThreeReady>({
  ready: false,
  toggleReady: () => {},
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
  const [isStepThreeReady, setIsStepThreeReady] = useState(false);

  const setParticipant = (choice: boolean) => {
    setIsParticipant(choice);
  };

  const setCurrentParticipant = (data: IParticipantData) => setCurrentP(data);

  const nextStep = () => setStep((prev) => prev + 1);

  const togglePassed = () => setPassed(true);

  const toTreatment = () => setIsKontrol(false);

  const toControl = () => setIsKontrol(true);

  const initCount = () => setStartTime(new Date());

  const toggleReady = () => setIsStepThreeReady(true);

  useEffect(() => {
    if (step !== 1) return;

    if (currentP === null) return;

    if (isKontrol === null) return;

    callApi("editSpecial", [
      { key: "nim", value: currentP?.Nim.toString() },
      { key: "value", value: isKontrol.toString() },
    ]);
  }, [step, currentP, isKontrol]);

  const countTime = () => {
    if (currentP === null) return;
    if (startTime === null) return;
    const endTime = new Date();
    const diffTime = +endTime - +startTime;

    const key = () => {
      if (step === 1) return "1";
      if (step === 3) return "2";
      if (step === 5) return "3";
      return "";
    };

    callApi("edit", [
      { key: "nim", value: currentP.Nim.toString() },
      { key: "taskNumber", value: key() },
      {
        key: "mulai",
        value: new Intl.DateTimeFormat("id", {
          timeStyle: "long",
        }).format(startTime),
      },
      {
        key: "selesai",
        value: new Intl.DateTimeFormat("id", {
          timeStyle: "long",
        }).format(endTime),
      },
      { key: "pengerjaan", value: diffTime.toString() },
    ]);

    setStartTime(null);
  };

  return (
    <div className="flex justify-center w-full mb-8">
      <TimeContext.Provider value={{ startTime, countTime, initCount }}>
        <CurrentDesign.Provider value={{ isKontrol, toTreatment, toControl }}>
          <CurrentUserContext.Provider value={currentP}>
            <StepContext.Provider value={{ step, nextStep }}>
              <StepTwoPassed.Provider value={{ passed, togglePassed }}>
                <StepThreeReady.Provider
                  value={{ ready: isStepThreeReady, toggleReady }}
                >
                  <Home />
                  <ToastContainer />
                  <InitialModal setChoice={setParticipant} />
                  {isParticipant && currentP === null && (
                    <ProfileFormModal
                      setCurrentPartipant={setCurrentParticipant}
                    />
                  )}
                  {currentP && <InstructionModal />}
                </StepThreeReady.Provider>
              </StepTwoPassed.Provider>
            </StepContext.Provider>
          </CurrentUserContext.Provider>
        </CurrentDesign.Provider>
      </TimeContext.Provider>
    </div>
  );
}
