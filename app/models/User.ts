import { Model } from 'sipp';

export class User extends Model {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  password: string;

  static tableName = 'users';

  /**
   * These values can be safely filled when creating via type-hint
   */
  static fillable() {
    return ['email', 'password', 'first_name', 'last_name'];
  }
}
