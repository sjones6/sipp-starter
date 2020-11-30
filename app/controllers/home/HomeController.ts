import { Controller, Get, RequestContext } from "sipp";
import { home } from "./home.views";

export class HomeController extends Controller {
  basePath = '';

  @Get()
  getHome(ctx: RequestContext) {
    return home({ title: "Home", header: "Hello world!" }, ctx);
  }
}