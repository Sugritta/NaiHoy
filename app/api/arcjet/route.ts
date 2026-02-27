import arcjet, { tokenBucket } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    tokenBucket({
      mode: "DRY_RUN", // แนะนำให้ใช้ DRY_RUN ไว้ก่อนจนกว่าจะหายลูป
      characteristics: ["userId"], 
      refillRate: 10,     // เติม 10 tokens
      interval: 10,       // ทุกๆ 10 วินาที (จากเดิม 24 ชม.)
      capacity: 50,       // เก็บสะสมได้สูงสุด 50 tokens
    }),
  ],
});

export async function GET(req: Request) {
  // แนะนำให้ดึง userId จริงจาก Clerk แทนการใช้ "user123"
  // แต่ถ้าจะทดสอบเฉยๆ ให้เปลี่ยนจาก requested: 5 เป็น 1 เพื่อให้เรียกได้บ่อยขึ้น
  const userId = "user123"; 
  const decision = await aj.protect(req, { userId, requested: 1 }); 
  
  console.log("Arcjet decision", decision.conclusion); // ดูผลลัพธ์ใน console

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 },
    );
  }

  return NextResponse.json({ message: "Hello world" });
}