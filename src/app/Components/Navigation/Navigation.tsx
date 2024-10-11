"use client";

import { FaBars } from "react-icons/fa"; //ハンバーガーアイコンのインポート

//shadcnのシートのインポート
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  return (
    <div className="fixed w-full h-16 flex pl-4 justify-start items-center bg-slate-500 text-white">
      {/* 以下はモバイル版のナビゲーション(shadcnのシートのインポート) */}
      <Sheet>
        <SheetTrigger>
          <FaBars size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex h-full">
            <SheetTitle className="flex items-start h-full">遷移先</SheetTitle>
            <SheetDescription className="flex flex-col items-center h-full gap-4">
              <a href="#top">Top</a>
              <a href="#portfolios">portfolio</a>
              <a href="#skills">技術スタック</a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* デスクトップサイズのナビゲーションメニュー */}
      <div className="fixed w-full h-16 hidden sm:flex flex-row justify-around items-center bg-slate-500 text-white">
        <a href="#top">home</a>
        <a href="#portfolios">Portfolio</a>
        <a href="#skills">技術スタック</a>
      </div>
    </div>
  );
};

export default Navigation;
