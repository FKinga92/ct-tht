import type {TCarsContext} from '../../context/types';
import {formatDateString} from '../../utils';

type TProps = {
  rentalCore: Required<TCarsContext>['rentalCore'];
};

const PickUpReturnInfo = ({rentalCore}: TProps) => {
  const {pickUpDate, pickUpLocationName, returnDate, returnLocationName} = rentalCore;

  return (
    <div>
      <p>
        Pickup: {pickUpLocationName} - {formatDateString(pickUpDate)}
      </p>
      <p>
        Return: {returnLocationName} - {formatDateString(returnDate)}
      </p>
    </div>
  );
};

export default PickUpReturnInfo;
