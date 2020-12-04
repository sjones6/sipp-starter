import { Controller, Get } from 'sipp';
import { HomeView } from './home.views';
import { Post } from '@app/models';

export class HomeController extends Controller {
  basePath = '';

  @Get()
  async getHome() {
    return new HomeView(
      { title: 'Home', header: 'Hello world!' },
      await Post.query().withGraphFetched('user'),
    );
  }
}
