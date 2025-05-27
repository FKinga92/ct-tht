import type {TCarsContext} from '../../../context/types';
import {formatDateString} from '../../../utils';
import {PicUpReturnInfoSC} from './PickUpReturnInfo.styled';

type TProps = {
  rentalCore: Required<TCarsContext>['rentalCore'];
};

const PickUpReturnInfo = ({rentalCore}: TProps) => {
  const {pickUpDate, pickUpLocationName, returnDate, returnLocationName} = rentalCore;

  return (
    <PicUpReturnInfoSC>
      <p>
        <span className='label'>Pickup:</span>
        <span>
          {pickUpLocationName} - {formatDateString(pickUpDate)}
        </span>
      </p>
      <hr />
      <p>
        <span className='label'>Return:</span>
        <span>
          {returnLocationName} - {formatDateString(returnDate)}
        </span>
      </p>
    </PicUpReturnInfoSC>
  );
};

export default PickUpReturnInfo;
