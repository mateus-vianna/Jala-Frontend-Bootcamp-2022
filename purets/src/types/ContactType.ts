import IAddress from "../interfaces/IAddress";
import IContact from "../interfaces/IContact";
import IPerson from "../interfaces/IPerson";

type ContactType = IAddress & IPerson & IContact;

export default ContactType;
