import { AppDispatch } from "../../index";
import ContactsService from "../../../api/ContactsService";
import { IContact } from "../../../models/IContact";
import { SetIsShowModalContact } from "./types";
import {
  DelContactAction,
  SetContactAction,
  AddAllContactAction,
  SetEditableContactAction,
  methodFormType,
  SetMethodFormtAction,
  SetIsLoadingContactsAction,
  ContactsActionEnum,
  AddContactAction,
  SetErrorContactAction,
} from "./types";

export const ContactsActionCreators = {
  fetchContacts: (userId: string) => async (dispatch: AppDispatch) => {
    dispatch(ContactsActionCreators.setIsLoadingContact(true));
    setTimeout(async () => {
      try {
        // const { data: userContacts } = await ContactsService.fetchUserContacts(
        //   userId
        // );

        ///////// gh-pages /////////
        const userContacts = ContactsService.fetchUserContacts(userId);
        ///////// gh-pages /////////

        dispatch(ContactsActionCreators.addAllContact(userContacts.contacts));
      } catch (e) {
        dispatch(ContactsActionCreators.setErrorContact("Contacts error"));
      } finally {
        dispatch(ContactsActionCreators.setIsLoadingContact(false));
      }
    }, 1000);
  },
  addAllContact: (payload: IContact[]): AddAllContactAction => ({
    type: ContactsActionEnum.ADD_ALL_CONTACTS,
    payload,
  }),
  addContact: (payload: IContact): AddContactAction => ({
    type: ContactsActionEnum.ADD_CONTACT,
    payload,
  }),
  delContact: (payload: string): DelContactAction => ({
    type: ContactsActionEnum.DEL_CONTACT,
    payload,
  }),
  setContact: (payload: IContact): SetContactAction => ({
    type: ContactsActionEnum.SET_CONTACT,
    payload,
  }),
  setIsLoadingContact: (payload: boolean): SetIsLoadingContactsAction => ({
    type: ContactsActionEnum.SET_IS_LOADING_CONTACTS,
    payload,
  }),
  setErrorContact: (payload: string): SetErrorContactAction => ({
    type: ContactsActionEnum.SET_ERROR_CONTACT,
    payload,
  }),
  setEditableContact: (payload: IContact): SetEditableContactAction => ({
    type: ContactsActionEnum.SET_EDITABLE_CONTACT,
    payload,
  }),
  setMethodForm: (payload: methodFormType): SetMethodFormtAction => ({
    type: ContactsActionEnum.SET_METHOD_FORM,
    payload,
  }),
  setIsShowModalContact: (payload: boolean): SetIsShowModalContact => ({
    type: ContactsActionEnum.SET_IS_SHOW_MODAL_CONTACT,
    payload,
  }),
};
