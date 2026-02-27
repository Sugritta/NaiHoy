"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function TestUserPage() {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const users = useQuery(api.user.GetAllUsers);
  const { user: clerkUser } = useUser();

  const handleCreateTestUser = async () => {
    try {
      console.log("Creating test user...");
      const result = await CreateUser({
        name: "Test User",
        email: `test-${Date.now()}@example.com`,
        imageUrl: "https://via.placeholder.com/50",
      });
      console.log("User created:", result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Test User Creation</h1>

      <div>
        <h2 className="text-lg font-semibold mb-2">Current Clerk User:</h2>
        {clerkUser ? (
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(
              {
                name: clerkUser.fullName,
                email: clerkUser.primaryEmailAddress?.emailAddress,
                image: clerkUser.imageUrl,
              },
              null,
              2
            )}
          </pre>
        ) : (
          <p>Not logged in</p>
        )}
      </div>

      <Button onClick={handleCreateTestUser} className="bg-blue-600">
        Create Test User
      </Button>

      <div>
        <h2 className="text-lg font-semibold mb-2">Database Users ({users?.length || 0}):</h2>
        {users === undefined ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p className="text-red-500">ไม่มีผู้ใช้ในฐานข้อมูล</p>
        ) : (
          <pre className="bg-gray-100 p-2 rounded text-sm max-h-96 overflow-auto">
            {JSON.stringify(users, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
