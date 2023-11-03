import { useContext } from "react";
import {
  CurrentDesign,
  CurrentUserContext,
  StepContext,
  StepTwoPassed,
  TimeContext,
} from "../App";
import InstructionTaskZeroHelper from "../component/InstructionModal/InstructionTaskZeroHelper";
import InstructionTaskTwoHelper from "../component/InstructionModal/InstructionTaskTwoHelper";
import InstructionTaskThreeHelper from "../component/InstructionModal/InstructionTaskThreeHelper";

export const useModalContent = (closeFunction: () => void) => {
  const currentUser = useContext(CurrentUserContext);
  const { isKontrol } = useContext(CurrentDesign);
  const { nextStep, step } = useContext(StepContext);
  const { passed } = useContext(StepTwoPassed);
  const { initCount } = useContext(TimeContext);

  const content = [
    {
      title: `Halo, ${currentUser?.Nama}`,
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
          closeFunction();
          initCount();
        },
      },
    },
    {
      title: `Tugas 1`,
      description: [
        "Terima kasih, Anda telah berhasil menyelesaikan tugas 1, silahkan lanjutkan ke tugas selanjutnya dalam penelitian",
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
          closeFunction();
          initCount();
        },
      },
    },
    {
      title: `Tugas 2`,
      description: [
        "Terima kasih, Anda telah berhasil menyelesaikan tugas 2, silahkan lanjutkan ke tugas selanjutnya dalam penelitian",
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
          closeFunction();
          initCount();
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

  return content[step];
};
