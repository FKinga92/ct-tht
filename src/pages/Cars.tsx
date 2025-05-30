import {useContext, useMemo, useState} from 'react';
import {useNavigate} from 'react-router';
import Car from '../components/cars/Car/Car';
import {CarSC} from '../components/cars/Car/Car.styled';
import PickUpReturnInfo from '../components/cars/PickUpReturnInfo/PickUpReturnInfo';
import SortByDropdown from '../components/cars/SortByDropdown/SortByDropdown';
import {CarsContext} from '../context/CarsContext';
import type {TSortKey} from '../types/vendor-avails';
import {CarsSC} from './Cars.styled';

const CarsPage = () => {
  const navigate = useNavigate();
  const {rentalCore, vendorAvails} = useContext(CarsContext);
  const [sortKey, setSortKey] = useState<TSortKey>('price');

  if (!vendorAvails || !rentalCore) return null;

  const sortedVehicles = useMemo(
    () =>
      Object.values(vendorAvails).sort((a, b) =>
        sortKey === 'price' ? Number(a.price) - Number(b.price) : b[sortKey].localeCompare(a[sortKey])
      ),
    [sortKey, vendorAvails]
  );

  return (
    <div>
      <PickUpReturnInfo rentalCore={rentalCore} />
      <CarsSC>
        <SortByDropdown value={sortKey} onChange={setSortKey} />
        <div className='car-list-container'>
          {sortedVehicles.map(car => (
            <CarSC key={car._id} onClick={() => navigate(`/cars/${car._id}`)}>
              <Car car={car} />
            </CarSC>
          ))}
        </div>
      </CarsSC>
    </div>
  );
};

export default CarsPage;
