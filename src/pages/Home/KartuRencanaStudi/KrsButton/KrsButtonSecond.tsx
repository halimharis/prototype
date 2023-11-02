import addcourse from "../../../assets/addcourse.gif";

export default function KrsButtonSecond() {
  return (
    <button
      disabled={true}
      className="ml-auto self-end flex gap-2 items-center min-w-max"
    >
      <img src={addcourse} />
      <div className="flex flex-col text-xs">
        <span className="font-bold text-left leading-3">
          TAMBAH MATA KULIAH
        </span>
        <span className="text-left leading-4">
          Jadwal mata kuliah semester ini belum tersedia atau Jadwal telah
          ditutup.
        </span>
      </div>
    </button>
  );
}
