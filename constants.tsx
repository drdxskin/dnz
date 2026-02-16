
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  { min: 1, max: 100, price: 0, label: "Early Bird (First 100)" },
  { min: 101, max: 200, price: 700, label: "Standard (101-200)" },
  { min: 201, max: null, price: 1000, label: "Late (201+)" },
  { min: -1, max: -1, price: 1500, label: "On the Spot" }
];

export const EVENT_DETAILS = {
  title: "44th Annual Conference",
  organization: "Indian Medical Association - Delhi North Zone",
  theme: "Strengthening Primary Care for a Healthier Delhi",
  date: "Sunday, 15th March 2026",
  time: "2:00 PM Onwards",
  venue: "Tivoli Grand Resort Hotel, GT Karnal Road, Alipur, Delhi 110026",
  secretariat: "IMA-DNZ Office: 408-410, Rajinder Jain Tower, 18, Wazirpur Ind. Area, Delhi-110052",
  phone: "9289195036",
  account: {
    name: "IMA DELHI NORTH ZONE SBI, WAZIRPUR",
    number: "50520590512",
    ifsc: "SBIN0050284"
  }
};

export const ORGANISERS = [
  { name: "Dr. Praveen Bhatia", role: "President / Organising Chairman" },
  { name: "Dr. Navin Kumar", role: "Hony. Secretary / Organising Secretary" },
  { name: "Dr. Sonia Bakshi", role: "Hony. Finance Secretary / Finance Chairman" },
  { name: "Dr. RM Chhabra", role: "Scientific Chairman" },
  { name: "Dr. NN Jha", role: "Co-ordinating Chairman" },
  { name: "Dr. Girish Tyagi", role: "Patron (President DMA)" },
  { name: "Dr. Naresh Chawla", role: "Patron" },
  { name: "Dr. Ashok Aggarwal", role: "Advisory Board" },
  { name: "Dr. Satish Tyagi", role: "Registration Committee" }
];
