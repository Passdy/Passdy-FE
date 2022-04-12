// eslint-disable-next-line no-unused-vars
import NextAuth from "next-auth";

interface UserInterface {
  address: string;
  balance: number;
  confirm_code: string;
  created_at: any;
  email: string;
  expire_code: string;
  fullname: string;
  id: string;
  phone: number;
  role: string;
  status: string;
  type_confirm: string;
}

declare module "next-auth" {
  interface Session {
    user: UserInterface;
  }
}
