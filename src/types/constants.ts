import type {TSortKey} from './vendor-avails';

export const EMPTY_OBJ = {};

export const SortLabels: Record<TSortKey, string> = {
  price: 'Price (lowest first)',
  passengerQuantity: 'Passenger Quantity',
  baggageQuantity: 'Baggage Quantity',
  doorCount: 'Door count',
};
