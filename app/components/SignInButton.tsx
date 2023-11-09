"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

function SignInButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        onClick={() => signOut()}
        className="rounded-xl border bg-red-300 px-12 py-4"
      >
        {session.user.name}님 Log Out
      </button>
    );
  }

  return (
    <div className="space-x-10">
      <button
        onClick={() => router.push("/signin", { scroll: false })}
        className="rounded-xl border bg-yellow-300 px-12 py-4"
      >
        LogIn
      </button>
    </div>
  );
}

export default SignInButton;
