import { logoWhite } from '../../assets/image';
const TourBuy = ({ images, duration }) => {
  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <img src={logoWhite} alt='Natours logo' className='' />
        </div>
        <img
          src={`../../../src/assets/tours/${images[1]}`}
          alt='tour-images'
          className='cta__img cta__img--1'
        />
        <img
          src={`../../../src/assets/tours/${images[2]}`}
          alt='tour-images'
          className='cta__img cta__img--2'
        />
        
        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>
            {`${duration} days. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          <button className='btn btn--green span-all-rows'>
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourBuy;
