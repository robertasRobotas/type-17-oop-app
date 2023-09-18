export type UserType = {
      id: string;
      name: string;
      email: string;
};

export class User {
      private id: string;
      private name: string;
      private email: string;

      constructor({ id, name, email }: UserType) {
            this.id = id;
            this.name = name;
            this.email = email;
      }

      getUser(): UserType {
            return { id: this.id, name: this.name, email: this.email };
      }

      setName(name: string): void {
            this.name = name;
      }

      getEmail(): string {
            return this.email;
      }

      setEmail(email: string): void {
            this.email = email;
      }
}
