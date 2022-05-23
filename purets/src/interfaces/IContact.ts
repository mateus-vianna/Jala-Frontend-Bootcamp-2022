import IPerson from "./IPerson";
import IAddress from "./IAddress";
import ContactStatus from "../enum/ContactStatus";

interface IContact {
  id: number;
  status?: ContactStatus;
  phoneNumber?: string;
  address: IAddress;
}

export default IContact;
