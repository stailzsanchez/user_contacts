import React from "react";
import Loader from "./Loader";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IContact } from "../models/IContact";
import Contact from "./Contact";

type Props = {
  contacts: IContact[];
};

const ContactsList = React.memo((props: Props) => {
  const { contacts } = props;
  const { isLoading, error } = useTypedSelector(
    (state) => state.contactsReducer
  );
  return (
    <div className="contact-list-wrap">
      {error && error}
      {isLoading && <Loader />}
      {!isLoading && !contacts.length && <strong>No contacts</strong>}
      {contacts?.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
});

export default ContactsList;
