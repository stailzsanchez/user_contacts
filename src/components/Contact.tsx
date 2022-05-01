import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { IContact } from "../models/IContact";
import { useActions } from "../hooks/useActions";

type ContactType = {
  contact: IContact;
};

const Contact = React.memo((props: ContactType) => {
  const { contact } = props;
  const { id, name, phone, email, company, position } = contact;

  //Actions
  const {
    setEditableContact,
    setMethodForm,
    delContact,
    setIsShowModalContact,
  } = useActions();

  const onEditCLick = () => {
    setEditableContact(contact);
    setMethodForm("edit-contact");
    setIsShowModalContact(true);
  };

  const onDeleteCLick = () => {
    delContact(id);
  };

  return (
    <div className="contact-wrap" onDoubleClick={onEditCLick}>
      <div>
        <FaUserAlt style={{ fontSize: 20 }} />
      </div>
      <div>
        <div className="contact-name">{name}</div>
        <div>
          {company} {position}
        </div>
      </div>
      <div className="contact-phone">
        <PhoneOutlined style={{ color: "green" }} />
        {phone}
      </div>
      <div className="contact-email">
        <MailOutlined />
        {email}
      </div>

      <div className="contact__btns">
        <FiEdit
          className="contact-edit__icon icon-clicked"
          onClick={onEditCLick}
        />
        <AiFillDelete
          className="contact-del__icon icon-clicked"
          onClick={onDeleteCLick}
        />
      </div>
    </div>
  );
});

export default Contact;
