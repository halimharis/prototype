import { useContext, useEffect } from "react";
import { useModal } from "../../utils/modal";
import BasicModal from "../BasicModal/BasicModal";
import { IParticipantData } from "../ProfileFormModal/ProfileFormModal";
import { CurrentDesign, CurrentUserContext, StepTwoPassed } from "../../App";
import InstructionTaskTwoHelper from "./InstructionTaskTwoHelper";
import InstructionTaskThreeHelper from "./InstructionTaskThreeHelper";
import InstructionTaskZeroHelper from "./InstructionTaskZeroHelper";

interface IInstructionModal {
  currentStep: number;
  nextStep: () => void;
  currentP: IParticipantData;
}

export default function InstructionModal({
  currentP,
  currentStep,
  nextStep,
}: IInstructionModal) {
  const { isOpen, close, open } = useModal();

  useEffect(() => {
    if (currentStep === 2) open();
  }, [currentStep, open]);

  const { passed } = useContext(StepTwoPassed);

  const currentUser = useContext(CurrentUserContext);

  const { isKontrol } = useContext(CurrentDesign);

  const getContent = () => {
    const content = [
      {
        title: `Halo, ${currentP.Nama}`,
        description: [
          "Pada kesempatan kali ini anda akan berpartisipasi dalam beberapa tugas untuk membantu penelitian Abdul Haris Halim pada website siam",
          "Tidak ada benar ataupun salahnya terhadap apapun yang anda lakukan, fokus saja untuk menyelesaikan tugas yang diberikan",
          "Sebelum melanjutkan tanyakan pada moderator anda desain apa yang akan anda gunakan, apakah desain kontrol atau desain treatment",
        ],
        componentHelper: <InstructionTaskZeroHelper />,
        button: {
          label: "OKE, LANJUTKAN",
          onClick: () => {
            if (isKontrol !== null) nextStep();
          },
        },
      },
      {
        title: `Tugas 1`,
        description: [
          "Anda merupakan mahasiswa SIAM yang sudah login kedalam website SIAM dan ingin menambahkan mata kuliah pada kartu rencana studi anda, buka halaman tambah mata kuliah agar anda dapat menambahkan mata kuliah pada kartu rencana studi anda",
        ],
        button: {
          label: "OKE, MENGERTI",
          onClick: () => {
            close();
          },
        },
      },
      {
        title: `Tugas 1`,
        description: [
          "Terima kasih, Anda telah berhasil menyelesaikan tugas 1",
        ],
        button: {
          label: "OKE, LANJUTKAN",
          onClick: nextStep,
        },
      },
      {
        title: `Tugas 2`,
        description: [
          "Anda merupakan mahasiswa SIAM yang sudah login kedalam website SIAM dan ingin menyimpan semua hasil studi anda, simpan hasil studi anda dalam bentuk PDF dan setelah tersimpan, maka buka instruksi ini kembali dan klik tombol sudah tersimpan",
        ],
        componentHelper: (
          <InstructionTaskTwoHelper
            disabled={!passed}
            onClick={nextStep}
            label="Sudah Tersimpan"
          />
        ),
        button: {
          label: "OKE, MENGERTI",
          onClick: () => {
            close();
          },
        },
      },
      {
        title: `Tugas 2`,
        description: [
          "Terima kasih, Anda telah berhasil menyelesaikan tugas 2",
        ],
        button: {
          label: "OKE, LANJUTKAN",
          onClick: nextStep,
        },
      },
      {
        title: `Tugas 3`,
        description: [
          "Anda merupakan mahasiswa SIAM yang sudah login kedalam website SIAM dan ingin melihat hasil studi anda, inputkan pada kolom dibawah ini berapa banyak nilai A yang anda miliki pada studi studi anda sebelumnya dengan mata kuliah ber sks 4",
        ],
        componentHelper: <InstructionTaskThreeHelper />,
        button: {
          label: "OKE, MENGERTI",
          onClick: () => {
            close();
          },
        },
      },
      {
        title: `Selesai`,
        description: [`Terima kasih banyak ${currentUser?.Nama}`],
        button: {
          label: "KEMBALI KE AWAL",
          onClick: () => {
            window.location.reload();
          },
        },
      },
    ];

    return content[currentStep];
  };

  const currentContent = getContent();

  if (!isOpen)
    return (
      <button
        onClick={open}
        className="fixed top-4 left-4 border-white border-2 hover:bg-white hover:text-blue hover:border-blue-dark  py-1 px-4 rounded-md text-white"
      >
        Buka Instruksi
      </button>
    );

  return (
    <BasicModal isOpen={isOpen} close={close} clickOutsideToClose>
      <div className="bg-white py-4 rounded-md px-4 flex flex-col z-10 max-w-sm min-w-[300px]">
        <h2 className="font-bold text-lg pb-3">{currentContent.title}</h2>
        {currentContent.description.map((desc, index) => (
          <p key={index} className=" first:pt-0 last-of-type:mb-4">
            {desc}
          </p>
        ))}
        {currentStep !== 6 && (
          <span className="text-xs mb-1 text-red-700">
            *apabila terdapat hal yang tidak dimengerti bisa ditanyakan
          </span>
        )}
        {currentContent.componentHelper && (
          <>{currentContent.componentHelper}</>
        )}
        <button
          onClick={currentContent.button?.onClick}
          className="py-3 font-bold px-3 border rounded-md bg-blue text-white hover:opacity-90"
        >
          {currentContent.button?.label}
        </button>
      </div>
    </BasicModal>
  );
}
