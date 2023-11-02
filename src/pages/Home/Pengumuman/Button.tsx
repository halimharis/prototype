interface IButton {
  isShow: boolean;
  onClick: () => void;
}

export default function Button({ isShow, onClick }: IButton) {
  if (isShow) {
    return (
      <button
        onClick={onClick}
        className="py-1 px-3 bg-red-light text-red-littleDark2 rounded-sm text-sm"
      >
        Sembunyikan
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="py-1 px-3 bg-blue-dark text-white rounded-sm text-sm"
    >
      Tampilkan
    </button>
  );
}
