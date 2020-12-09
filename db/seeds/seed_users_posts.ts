import * as Knex from 'knex';
import faker from 'faker';
import { hash } from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('posts').del();

  const pwHash = await hash('mypass123', 10);

  // Inserts seed entries
  const users = [],
    posts = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email().toLowerCase(),
      password: pwHash,
    });
    const postCount = faker.random.number({ min: 2, max: 10 });
    for (let p = 0; p < postCount; p++) {
      posts.push({
        user_id: i,
        content: faker.lorem.sentences(faker.random.number({ min: 1, max: 3 })),
      });
    }
  }
  await knex('users').insert(users);
  await knex('posts').insert(posts);
}
