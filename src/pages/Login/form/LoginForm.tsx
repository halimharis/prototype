export default function LoginForm() {
  return (
    <div className="flex flex-col gap-2 text-siam">
      <div className="flex gap-1 h-7">
        <input
          className="p-1 h-full w-[132px] border-gray border-[0.8px] border-opacity-40"
          placeholder="nim"
        />
        <input
          className="p-1 h-full w-[132px] border-gray border-[0.8px] border-opacity-40"
          placeholder="kata sandi"
        />
        <button className="bg-blue-dark text-white py-1 px-2 h-full flex justify-center items-center ">
          Masuk
        </button>
      </div>
      <button className="w-fit self-end bg-yellow py-1 px-2">
        Lupa Kata Sandi
      </button>
    </div>
  );
}
