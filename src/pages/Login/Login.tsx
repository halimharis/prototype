import logoSiam from "../assets/logo-siam.png";
import LoginForm from "./form/LoginForm";
import bannerGapura from "../assets/banner-gapura.jpg";

export default function Login() {
  return (
    <div className="bg-white w-[800px] my-10 p-[15px] flex flex-col h-fit">
      <div className=" w-full pt-6 pb-3 flex justify-between">
        <img src={logoSiam} className="w-full max-h-[38px] max-w-[288px]" />
        <LoginForm />
      </div>
      <div className=" w-full grow px-[15px] ">
        <div className="flex gap-[30px] py-3">
          <div className="flex flex-col gap-5">
            <button className="bg-orange p-[10px] grow">
              <strong>Formulir Layanan Bantuan Keuangan Mahasiswa</strong>
            </button>
            <div className="bg-red p-[15px]">
              <img src={bannerGapura} className="w-full " />
            </div>
          </div>
          <button className="min-w-[220px] bg-blue-dark text-white p-[10px] h-fit">
            Admisi UB
          </button>
        </div>
        <div className="h-auto w-full  text-siam text-right pt-3 pb-8">
          ©2004-2023 SIAM UB by <strong>TIK UB</strong>
        </div>
      </div>
    </div>
  );
}
