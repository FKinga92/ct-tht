import type {TCarsContext} from '../context/types';
import type {TVehAvailRSCoreApi, TVendorAvailApi, TVendorAvailsApi} from '../types/api';
import type {TVendorAvail, TVendorAvails} from '../types/vendor-avails';

const transformVehAvailApi = (
  vendor: TVendorAvailsApi['Vendor'],
  vendorAvailApi: TVendorAvailApi,
  code: string
): TVendorAvail => ({
  _id: code,
  vendor: {code: vendor['@Code'], name: vendor['@Name']},
  status: vendorAvailApi['@Status'],
  airConditionInd: vendorAvailApi.Vehicle['@AirConditionInd'] === 'true',
  transmissionType: vendorAvailApi.Vehicle['@TransmissionType'],
  fuelType: vendorAvailApi.Vehicle['@FuelType'],
  driveType: vendorAvailApi.Vehicle['@DriveType'],
  passengerQuantity: vendorAvailApi.Vehicle['@PassengerQuantity'],
  baggageQuantity: vendorAvailApi.Vehicle['@BaggageQuantity'],
  doorCount: vendorAvailApi.Vehicle['@DoorCount'],
  vehMakeModelName: vendorAvailApi.Vehicle.VehMakeModel['@Name'],
  pictureUrl: vendorAvailApi.Vehicle.PictureURL,
  price: vendorAvailApi.TotalCharge['@RateTotalAmount'],
  currencyCode: vendorAvailApi.TotalCharge['@CurrencyCode'],
});

export const transformVehAvailResponse = (vehAvailsApi: TVehAvailRSCoreApi): TCarsContext => {
  return {
    rentalCore: {
      pickUpDate: vehAvailsApi.VehRentalCore['@PickUpDateTime'],
      returnDate: vehAvailsApi.VehRentalCore['@ReturnDateTime'],
      pickUpLocationName: vehAvailsApi.VehRentalCore.PickUpLocation['@Name'],
      returnLocationName: vehAvailsApi.VehRentalCore.ReturnLocation['@Name'],
    },
    vendorAvails: vehAvailsApi.VehVendorAvails.reduce((acc, vendorAvail) => {
      vendorAvail.VehAvails.forEach(vehAvail => {
        const code = `${vehAvail.Vehicle['@CodeContext']}-${vehAvail.Vehicle['@Code']}`;
        acc[code] = transformVehAvailApi(vendorAvail.Vendor, vehAvail, code);
      });

      return acc;
    }, {} as TVendorAvails),
  };
};

export const formatDateString = (isoString: string): string =>
  new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(isoString));
