"use client";
import React, { useEffect, useCallback } from "react"
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

function Provider({
  children,
}: Readonly<{ 
    children: React.ReactNode ;
}>) {

  const CreateUser = useMutation(api.user.CreateNewUser);
  const { user } = useUser(); // แก้จาก User เป็น user (ตัวเล็ก)

  // ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่โดยไม่จำเป็น
  const checkAndCreateUser = useCallback(async () => {
    if (user) {
      try {
        const result = await CreateUser({
          email: user.primaryEmailAddress?.emailAddress ?? '',
          imageUrl: user.imageUrl ?? '',
          name: user.fullName ?? '',
        });
        console.log("User check/created:", result);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  }, [user, CreateUser]);

  useEffect(() => {
    if (user) {
      checkAndCreateUser();
    }
  }, [user, checkAndCreateUser]);

  return (
    <div>
        {/* หมายเหตุ: ถ้าใน RootLayout มี Header อยู่แล้ว ให้เอา Header ตรงนี้ออกนะครับ */}
        {children}
    </div>
  )
}

export default Provider