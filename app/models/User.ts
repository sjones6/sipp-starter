import { Model } from 'sipp';
import { IsEmail, IsString, MinLength, MaxLength, IsInt, IsOptional, IsNotEmpty } from 'sipp/validation';
import { hashPassword } from '@app/auth';
import * as Models from '.';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export class User extends Model {

  @IsEmail(undefined, {
    message: 'A valid email is required.'
  })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'Required.'
  })
  first_name: string;

  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty({
    message: 'Required.'
  })
  last_name: string;

  @MinLength(8, {
    message: 'Password must be longer than 8 characters.'
  })
  @MaxLength(24, {
    message: 'Password must not be longer than 24 characters.'
  })
  password: string;

  posts?: Models.Post[]

  static tableName = 'users';

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Models.Post,
        join: {
          from: `${User.tableName}.id`,
          to: `${Models.Post.tableName}.user_id`
        }
      }
    }
  }

  /**
   * These values can be safely filled when creating via type-hint
   */
  static fillable() {
    return ['email', 'password', 'first_name', 'last_name'];
  }

  async $beforeInsert(queryContext) {
    this.password = await hashPassword(this.password);
    await super.$beforeInsert(queryContext);
  }
  async $beforeUpdate(opt, queryContext) {
    if (!/^\$2b\$\d+\$/.test(this.password)) {
      this.password = await hashPassword(this.password);
    }
    await super.$beforeUpdate(opt, queryContext);
  }
}
