import { UserType } from "./user";

export class DB {
      private users: UserType[] = [];

      insertUser(user: UserType): void {
            this.users.push(user);
      }

      getAllUsers(): UserType[] {
            return this.users;
      }
}
