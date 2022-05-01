import { ContactsState, ContactsAction, ContactsActionEnum } from "./types";
import { IContact } from "../../../models/IContact";
import { v4 as uuidv4 } from "uuid";

export const editableContactInit: IContact = {
  id: "",
  name: "",
  phone: "",
  company: "",
  email: "",
  position: "",
};

const initialState: ContactsState = {
  error: "",
  isLoading: false,
  editableContact: editableContactInit,
  methodForm: "add-contact",
  isShowModalContact: false,
  contacts: [] as IContact[],
};

export default function contactsReducer(
  state = initialState,
  action: ContactsAction
): ContactsState {
  switch (action.type) {
    case ContactsActionEnum.ADD_ALL_CONTACTS:
      return { ...state, contacts: action.payload };

    case ContactsActionEnum.ADD_CONTACT:
      return {
        ...state,
        contacts: [{ ...action.payload, id: uuidv4() }, ...state.contacts],
      };

    case ContactsActionEnum.DEL_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case ContactsActionEnum.SET_CONTACT:
      const setContact = {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? { ...action.payload } : contact
        ),
      };
      return setContact;

    case ContactsActionEnum.SET_EDITABLE_CONTACT:
      return { ...state, editableContact: action.payload };

    case ContactsActionEnum.SET_METHOD_FORM:
      return { ...state, methodForm: action.payload };

    case ContactsActionEnum.SET_IS_LOADING_CONTACTS:
      return { ...state, isLoading: action.payload };

    case ContactsActionEnum.SET_IS_SHOW_MODAL_CONTACT:
      return { ...state, isShowModalContact: action.payload };

    default:
      return state;
  }
}
