export type UserType = {
    id: string;
    name: string;
    email: string;
};

export type UserCreationType = Omit<UserType, "id">;

export class User {
    private id: string = this.greateProductdId();
    private name: string;
    private email: string;

    constructor({ name, email }: UserCreationType) {
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

    private greateProductdId(): string {
        return Math.random().toString(16).slice(2);
    }
}
