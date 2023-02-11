import "../Styles/CardImage.css"

const CardImage = () => {

  return (
    <div className="card-container">
      <div
        className="card"
      >
        <div className="card__top-info">
          <div>E-Wallet</div>
          <div>Bank</div>
        </div>
        <div className="card__owner-info">
          <div>Andrea Ling</div>
          <div>0000 0000 0000 0000</div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
