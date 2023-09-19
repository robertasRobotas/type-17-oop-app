import { DB } from "./db";

const database = new DB();

import { User } from "./user";

const button: HTMLButtonElement = document.getElementById(
    "submit-button",
) as HTMLButtonElement;

const printButton: HTMLButtonElement = document.getElementById(
    "print-users",
) as HTMLButtonElement;

const usersWrapper: HTMLButtonElement = document.getElementById(
    "users-wrapper",
) as HTMLButtonElement;

button.addEventListener("click", () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;

    const user = new User({ name: nameInput.value, email: emailInput.value });
    const userData = user.getUser();

    database.insertUser(userData);
});

printButton.addEventListener("click", () => {
    usersWrapper.innerHTML = "";

    const allUsers = database.getAllUsers();

    allUsers.forEach((user) => {
        const wrapper = document.createElement("div");
        wrapper.addEventListener("click", () => {
            console.log(user);
        });
        wrapper.innerHTML = `name: ${user.name} email: ${user.email}`;
        usersWrapper.append(wrapper);
    });
});
