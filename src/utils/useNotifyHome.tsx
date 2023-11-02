import { useEffect } from "react";
import { toast } from "react-toastify";

export const useNotifyHome = (condition: boolean) => {
  useEffect(() => {
    const notify = () =>
      toast.info(
        <p className="text-xs">
          <strong>Halaman belum dibuat</strong> <br />
          <span className="opacity-70">Anda mungkin salah langkah</span>
        </p>,
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );

    if (condition) {
      notify();

      // const wrongChoicee = setTimeout(() => {
      //   setContent(ActiveContent.presensi);
      // }, 2000);

      // return () => {
      //   clearTimeout(wrongChoicee);
      // };
    }
  }, [condition]);
};
