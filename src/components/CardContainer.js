import Card from "./Card";

const CardContainer = (props) => {
  const { restaurantsDetails } = props;

  return (
    <div className="card-container">
      {restaurantsDetails.map((restaurant) => (
        <Card key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default CardContainer;
