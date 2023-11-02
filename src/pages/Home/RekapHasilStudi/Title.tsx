const options = {
  all: "Seluruh Mata Kuliah",
  best: "Nilai Terbaik",
  new: "Nilai Terbaru",
  sementara: "Transkrip Sementara",
};

export default function Title() {
  return (
    <div className="py-4 flex items-center border-blue border-y-[0.5px] border-opacity-30 w-full text-xs">
      <h1 className="items-center flex gap-1 w-full pl-4">
        <span className="text-2xl leading-3">&#x1F892;</span>
        Rekap Hasil Studi : SEMESTER GANJIL 2023/2024
      </h1>
      <div className="flex gap-2">
        <span className="font-bold min-w-max">Jenis :</span>
        <select className="border border-gray rounded-sm ml-8">
          {Object.entries(options).map(([key, value]) => (
            <option key={key}>{value}</option>
          ))}
        </select>
        <button className="border-[1px] rounded-sm py-[1px] px-3 bg-gray-100 border-black disabled:opacity-50 font-bold">
          TAMPIL
        </button>
      </div>
    </div>
  );
}
