import { Controller, Get } from "sipp";
import { home, HomeProps } from "./views/home";

export class HomeController extends Controller {
  basePath = ''

  @Get() // GET: /
  getHome() {
    return this.view<HomeProps>( // render a view and return HTML
      home, // this is a JSX function that renders HTML
      { title: "Home", header: "Hello world!" } // props passed to the view
    );
  }
}