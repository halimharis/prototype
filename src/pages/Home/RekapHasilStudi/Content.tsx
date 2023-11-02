import { useContext, useRef } from "react";
import printImage from "../../../assets/print.gif";
import { useReactToPrint } from "react-to-print";
import { dataMataKuliah } from "../../../utlils";
import { CurrentDesign, StepContext, StepTwoPassed } from "../../../App";
import setpdf from "../../../assets/setpdf.png";

export default function Content() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { togglePassed } = useContext(StepTwoPassed);

  const { step } = useContext(StepContext);

  const handleClick = () => {
    handlePrint();
    if (step === 3) togglePassed();
  };

  const { isKontrol } = useContext(CurrentDesign);

  return (
    <div className="flex flex-col mt-14 relative">
      <div className="flex absolute -top-8 right-0">
        {isKontrol !== true && (
          <img
            onClick={handleClick}
            src={setpdf}
            className="scale-75 hover:cursor-pointer"
          />
        )}
        <img
          onClick={handleClick}
          src={printImage}
          className="scale-90 hover:cursor-pointer"
        />
      </div>
      <h1 className="text-center font-bold mb-2">
        DAFTAR MATA KULIAH (SELURUH)
      </h1>
      <table
        ref={componentRef}
        className=" bg-white border-collapse text-center w-full"
      >
        <thead>
          <tr key={"00"}>
            <th className="bg-black text-white uppercase border px-4">
              Kode mata <br />
              kuliah
            </th>
            <th className="bg-black text-white uppercase border">
              Mata Kuliah
            </th>
            <th className="bg-black text-white uppercase border px-4">
              Jumlah SKS
            </th>
            <th className="bg-black text-white uppercase border">
              Tahun Akademik
            </th>
            <th className="bg-black text-white uppercase border px-8">Nilai</th>
          </tr>
        </thead>
        <tbody>
          {dataMataKuliah.map((matakuliah, index) => (
            <tr
              className={`${isKontrol !== true && "even:bg-gray-200"}`}
              key={index}
            >
              {Object.entries(matakuliah).map((values, index) => (
                <td
                  key={index}
                  className={`border border-gray border-opacity-30 ${
                    values[0] === "Nama" && "text-left pl-1"
                  } leading-4 text-xs`}
                >
                  {values[1]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
