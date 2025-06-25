'use client';


import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session, } = authClient.useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async () => {
    authClient.signUp.email({
      email,
      name,
      password

    }, {
      onError: () => {
        window.alert("Signup failed.");
      },
      onSuccess: () => {
        window.alert("Signup successful!");
      }

    });
  }
  const onLogin = async () => {
    authClient.signIn.email({
      email,
      password

    }, {
      onError: () => {
        window.alert("Signup failed.");
      },
      onSuccess: () => {
        window.alert("Signup successful!");
      }

    });
  }


  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p className="text-gray-600">You are logged in as {session.user.name}</p>
        <Button
          onClick={() => authClient.signOut()}
        >Sign out</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Create user</Button>

      </div>
      <div className="p-4 flex flex-col gap-y-4">
      
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Login user</Button>

      </div>
    </div>

  );

}
