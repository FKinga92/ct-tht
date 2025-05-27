import type {PropsWithChildren} from 'react';
import bagIcon from '../../../assets/Icons/bag.svg';
import doorIcon from '../../../assets/Icons/door.svg';
import fuelIcon from '../../../assets/Icons/fuel.svg';
import personIcon from '../../../assets/Icons/person.svg';
import snowflakeIcon from '../../../assets/Icons/snowflake.svg';
import transmIcon from '../../../assets/Icons/transmission.svg';
import type {TVendorAvail} from '../../../types/vendor-avails';
import {vendorLogos, type TTransmissionTypes, type TVendorName} from './constants';

type TCarProps = PropsWithChildren<{car: TVendorAvail}>;

const Car = ({car, children}: TCarProps) => {
  return (
    <>
      <div className='vendor-logo-container'>
        {children}
        <img className='vendor-logo' src={vendorLogos[car.vendor.name as TVendorName]} alt={car.vendor.name} />
      </div>
      <div className='car-img-container'>
        <img src={car.pictureUrl} alt={car.vehMakeModelName} />
      </div>
      <section>
        <div className='model-info'>
          <p className='subtitle-s'>{car.vehMakeModelName}</p>
          <p>Drive type: {car.driveType}</p>
        </div>
        <hr />
        <div className='detail-icons-container body-s'>
          {car.airConditionInd && (
            <div>
              <img src={snowflakeIcon} alt='Aircondition icon' />
            </div>
          )}
          <div>
            <img src={transmIcon} alt='Transmission type icon' />
            <span>{(car.transmissionType as TTransmissionTypes) === 'Automatic' ? 'A' : 'M'}</span>
          </div>
          <div>
            <img src={personIcon} alt='Persons icon' />
            <span>{car.passengerQuantity}</span>
          </div>
          <div>
            <img src={bagIcon} alt='Bag icon' />
            <span>{car.baggageQuantity}</span>
          </div>
          <div>
            <img src={doorIcon} alt='Door icon' />
            <span>{car.doorCount}</span>
          </div>
          <div>
            <img src={fuelIcon} alt='Fuel type icon' />
            <span>{car.fuelType}</span>
          </div>
        </div>
      </section>
      <hr />
      <p className='price'>
        <span className='subtitle-s'>{car.price}</span>
        <span className='body-s'>{car.currencyCode}</span>
      </p>
    </>
  );
};

export default Car;
