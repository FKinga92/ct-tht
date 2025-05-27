export type TRentalCore = {
  pickUpDate: string;
  returnDate: string;
  pickUpLocationName: string;
  returnLocationName: string;
};

export type TVendor = {
  code: string;
  name: string;
};

export type TVendorAvail = {
  _id: string;
  vendor: TVendor;
  status: string;
  airConditionInd: boolean;
  transmissionType: string;
  fuelType: string;
  driveType: string;
  passengerQuantity: string;
  baggageQuantity: string;
  doorCount: string;
  vehMakeModelName: string;
  pictureUrl: string;
  price: string;
  currencyCode: string;
};

export type TVendorAvails = Record<string, TVendorAvail>;

export const SORT_KEYS = ['price', 'passengerQuantity', 'baggageQuantity', 'doorCount'] as const;

export type TSortKey = (typeof SORT_KEYS)[number];
