import navbar from "../../../assets/title-en.png";

export default function Navbar() {
  return (
    <nav className=" w-full min-h-[80px] relative">
      <img
        src={navbar}
        className="absolute -top-[15px] left-1/2 transform -translate-x-1/2 min-w-[calc(100%_+_35px)]"
      />
    </nav>
  );
}
