import {useContext} from 'react';
import {useParams} from 'react-router';
import Car from '../components/cars/Car/Car';
import {CarsContext} from '../context/CarsContext';
import {CarDetailsSC, LinkSC} from './CarDetails.styled';

const CarDetailsPage = () => {
  const {id} = useParams();
  const {vendorAvails} = useContext(CarsContext);
  const car = id && vendorAvails?.[id];
  if (!car) return null;

  return (
    <CarDetailsSC>
      <Car car={car}>
        <LinkSC to='/'>Back to all cars</LinkSC>
      </Car>
    </CarDetailsSC>
  );
};

export default CarDetailsPage;
