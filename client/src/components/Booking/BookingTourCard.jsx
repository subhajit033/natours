const BookingTourCard = ({ name, imageCover, price }) => {
  return (
    <div className='booking-card'>
      <img
        src={`../../../src/assets/tours/${imageCover}`}
        alt='booked tour image'
        className='booking-card__img'
      />
      <span className='booking-card__footer'>
        <span>{name}</span>
        <span>₹ {price}</span>
      </span>
    </div>
  );
};

export default BookingTourCard;
