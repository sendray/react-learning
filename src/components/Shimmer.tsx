const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 8 }, (_, index) => (
        <div className="shimmer-card" key={index} />
      ))}
    </div>
  );
};

export default Shimmer;