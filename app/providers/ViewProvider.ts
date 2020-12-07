import {  IServiceRegistryFn, Req, ServiceProvider } from "@sjones6/sipp";
import { Auth } from "../auth";

export class ViewProvider extends ServiceProvider {
  register(register: IServiceRegistryFn) {
    register(
      '*',
      Auth,
      async (resolve) => {
        const req = await resolve(Req) as Req;
        return new Auth(req.req.user);
      }
    )
  }
}