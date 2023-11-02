import KrsButtonTreatment from "./KrsButton/KrsButtonTreatment";

export default function Title() {
  return (
    <div className="py-1 flex items-center border-blue border-y-[0.5px] border-opacity-30 w-full">
      <h1 className="items-center flex gap-1 w-full pl-4">
        <span className="text-2xl leading-3">&#x1F892;</span>
        Kartu Rencana Studi : SEMESTER GANJIL 2023/2024
      </h1>
      <KrsButtonTreatment />
    </div>
  );
}
