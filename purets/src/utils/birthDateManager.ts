import IContact from "../interfaces/IContact";
import IPerson from "../interfaces/IPerson";
import ContactType from "../types/ContactType";

function getBirthDate(contact: ContactType | IPerson) {
  if (typeof contact.birthDate === "number") return new Date(contact.birthDate);
  else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

export default getBirthDate;
