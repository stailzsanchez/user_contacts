import { IContact } from "../../../models/IContact";

export type methodFormType = "edit-contact" | "add-contact";

export interface ContactsState {
  contacts: IContact[];
  editableContact: IContact;
  methodForm: methodFormType;
  isLoading: boolean;
  isShowModalContact: boolean;
  error: string;
}

export enum ContactsActionEnum {
  SET_ERROR_CONTACT = "SET_ERROR_CONTACT",
  SET_CONTACT = "SET_CONTACT",
  ADD_CONTACT = "ADD_CONTACT",
  ADD_ALL_CONTACTS = "ADD_ALL_CONTACTS",
  DEL_CONTACT = "DEL_CONTACT",
  SET_EDITABLE_CONTACT = "SET_EDITABLE_CONTACT",
  SET_METHOD_FORM = "SET_METHOD_FORM",
  SET_IS_LOADING_CONTACTS = "SET_IS_LOADING_CONTACTS",
  SET_IS_SHOW_MODAL_CONTACT = "SET_IS_SHOW_MODAL_CONTACT",
}

export interface SetErrorContactAction {
  type: ContactsActionEnum.SET_ERROR_CONTACT;
  payload: string;
}
export interface SetContactAction {
  type: ContactsActionEnum.SET_CONTACT;
  payload: IContact;
}
export interface SetEditableContactAction {
  type: ContactsActionEnum.SET_EDITABLE_CONTACT;
  payload: IContact;
}
export interface SetMethodFormtAction {
  type: ContactsActionEnum.SET_METHOD_FORM;
  payload: methodFormType;
}
export interface AddContactAction {
  type: ContactsActionEnum.ADD_CONTACT;
  payload: IContact;
}
export interface AddAllContactAction {
  type: ContactsActionEnum.ADD_ALL_CONTACTS;
  payload: IContact[];
}
export interface DelContactAction {
  type: ContactsActionEnum.DEL_CONTACT;
  payload: string;
}
export interface SetIsLoadingContactsAction {
  type: ContactsActionEnum.SET_IS_LOADING_CONTACTS;
  payload: boolean;
}

export interface SetIsShowModalContact {
  type: ContactsActionEnum.SET_IS_SHOW_MODAL_CONTACT;
  payload: boolean;
}

export type ContactsAction =
  | SetContactAction
  | AddContactAction
  | AddAllContactAction
  | DelContactAction
  | SetEditableContactAction
  | SetMethodFormtAction
  | SetErrorContactAction
  | SetIsShowModalContact
  | SetIsLoadingContactsAction;
