import { useModal } from "../../utils/modal";
import BasicModal from "../BasicModal/BasicModal";

interface IInitialModal {
  setChoice: (choice: boolean) => void;
}

export default function InitialModal({ setChoice }: IInitialModal) {
  const { isOpen, close } = useModal();

  return (
    <BasicModal isOpen={isOpen} close={close} clickOutsideToClose>
      <div className="bg-white py-4 rounded-md px-4 flex gap-6 z-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Halo Mahasiswa Brawijaya,</h1>
          <p className="text-sm">
            Ini adalah prototipe website SIAM <br />
            yang telah dibuat oleh Abdul Haris Halim <br />
            dalam rangka melakukan penelitian <br />
            pada tampilan website SIAM,
            <br />
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            Untuk itu, apakah anda ingin <br />
            mengakses prototipe website ini <br />
            sebagai partisipan penelitian ?
          </p>
          <div className="flex text-sm mt-auto justify-between">
            <button
              onClick={() => {
                setChoice(false);
                close();
              }}
              className="py-1 px-3 border rounded-md border-blue text-blue"
            >
              Tidak
            </button>
            <button
              onClick={() => {
                setChoice(true);
                close();
              }}
              className="py-1 px-3 border rounded-md bg-blue text-white"
            >
              Sebagai Partisipan
            </button>
          </div>
        </div>
      </div>
    </BasicModal>
  );
}
