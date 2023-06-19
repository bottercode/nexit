import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: UserId;
    username?: string | null;
  }
}

declare module "next-auth" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface Session {
    /** OpenID ID Token */
    id: UserId;
    username?: string | null;
  }
}
