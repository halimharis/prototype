import { createContext, useState } from "react";
import Home from "./pages/Home/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InitialModal from "./component/InitialModal/InitialModal";
import ProfileFormModal, {
  IParticipantData,
} from "./component/ProfileFormModal/ProfileFormModal";
import InstructionModal from "./component/InstructionModal/InstructionModal";

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

export default function App() {
  const [isParticipant, setIsParticipant] = useState(false);
  const [currentP, setCurrentP] = useState<IParticipantData | null>(null);
  const [step, setStep] = useState(0);
  const [passed, setPassed] = useState(false);
  const [isKontrol, setIsKontrol] = useState<boolean | null>(null);

  const setParticipant = (choice: boolean) => {
    setIsParticipant(choice);
  };

  const setCurrentParticipant = (data: IParticipantData) => setCurrentP(data);

  const nextStep = () => setStep((prev) => prev + 1);

  const togglePassed = () => setPassed(true);

  const toTreatment = () => setIsKontrol(false);

  const toControl = () => setIsKontrol(true);

  return (
    <div className="flex justify-center w-full mb-8">
      <CurrentDesign.Provider value={{ isKontrol, toTreatment, toControl }}>
        <CurrentUserContext.Provider value={currentP}>
          <StepContext.Provider value={{ step, nextStep }}>
            <StepTwoPassed.Provider value={{ passed, togglePassed }}>
              <Home />
              <ToastContainer />
              <InitialModal setChoice={setParticipant} />
              {isParticipant && currentP === null && (
                <ProfileFormModal setCurrentPartipant={setCurrentParticipant} />
              )}
              {currentP && (
                <InstructionModal
                  currentP={currentP}
                  currentStep={step}
                  nextStep={nextStep}
                />
              )}
            </StepTwoPassed.Provider>
          </StepContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentDesign.Provider>
    </div>
  );
}
