import unduhPanduan from "../../../assets/unduhpanduan.png";

export default function Panduan() {
  return (
    <div className="flex px-3 self-end pt-2 gap-2">
      <div className="flex flex-col items-end justify-center ">
        <p className="text-xs">
          Klik <strong>&#11208; GANTI KATA SANDI</strong> untuk mengubah kata
          sandi akun SIAM Anda !
        </p>
        <p className="text-xs">
          Pastikan Anda <strong>KELUAR</strong> sebelum meninggalkan komputer
          Anda! <i>Klik ikon KELUAR di pojok kanan atas!</i>
        </p>
      </div>
      <img src={unduhPanduan} />
    </div>
  );
}
