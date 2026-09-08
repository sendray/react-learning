import { CARD_IMAGE, SWIGGY_CARD_MEDIA_ASSETS_URL } from "../utils/constants";

const Card = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = props.resData.info;

  return (
    <div className="card">
      <img
        alt="card-image"
        src={`${SWIGGY_CARD_MEDIA_ASSETS_URL}${cloudinaryImageId}`}
      />
      <h2 className="title">{name}</h2>
      <div className="subtitle">{cuisines.join(", ")}</div>
      <div>{deliveryTime} mins</div>
      <div>{avgRating} stars</div>
    </div>
  );
};

export default Card;
