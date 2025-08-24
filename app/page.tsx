"use client";

import { useState } from "react";
import { RealtimeChat } from "@/components/realtime-chat";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <input
  type="text"
  placeholder="Please Enter your Username..."
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  className="border rounded-md px-3 py-2"
/>

        <RealtimeChat roomName="my-chat-room" username={username} />
      </main>
    </div>
  );
}
