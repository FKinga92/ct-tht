export type TVendorAvailApi = {
  '@Status': string
  Vehicle: {
    '@AirConditionInd': string
    '@TransmissionType': string
    '@FuelType': string
    '@DriveType': string
    '@PassengerQuantity': string
    '@BaggageQuantity': string
    '@Code': string
    '@CodeContext': string
    '@DoorCount': string
    VehMakeModel: {'@Name': string}
    PictureURL: string
  }
  TotalCharge: {
    '@RateTotalAmount': string
    '@EstimatedTotalAmount': string
    '@CurrencyCode': string
  }
}

export type TVendorAvailsApi = {
  Vendor: {'@Code': string; '@Name': string}
  VehAvails: TVendorAvailApi[]
}

export type TVehAvailRSCoreApi = {
  VehRentalCore: {
    '@PickUpDateTime': string
    '@ReturnDateTime': string
    PickUpLocation: {'@Name': string}
    ReturnLocation: {'@Name': string}
  }
  VehVendorAvails: TVendorAvailsApi[]
}
