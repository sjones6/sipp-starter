import { hash, compare } from 'bcrypt';
import { User } from '@app/models/User';
import passport from 'passport';
import LocalStrategy from 'passport-local';

declare global {
  namespace session {
    interface SessionData {
      user: User
    }
  }
}

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false,
  session: true
},
  function (email, password, done) {
    User.query().findOne('email', email).then(user => {
      if (!user) {
        return done(null, false);
      }
      return compare(password, user.password).then((passwordMatches) => {
        done(null, passwordMatches ? user : false)
      });
    })
      .catch((err) => done(err));
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.query()
    .findById(id)
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

export const init = [passport.initialize(), passport.session()];
export const hashPassword = hash;