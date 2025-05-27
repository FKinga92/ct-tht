import type {TVendorAvail} from '../../types/vendor-avails';

type TCarProps = {car: TVendorAvail};

const Car = ({car}: TCarProps) => {
  return (
    <>
      <p>Status: {car.status}</p>
      <p>Vendor: {car.vendor.name}</p>
      <section>
        <p>Arconditioned: {car.airConditionInd ? 'yes' : 'no'}</p>
        <p>Transmission type: {car.transmissionType}</p>
        <p>Fuel type: {car.fuelType}</p>
        <p>Drive type: {car.driveType}</p>
        <p>Passenger quantity: {car.passengerQuantity}</p>
        <p>Baggage quantity: {car.baggageQuantity}</p>
        <p>Door count: {car.doorCount}</p>
        <p>Model name: {car.vehMakeModelName}</p>
        <img src={car.pictureUrl} alt={car.vehMakeModelName} />
      </section>
      <section>
        <p>
          Price: {car.price} {car.currencyCode}
        </p>
      </section>
    </>
  );
};

export default Car;
