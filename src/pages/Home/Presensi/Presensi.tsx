export default function Presensi() {
  return (
    <div className=" mt-6 w-full">
      <div className="border-y border-blue border-opacity-50 mx-4 flex flex-col items-center justify-center py-3">
        <h1 className="text-[#FF0000] font-bold text-xs ">PRESENSI ONLINE</h1>
        <select className="border border-black border-opacity-50 rounded-sm text-[13px] mt-2 leading-4 ">
          <option>Presensi Yang Berjalan</option>
          <option>Presensi Yang Terlewatkan</option>
        </select>
        <span className="text-xs text-[#FF0000] italic text-center mt-7">
          * Dosen berhak menghentikan rekam presensi sebelum batas akhir
          presensi tiba.
        </span>
        <p className="p-1 border border-black border-opacity-20 w-full text-xs mt-3">
          Tidak ada data untuk ditampilkan
        </p>
      </div>
    </div>
  );
}
