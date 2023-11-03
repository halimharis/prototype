export default function Ketentuan() {
  return (
    <div className="pt-4 flex flex-col">
      <div className="text-center">
        Jumlah maksimal SKS yang dapat diambil pada semester ini didasarkan pada
        <strong> IP Beban Semester.</strong> Berikut adalah ketentuan maksimal
        SKS yang dapat diambil :
      </div>
      <table className="mt-4 bg-white border-collapse text-center text-[9px]">
        <thead>
          <tr>
            <th className="bg-black text-white border ">
              IP Semester yang diperoleh
            </th>
            <th className="bg-black text-white  border ">
              Beban Studi dalam Semester
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray border-opacity-30">&gt;= 3.00</td>
            <td className="border border-gray border-opacity-30">
              22 - 24 sks
            </td>
          </tr>
          <tr>
            <td className="border border-gray border-opacity-30">
              2.50 - 2.99
            </td>
            <td className="border border-gray border-opacity-30">
              19 - 21 sks
            </td>
          </tr>
          <tr>
            <td className="border border-gray border-opacity-30">
              2.00 - 2.49
            </td>
            <td className="border border-gray border-opacity-30">
              16 - 18 sks
            </td>
          </tr>
          <tr>
            <td className="border border-gray border-opacity-30">
              1.50 - 1.99
            </td>
            <td className="border border-gray border-opacity-30">
              12 - 15 sks
            </td>
          </tr>
          <tr>
            <td className="border border-gray border-opacity-30">&lt;1.50</td>
            <td className="border border-gray border-opacity-30">
              &lt;= 12 sks
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
