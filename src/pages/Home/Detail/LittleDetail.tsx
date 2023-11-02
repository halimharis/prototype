interface ILittleDetail {
  detail: string;
  description: string | boolean;
}

export default function LittleDetail({ description, detail }: ILittleDetail) {
  const descriptionValue =
    typeof description === "boolean" ? "AKTIF" : description;

  return (
    <div className="flex gap-2 last:pt-2">
      <p>{detail}</p>
      &#x1F892;
      <p className="font-bold">{descriptionValue}</p>
    </div>
  );
}
