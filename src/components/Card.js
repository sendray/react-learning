const Card = (props) => {
  const { name, email, phone, address, company } = props.resData;

  return (
    <div className="
      border border-solid rounded
      border-(--border) hover:border-(--border-hover)
      p-4 
      w-full sm:min-w-65 sm:max-w-65
      bg-(--elm-bg) hover:bg-(--elm-bg-hover)
      text-(--fg-muted)"
    >
      <h2 className="font-bold text-2xl text-(--accent)">
        {name}
      </h2>
      <div className="text-sm mt-2 wrap-break-word">{email}</div>
      <div className="text-xs mt-1">{address.city}</div>
      <div className="text-xs">{company.name}</div>
    </div>
  );
};

export default Card;
