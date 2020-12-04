import { hash, compare } from 'bcrypt';
import { User } from '@app/models/User';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Request } from 'express';
export * from './Auth';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: true,
    },
    function (req: Request, email: string, password: string, done) {
      User.query()
        .findOne('email', email)
        .then((user) => {
          if (!user) {
            req.flash('error', 'Invalid username/password combination');
            return done(null, false);
          }
          return compare(password, user.password).then((passwordMatches) => {
            !passwordMatches &&
              req.flash('error', 'Invalid username/password combination');
            done(null, passwordMatches ? user : false);
          });
        })
        .catch((err) => done(err));
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.query()
    .findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

export const init = [passport.initialize(), passport.session()];
export const hashPassword = (str: string) => hash(str, 10);
