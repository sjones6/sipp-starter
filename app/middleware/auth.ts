import { ForbiddenException } from 'sipp';
import { Request } from 'express';
import passport from 'passport';

export const localAuth = passport.authenticate('local', {
  failureRedirect: '/login',
});

export const authenticated = (req: Request) => {
  if (!req.user) {
    throw new ForbiddenException(`cannot access path ${req.path}`);
  }
};
