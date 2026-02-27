import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";
import { UserTable } from "./_components/UserTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-white h-full w-full py-4 sm:py-6 md:py-8 space-y-8 sm:space-y-10 md:space-y-12">

      {/* 2. Layout รูปภาพแบบลอย (คล้ายรูปตัวอย่างที่ 2) */}
      <div className="px-3 sm:px-4 md:px-8"> {/* สร้างระยะห่างจากขอบจอข้างละนิด */}
        <div className="relative w-full max-w-[2160px] mx-auto h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] rounded-xl sm:rounded-2xl md:rounded-[30px] overflow-hidden shadow-sm">
          
          <Image 
            src="/images/landscape1.jpg"
            alt="Landscape View"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay จางๆ ถ้าต้องการให้รูปดูนุ่มนวลขึ้น */}
          <div className="absolute inset-0 bg-black/5" />
          
        </div>
      </div>
        {/* 3. ส่วนด้านล่างรูป */}
      <div className="px-3 sm:px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-[2160px] mx-auto">
          <div>
            <div>
              <Hero />
              <PopularCityList/>
            </div>            
          </div>
        </div>
      </div>

    </div>
  );
}