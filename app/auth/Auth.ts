import { User } from "@app/models";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export class Auth {
  constructor(public readonly user?: User) { }

  isAuthenticated(): boolean {
    return !!this.user;
  }
}