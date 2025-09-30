import React from "react";
import { Search, Calculator, Camera, LineChart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-around shadow-md">
      <a href="#solver" className="flex flex-col items-center">
        <Calculator size={24} /> حل معادلة
      </a>
      <a href="#quickai" className="flex flex-col items-center">
        <Camera size={24} /> الحل السريع
      </a>
      <a href="#graph" className="flex flex-col items-center">
        <LineChart size={24} /> التمثيل البياني
      </a>
      <a href="#team" className="flex flex-col items-center">
        <Search size={24} /> الفريق
      </a>
    </nav>
  );
}

export default Navbar;