import { Model } from 'sipp';
import { IsNumber, IsString, MinLength } from 'sipp/validation';
import * as Models from '.';

export class Post extends Model {

  @IsString()
  @MinLength(1)
  content: string;

  @IsNumber()
  user_id: number;

  user?: Models.User;

  static tableName = 'posts';

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: Models.User,
        join: {
          from: `${Post.tableName}.user_id`, 
          to: `${Models.User.tableName}.id`,
        }
      }
    }
  };

  static fillable() {
    return ['content'];
  }
}
