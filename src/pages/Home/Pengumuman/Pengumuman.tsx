import { useState } from "react";
import Button from "./Button";

export default function Pengumuman() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="mt-12 w-full px-3">
      <div className="flex justify-between font-bold text-base p-[15px] bg-[#EEEEEE] ">
        <p>PENGUMUMAN :</p>
        <Button isShow={isShow} onClick={() => setIsShow(!isShow)} />
      </div>
      {isShow && (
        <p className="font-bold text-yellow-dark border-y-[1px] border-b-red-dark border-t-red-littleDark bg-red-pengumuman py-1 px-[13px]">
          &#9888; TIDAK ADA PENGUMUMAN APAPUN
        </p>
      )}
    </div>
  );
}
