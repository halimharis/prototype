import { useModal } from "../../utils/modal";
import BasicModal from "../BasicModal/BasicModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { callApi } from "../../utlils";

export interface IParticipantData {
  Nim: number;
  Nama: string;
  Jurusan: string;
}

interface IProfileFormModal {
  setCurrentPartipant: (data: IParticipantData) => void;
}

export default function ProfileFormModal({
  setCurrentPartipant,
}: IProfileFormModal) {
  const { isOpen, close } = useModal();

  const { register, handleSubmit, formState } = useForm<IParticipantData>({
    mode: "onChange",
  });

  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<IParticipantData> = (dataResponden) => {
    const formatter = new Intl.DateTimeFormat("id", {
      dateStyle: "short",
      timeStyle: "short",
    });
    const date = new Date();
    const tanggalSubmit = formatter.format(date);

    callApi("profile", [
      { key: "Nim", value: dataResponden.Nim.toString() },
      { key: "Nama", value: dataResponden.Nama },
      { key: "Jurusan", value: dataResponden.Jurusan },
      { key: "Tanggal", value: tanggalSubmit },
    ]);

    setCurrentPartipant({
      Nim: dataResponden.Nim,
      Nama: dataResponden.Nama,
      Jurusan: dataResponden.Jurusan,
    });
  };

  return (
    <BasicModal isOpen={isOpen} close={close} clickOutsideToClose={false}>
      <div className="bg-white pt-5 pb-6 rounded-md px-6 flex gap-6 z-10 flex-col">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg ">MASUKKAN DATA DIRI</h2>
          <span className="leading-5">
            Data diri anda akan terjamin aman dan hanya
            <br /> digunakan untuk keperluan penelitian skripsi
          </span>
        </div>
        <form
          className="flex flex-col text-sm  gap-2 min-w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col-reverse relative">
            <input
              placeholder=" "
              className="border-2 placeholder-shown:border-gray-300 border-gray-600 rounded-md py-[6px] pt-5 px-4 peer"
              {...register("Nim", { required: true })}
            />
            <span className="absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:left-6 left-4 peer-focus-within:top-[6px]  peer-focus-within:left-4 peer-focus-within:translate-y-0 top-[6px] translate-y-0 transition-all opacity-60 text-xs peer-focus-within:text-xs">
              Nomor Induk Mahasiswa (NIM)
            </span>
          </label>
          <label className="flex flex-col-reverse relative">
            <input
              placeholder=" "
              className="border-2 placeholder-shown:border-gray-300 border-gray-600 rounded-md py-[6px] pt-5 px-4 peer"
              {...register("Nama", { required: true })}
            />
            <span className="absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:left-6 left-4 peer-focus-within:top-[6px]  peer-focus-within:left-4 peer-focus-within:translate-y-0 top-[6px] translate-y-0 transition-all opacity-60 text-xs peer-focus-within:text-xs">
              Nama Mahasiswa
            </span>
          </label>
          <label className="flex flex-col-reverse relative">
            <input
              placeholder=" "
              className="border-2 placeholder-shown:border-gray-300 border-gray-600 rounded-md py-[6px] pt-5 px-4 peer"
              {...register("Jurusan", { required: true })}
            />
            <span className="absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:left-6 left-4 peer-focus-within:top-[6px]  peer-focus-within:left-4 peer-focus-within:translate-y-0 top-[6px] translate-y-0 transition-all opacity-60 text-xs peer-focus-within:text-xs">
              Jurusan Mahasiswa
            </span>
          </label>
          <button
            disabled={isSubmitting}
            type="submit"
            className="py-3 mt-4 font-bold px-3 border rounded-md bg-blue text-white disabled:opacity-50 hover:opacity-90"
          >
            <span>SUBMIT DATA</span>
          </button>
        </form>
      </div>
    </BasicModal>
  );
}
