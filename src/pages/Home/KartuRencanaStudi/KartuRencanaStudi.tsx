import Content from "./Content";
import Ketentuan from "./Ketentuan";
import Note from "./Note";
import Title from "./Title";
import Total from "./Total";
import Warning from "./Warning";

export default function KartuRencanaStudi() {
  return (
    <div className="w-full px-3 flex flex-col text-[13px] mt-4">
      <Title />
      <Warning />
      <Content />
      <Note />
      <Ketentuan />
      <Total />
    </div>
  );
}
