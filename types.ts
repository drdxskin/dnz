
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  STAFF = 'STAFF',
  NONE = 'NONE'
}

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  imaDnzNumber: string;
  registrationDate: string;
  amountPaid: number;
  sequenceNumber: number;
  reminderSent?: boolean;
  paymentScreenshot?: string; // Base64 encoded image string
}

export enum AppSection {
  LANDING = 'landing',
  REGISTER = 'register',
  ADMIN = 'admin'
}

export interface PricingTier {
  min: number;
  max: number | null;
  price: number;
  label: string;
}
