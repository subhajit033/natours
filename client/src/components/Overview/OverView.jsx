import { useState, useEffect } from 'react';
import TourCard from './TourCard';
import axios from 'axios';
import Loader from '../Loader/Loader';
const OverView = () => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    getTourData();
  }, []);
  const getTourData = async () => {
    try {
      const data = await axios.get('/api/v1/tours');
      setTour(data?.data?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(tour);
  return tour.length === 0 ? (
    <Loader />
  ) : (
    <main className='main'>
      <div className='card-container'>
        {tour.map((tour, i) => {
          return <TourCard key={i} {...tour} />;
        })}
      </div>
    </main>
  );
};

export default OverView;
