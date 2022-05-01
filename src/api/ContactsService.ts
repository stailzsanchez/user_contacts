import axios, { AxiosResponse } from "axios";
import { IContact } from "./../models/IContact";
import UserContactsMock from "./mockData/user-contacts_mock.json";

export interface IFetchUserContacts {
  id: string;
  contacts: IContact[];
}

//Mock data for gh-pages
export default class ContactsService {
  static fetchUserContacts(userId: string): IFetchUserContacts {
    const userContacts: IFetchUserContacts[] = JSON.parse(
      JSON.stringify(UserContactsMock)
    );

    const searchedUser = userContacts.find((user) => user.id == userId);
    if (searchedUser) {
      return searchedUser;
    } else {
      return {} as IFetchUserContacts;
    }
  }
}

// export default class ContactsService {
//   // static async fetchUserContacts(
//   //   userId: string
//   // ): Promise<AxiosResponse<IFetchUserContacts>> {
//   //   return axios.get<IFetchUserContacts>(
//   //     `http://localhost:5000/user-contacts/${userId}`
//   //   );
//   // }
// }
