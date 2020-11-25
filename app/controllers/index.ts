import { AuthController } from "./auth/AuthController";
import { HomeController } from "./home/HomeController";

export const controllers = [
  new HomeController(),
  new AuthController()
];
