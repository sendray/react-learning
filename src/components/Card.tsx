import type { User } from "../utils/types";

interface CardProps {
  resData: User;
}

const Card = ({ resData }: CardProps) => {
  const { name, email, address, company } = resData;

  return (
    <div
      className="
      border border-solid rounded
      border-(--border) hover:border-(--border-hover)
      p-4
      w-full
      bg-(--elm-bg) hover:bg-(--elm-bg-hover)
      text-(--fg-muted)"
    >
      <h2 className="font-bold text-2xl text-(--accent)">{name}</h2>
      <div className="text-sm mt-2 wrap-break-word">{email}</div>
      <div className="text-xs mt-1">{address.city}</div>
      <div className="text-xs">{company.name}</div>
    </div>
  );
};

export default Card;