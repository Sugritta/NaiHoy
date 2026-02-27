"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";

export function UserTable() {
  const users = useQuery(api.user.GetAllUsers);

  if (users === undefined) {
    return <div className="p-4">กำลังโหลด...</div>;
  }

  if (users.length === 0) {
    return <div className="p-4">ไม่มีผู้ใช้</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">ชื่อ</th>
            <th className="border p-3 text-left">อีเมล</th>
            <th className="border p-3 text-left">ข้อมูล</th>
            <th className="border p-3 text-left">สมาชิก</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-3">
                <div className="flex items-center gap-2">
                  {user.imageUrl && (
                    <Image
                      src={user.imageUrl}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  {user.name}
                </div>
              </td>
              <td className="border p-3">{user.email}</td>
              <td className="border p-3">
                {user.imageUrl ? "✓" : "✗"}
              </td>
              <td className="border p-3">{user.subscription || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
