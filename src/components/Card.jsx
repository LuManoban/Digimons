/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const { name, image } = data;
  return (
    <div className="card">
      <img src={image} alt={name} width={180} height={180} className="img img--card" />
      <h2 className="card__title">{name}</h2>
    </div>
  );
};

export default Card;