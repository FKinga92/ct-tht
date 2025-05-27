import type {TVendorAvail} from '../../types/vendor-avails'

type TCarProps = {car: TVendorAvail}

const Car = ({car}: TCarProps) => {
  const {status, vendor, vehicle, totalCharge} = car

  return (
    <>
      <p>Status: {status}</p>
      <p>Vendor: {vendor.name}</p>
      <section>
        <p>Vehicle characheristics:</p>
        <p>Arconditioned: {vehicle.airConditionInd}</p>
        <p>Transmission type: {vehicle.transmissionType}</p>
        <p>Fuel type: {vehicle.fuelType}</p>
        <p>Drive type: {vehicle.driveType}</p>
        <p>Passenger quantity: {vehicle.passengerQuantity}</p>
        <p>Baggage quantity: {vehicle.baggageQuantity}</p>
        <p>Door count: {vehicle.doorCount}</p>
        <p>Model name: {vehicle.vehMakeModelName}</p>
        <img src={vehicle.pictureUrl} alt={`Picture of the ${vehicle.vehMakeModelName}`} />
      </section>
      <section>
        <p>Price: </p>
        <p>
          Rate Total Amount: {totalCharge.rateTotalAmount} {totalCharge.currencyCode}
        </p>
        <p>
          Estimated Total Amount: {totalCharge.estimatedTotalAmount} {totalCharge.currencyCode}
        </p>
      </section>
    </>
  )
}

export default Car
