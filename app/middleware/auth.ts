import { ForbiddenException } from 'sipp';
import { Request } from 'express';
import passport from 'passport';
import { hashPassword } from '@app/auth';

export const localAuth = passport.authenticate('local', { failureRedirect: '/login' });

export const hashPasswordMiddleware = (passwordPath: string = 'password', saltrounds: number = 10) => async (req: Request) => {
  if (req.body[passwordPath]) {
    req.body[passwordPath] = await hashPassword(req.body[passwordPath], saltrounds);
  }
}

export const authenticated = (req: Request) => {
  if (!req.user) {
    throw new ForbiddenException(`cannot access path ${req.path}`);
  }
}