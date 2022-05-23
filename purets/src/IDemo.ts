// let x: number;
// let y: string;
// let z: boolean;
// let a: Date;
// let b: string[];

// b = "Hello" as any;
// b = 123214312 as any;

import ContactStatus from "./enum/ContactStatus";
import IContact from "./interfaces/IContact";

let primaryContact: IContact = {
  id: 12,
  name: "Mateus",
  phoneNumber: "(21)2374658",
  status: ContactStatus.Active,
};
