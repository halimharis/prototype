export default function TableHead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-black py-1 px-2 text-white border-[0.5px] border-white text-center flex justify-center items-center leading-4 text-xs ${className}`}
    >
      {children}
    </div>
  );
}
