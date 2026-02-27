'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { on } from "events";
import { Flower2, Globe2, Mountain, Palmtree, Plane, Send, Waves } from "lucide-react";
import { Island_Moments, Sedan } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const suggestions = [
  {
    title: "ภาคเหนือ",
    icon: <Mountain className="text-amber-700 h-5 w-5" />
  },
  {
    title: "ภาคตะวันตก",
    icon: <Waves className="text-purple-400 h-5 w-5" />
  },
  {
    title: "ภาคกลาง",
    icon: <Plane className="text-yellow-500 h-5 w-5" />
  },
  {
    title: "ภาคตะวันออกเฉียงเหนือ",
    icon: <Flower2 className="text-red-600 h-5 w-5" />
  },
  {
    title: "ภาคตะวันออก",
    icon: <Palmtree className="text-green-700 h-5 w-5" />
  },
  {
    title: "ภาคใต้",
    icon: <Globe2 className="text-blue-700 h-5 w-5" />
  }
]

export default function Hero() {

  const { user } = useUser();
  const router = useRouter();
  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    //Naviate to Create Trip plan page
    router.push("/create-new-trip");
  }

  return (

    <div className="mt-16 sm:mt-20 md:mt-24 w-full flex flex-col items-center justify-center px-4">
      <div className="space-y-4 sm:space-y-6 max-w-4xl w-full text-center">
        {/* Content */}
        <div className="space-y-3 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">ยินดีต้อนรับสู่ เพื่อนพาเที่ยว</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center">ให้เราช่วยแนะนำสถานที่ท่องเที่ยวในประเทศไทยให้กับคุณ!</p>
        </div>

        {/* Input Box */}
        <div className="border rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-end gap-2 sm:gap-3 w-full mx-auto max-w-3xl">
          <Textarea placeholder="ช่วยแนะนำสถานที่ท่องเที่ยวในภาคเหนือของประเทศไทยให้หน่อย" 
          className="w-full h-20 sm:h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none text-sm sm:text-base"/>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 w-full sm:w-auto sm:h-fit shrink-0" onClick={()=>onSend()}>
              <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Suggestion*/}

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center">
          {suggestions.map((suggestion, index) => (

            <div key={index} className="flex items-center gap-1 sm:gap-2 border 
            rounded-full p-1.5 sm:p-2 cursor-pointer hover:bg-primary hover:text-white text-xs sm:text-sm whitespace-nowrap">
              {suggestion.icon}
              <h2>{suggestion.title}</h2>
            </div>

          ))}
        </div>

      </div>
    </div>

  )
}