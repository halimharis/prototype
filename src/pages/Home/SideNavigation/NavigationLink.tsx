import { MouseEventHandler } from "react";

interface INavigationLink {
  title: string;
  active: boolean;
  description: string;
  setActive: MouseEventHandler<HTMLParagraphElement>;
}

export default function NavigationLink({
  title,
  description,
  active,
  setActive,
}: INavigationLink) {
  return (
    <div className="flex flex-col text-xs border-b-blue border-b-[1px] border-opacity-30">
      <div className="flex gap-1">
        <span className="text-xl leading-3">&#x1F892;</span>
        <p
          onClick={setActive}
          className={`${active && "font-bold"} cursor-pointer`}
        >
          {title}
        </p>
      </div>
      <span className="italic opacity-80">{description}</span>
    </div>
  );
}
