import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

// export default class UserService {
//   static async auth(username: string): Promise<AxiosResponse<IUser[]>> {
//     return axios.get<IUser[]>(
//       `http://localhost:5000/users?username=${username}`
//     );
//   }
// }

// ///////// gh-pages /////////
import UsersMock from "./mockData/users_mock.json";

export default class UserService {
  static auth(username: string): IUser[] {
    const users = JSON.parse(JSON.stringify(UsersMock));

    const searchedUser: IUser[] = users.filter(
      (user: IUser) => user.username === username
    );

    if (searchedUser) {
      return searchedUser;
    } else {
      return [] as IUser[];
    }
  }
}
// ///////// gh-pages /////////
