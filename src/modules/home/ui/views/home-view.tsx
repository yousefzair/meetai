'use client';

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export const HomeView = () => {
  
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p className="text-gray-600">You are logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut({
          fetchOptions: { 
            onSuccess: () => router.push("/sign-in") 
          }
        })
        }>
        Sign out
      </Button>
    </div>
  );

}