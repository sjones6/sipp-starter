import { AuthController } from "./auth/AuthController";
import { HomeController } from "./home/HomeController";
import { UserController } from "./user/UserController";

export const controllers = [
  new HomeController(),
  new AuthController(),
  new UserController(),
];
