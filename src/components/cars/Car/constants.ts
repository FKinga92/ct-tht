import alamoLogo from '../../../assets/Vendors/alamo.svg';
import avisLogo from '../../../assets/Vendors/avis.svg';
import hertzLogo from '../../../assets/Vendors/hertz.svg';

export type TVendorName = 'ALAMO' | 'AVIS' | 'HERTZ';

export const vendorLogos: Record<TVendorName, string> = {
  ALAMO: alamoLogo,
  AVIS: avisLogo,
  HERTZ: hertzLogo,
};

export type TTransmissionTypes = 'Automatic' | 'Manual';
