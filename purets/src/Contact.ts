import ContactStatus from "./enum/ContactStatus";
import IContact from "./interfaces/IContact";
import ContactType from "./types/ContactType";

let x: IContact = { id: 12, name: "string", birthDate: new Date("2000-01-01") };

function clone<T>(source: T): T {
  return { ...source };
}

function clone2<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply(source);
}

interface IDate {
  dateInit: number;
  endDate: number;
}

const date: IDate = { dateInit: Date.now(), endDate: Date.now() };
const d = clone(date);
const b = clone(x);

interface IUser {
  id: number;
  name: string;
  userName: string;
  birthDate: Date;
}

const g = clone2<ContactType, IUser>(x);

//////////////////

let primaryContact: ContactType = {
  id: 12,
  name: "Mateus",
  phoneNumber: "(21)2374658",
  status: "Active",
  birthDate: new Date("2000-01-01"),
  CEP: "25565040",
};

primaryContact = {...primaryContact, getBirthDate(primaryContact.birthDate)};
fetch("http://google.com", { method: "post", body: primaryContact });
