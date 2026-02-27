"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// นำเข้า Clerk components
import { 
  SignInButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from "@clerk/nextjs";

const menuOptions = [
  { name: "หน้าหลัก", path: "/home" },
  { name: "เกี่ยวกับเรา", path: "/about-us" },
  { name: "ติดต่อเรา", path: "/contact-us" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative"> 
      {/* Header Navigation Bar */}
      <div className="flex justify-between items-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 shadow-sm bg-white z-50 relative">
      
        {/* Hamburger Icon */}
        <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-50 mr-2"
            aria-label="Toggle menu"
            >
            <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>


        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-all shrink-0">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} className="sm:w-[50px] sm:h-[50px]"/>
          <h2 className="font-bold text-lg sm:text-2xl hidden sm:block">เพื่อนพาเที่ยว</h2>
        </Link>

        {/* Menu for Desktop */}
        <div className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {menuOptions.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <span className="font-bold text-lg cursor-pointer hover:text-blue-600 transition-all">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Side Actions (Clerk Integration) */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-auto flex-shrink-0">
            
            {/* ส่วนที่จะแสดงเมื่อ User ยังไม่ได้ Login */}
            <SignedOut>
              <div className="hidden lg:block">
                <SignInButton mode="modal">
                  <Button>Get Started</Button>
                </SignInButton>
              </div>
              
              {/* Mobile Sign-in (แทนไอคอน User เดิม) */}
              <div className="lg:hidden">
                <SignInButton mode="modal">
                   <Button variant="ghost" size="sm" className="font-bold text-sm px-2 py-1">Login</Button>
                </SignInButton>
              </div>
            </SignedOut>

            {/* ส่วนที่จะแสดงเมื่อ User Login แล้ว */}
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link href="/create-new-trip">
                  <Button>Create Trip</Button>
                </Link>
                <UserButton />
              </div>
            </SignedIn>
            
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col">
          {menuOptions.map((menu, index) => (
            <Link href={menu.path} key={index} onClick={() => setIsMenuOpen(false)}>
              <span className="block px-4 sm:px-5 py-3 sm:py-4 font-bold text-base sm:text-lg cursor-pointer hover:bg-gray-100 transition-all border-b last:border-b-0">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;