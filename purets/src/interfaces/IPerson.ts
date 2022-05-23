import { ContactName } from "../types/ContactName";

interface IPerson {
  name: ContactName;
  birthDate?: Date | number | string;
}

export default IPerson;
