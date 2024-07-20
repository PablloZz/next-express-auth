import { type UserDetails } from "./packages/users";

declare module "express" {
  interface Request {
    user?: UserDetails;
  }
}
