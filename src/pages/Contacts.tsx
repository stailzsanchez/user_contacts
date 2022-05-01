import React, { useEffect } from "react";
//Store
import { editableContactInit } from "../store/reducers/contacts/index";
//Hooks
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import useContactSearch from "../hooks/useContactsSearch";
//Components
import ContactForm from "../components/ContactForm";

//Antd
import { Modal, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import ContactsList from "../components/ContactsList";
import { IContact } from "../models/IContact";

const Contacts = () => {
  //Redux Actions
  const {
    setEditableContact,
    setMethodForm,
    fetchContacts,
    setIsShowModalContact,
    addAllContact,
  } = useActions();

  //Redux State
  const { user } = useTypedSelector((state) => state.authReducer);
  const { contacts, isShowModalContact } = useTypedSelector(
    (state) => state.contactsReducer
  );

  //Helper hooks
  const { filteredContacts, onSearchChange } = useContactSearch(contacts);

  const onAddContactCLick = () => {
    setEditableContact(editableContactInit);
    setMethodForm("add-contact");
    setIsShowModalContact(true);
  };

  const onCancelModalClick = () => setIsShowModalContact(false);

  useEffect(() => {
    fetchContacts(user.id);
    return () => {
      addAllContact([] as IContact[]);
    };
  }, []);

  return (
    <div className="contacts-wrap">
      <Input.Search
        style={{ margin: "20px auto", width: "300px" }}
        placeholder="Search by..."
        enterButton
        onChange={onSearchChange}
      />

      <ContactsList contacts={filteredContacts} />

      <PlusCircleFilled
        onClick={onAddContactCLick}
        className="contact-add-btn"
      />

      <Modal
        visible={isShowModalContact}
        footer={null}
        closable={false}
        onCancel={onCancelModalClick}
        destroyOnClose={true}
      >
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Contacts;
