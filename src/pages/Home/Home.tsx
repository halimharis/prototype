import { useContext, useState } from "react";
import Details from "./Detail/Details";
import Navbar from "./Navbar/Navbar";
import Panduan from "./Panduan/Panduan";
import Pengumuman from "./Pengumuman/Pengumuman";
import SideNavigation from "./SideNavigation/SideNavigation";
import KartuRencanaStudi from "./KartuRencanaStudi/KartuRencanaStudi";
import RekapHasilStudi from "./RekapHasilStudi/RekapHasilStudi";
import Presensi from "./Presensi/Presensi";
import { useNotifyHome } from "../../utils/useNotifyHome";
import { CurrentUserContext } from "../../App";

const Halim = {
  Nim: "205150200111039",
  Nama: "Halim",
  details: {
    "Jenjang/Fakultas": "S1/Ilmu Komputer",
    Jurusan: "Teknik Informatika",
    "Program Studi": "Teknik Informatika",
    Seleksi: "Seleksi Bersama Masuk Perguruan Tinggi Negeri Brawijaya - Malang",
    "Nomor Ujian": "120321210499",
    "PDDIKTI KEMDIKBUD": "Detail",
    Status: true,
  },
};

export const ActiveContent = {
  presensi: "Presensi",
  khs: "KHS",
  krs: "KRS",
  jadwalKuliah: "Jadwal Kuliah",
  jadwalUjian: "Jadwal Ujian",
  absensi: "Absensi",
  rekapHasilStudi: "Rekap Hasil Studi",
  tugasAkhir: "Tugas Akhir",
};

export default function Home() {
  const [content, setContent] = useState(ActiveContent.presensi);

  const currentUser = useContext(CurrentUserContext);

  const changeContent = (nameOfContent: string) => setContent(nameOfContent);

  const dataDiri = {
    ...Halim,
    ...currentUser,
    details: {
      ...Halim.details,
      Jurusan: currentUser?.Jurusan || Halim.details.Jurusan,
    },
  };

  const isKRS = content === ActiveContent.krs;
  const isPresensi = content === ActiveContent.presensi;
  const isRHS = content === ActiveContent.rekapHasilStudi;
  const isOther = !isKRS && !isRHS && !isPresensi;

  useNotifyHome(isOther);

  return (
    <div className="flex flex-col bg-white w-[740px] mt-5 pb-12">
      <Navbar />
      <Panduan />
      <div className="flex w-full px-3 pt-3">
        <Details {...dataDiri} />
        <SideNavigation active={content} setActive={changeContent} />
      </div>
      <Pengumuman />
      {isPresensi && <Presensi />}
      {isKRS && <KartuRencanaStudi />}
      {isRHS && <RekapHasilStudi />}
      {isOther && (
        <div className="mt-12 opacity-40 text-sm text-center font-bold italic">
          Anda salah langkah
        </div>
      )}
    </div>
  );
}
