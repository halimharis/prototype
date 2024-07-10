import { useContext } from "react";
import LittleDetail from "./LittleDetail";
import { CurrentUserContext } from "../../../App";

interface IDetails {
  Nim: string | number;
  Nama: string;
  details: {
    "Jenjang/Fakultas": string;
    Jurusan: string;
    "Program Studi": string;
    Seleksi: string;
    "Nomor Ujian": string;
    "PDDIKTI KEMDIKBUD": string;
    Status: boolean;
  };
}

export default function Details({ Nim, Nama, details }: IDetails) {
  const tmp = useContext(CurrentUserContext);

  const nimUser = tmp !== null ? tmp.Nim : "0";

  return (
    <div className=" flex grow gap-6 text-xs">
      <img
        src={`https://siakad.ub.ac.id/dirfoto/foto/foto_2020/${nimUser}.jpg`}
        className="bg-red min-w-[100px] h-[100px] object-cover object-top"
      />
      <div className="flex flex-col">
        <div className="text-green font-bold pb-[2px]">{Nim}</div>
        <div className="pb-[2px] font-bold uppercase">{Nama}</div>
        {Object.entries(details).map((detail) => (
          <LittleDetail
            key={detail[0]}
            detail={detail[0]}
            description={detail[1]}
          />
        ))}
      </div>
    </div>
  );
}
