import printImg from "../../../assets/print.gif";

const MataKuliah = [
  {
    kode: "CIF61067",
    nama: "Manajemen Industri Teknologi Informasi",
    sks: "3",
    kelas: "C",
    keterangan: "Sudah Disetujui",
    batal: false,
    prodi: "Teknik Informatika",
  },
  {
    kode: "UBU60001",
    nama: "Tugas Akhir/ Skripsi",
    sks: "6",
    kelas: "A",
    keterangan: "Sudah Disetujui",
    batal: false,
    prodi: "Teknik Informatika",
  },
];

export default function Content() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center">
        <p className="text-xs">Pilih Minat Studi: &nbsp;</p>
        <select disabled className="min-w-[200px] border-2 rounded-sm">
          <option value="" disabled selected>
            Non Konsentrasi
          </option>
        </select>
        <button
          className="border-[1px] rounded-sm py-[1px] px-[6px] bg-gray-300 border-gray-400 disabled:opacity-50"
          disabled
        >
          Simpan
        </button>
      </div>
      <div className=" flex items-center self-end mr-24 mt-1 gap-3">
        <p>
          Klik icon <strong>PRINT </strong>
          di kanan untuk mencetak KRS Anda !
        </p>
        <img src={printImg} />
      </div>
      <table className=" bg-white border-collapse text-center mt-2">
        <tr>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            No
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            Kode
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            Nama Mata Kuliah
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            SKS
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            Kelas
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            Keterangan
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border ">
            Batal
          </th>
          <th className="bg-black text-white uppercase py-2 px-1 border w-min">
            Prodi Jadwal
          </th>
        </tr>
        {MataKuliah.map((matkul, index) => (
          <tr key={index}>
            <td className={`border border-gray border-opacity-30`}>
              {index + 1}
            </td>
            {Object.entries(matkul).map((values) => (
              <td
                className={`border border-gray border-opacity-30 ${
                  values[0] === "nama" && "text-left"
                } px-2 py-2`}
              >
                {values[1]}
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30 text-right font-bold">
            JUMLAH SKS :
          </td>
          <td className="border border-gray border-opacity-30">9</td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
        </tr>
        <tr>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30 text-right font-bold">
            JUMLAH MAKSIMUM SKS :
          </td>
          <td className="border border-gray border-opacity-30">24</td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
          <td className="border border-gray border-opacity-30"></td>
        </tr>
      </table>
    </div>
  );
}
