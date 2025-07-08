import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { NextRequest } from "next/server";

const handler = async (req: NextRequest) => {
  return NextAuth(authOptions)(req);
};

export { handler as GET, handler as POST };
