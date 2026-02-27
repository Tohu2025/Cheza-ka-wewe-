"use client";

import { Coffee } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-orange-600 p-3 rounded-2xl">
        <Coffee size={28} className="text-white" />
      </div>
      <span className="text-2xl font-bold">Cheza Kama Wewe</span>
    </div>
  );
}
