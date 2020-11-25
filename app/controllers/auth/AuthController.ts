import { Controller, Get } from "sipp";

export class AuthController extends Controller {
  basePath = ''

  @Get('login', { name: 'login'})
  login() {
    return { loggedIn: true };
  }

  @Get('logout', { name: 'logout'})
  logout() {
    return { loggedIn: false };
  }
}