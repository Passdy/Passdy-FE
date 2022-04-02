// eslint-disable-next-line no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      address: string
      balance: number
      confirm_code: string
      created_at: any
      email: string
      expire_code: string
      full_name: string
      id: string
      phone: number
      role: string
      status: string
      type_confirm: string
    };
    accessToken: string;
    expires: string;
  }
}
