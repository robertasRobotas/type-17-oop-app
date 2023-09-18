import { User } from "./user";
import { DB } from "./db";

const database = new DB();

const user = new User({
      id: "k1j2n3kj12n3",
      name: "Ramunas",
      email: "ram@gmail.com",
});

const user2 = new User({
      id: "sdfsdfsdfdsfds",
      name: "Linas",
      email: "linas@gmail.com",
});

const userData = user.getUser();
const user2Data = user2.getUser();

database.insertUser(userData);
database.insertUser(user2Data);

const users = database.getAllUsers();

console.log("users", users);
