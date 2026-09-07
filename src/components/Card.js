import { CARD_IMAGE } from "../utils/constants";

const Card = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = props.resData.info;

  return (
    <div className="card">
      <img alt="card-image" src={CARD_IMAGE} />
      <h2 className="title">{name}</h2>
      <div className="subtitle">{cuisines.join(", ")}</div>
      <div>{deliveryTime} mins</div>
      <div>{avgRating} stars</div>
    </div>
  );
};

export default Card;
