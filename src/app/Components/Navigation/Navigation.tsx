"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";

const Navigation = () => {
  const [isTouch, setIsTouch] = useState(false);
  const handleClick = () => {
    setIsTouch(!isTouch);
  };

  const closeModal = (isTouch: boolean) => {
    setIsTouch(!isTouch);
  };

  return (
    <div
      className="
    fixed w-full h-16 flex  pl-4 justify-start items-center bg-slate-500 text-white"
    >
      {/* スマホサイズのハンバーガーアイコン */}

      {isTouch ? (
        <div>
          <FcPrevious size={24} onClick={handleClick} />
          {isTouch && (
            <div
              onClick={() => closeModal(isTouch)}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
              <div
                onClick={(e) => e.stopPropagation()} // モーダル内部のクリックイベントをバブルアップさせない
                className="bg-white p-8 rounded-lg w-3/4 h-2/4 flex flex-col items-center justify-around"
              >
                <h2 className="text-xl font-bold mb-4 text-co  text-slate-600">
                  モーダルのタイトル
                </h2>
                <h2 className="text-xl font-bold mb-4 text-co  text-slate-600">
                  モーダルのタイトル
                </h2>
                <h2 className="text-xl font-bold mb-4 text-co  text-slate-600">
                  モーダルのタイトル
                </h2>

                <div
                  onClick={() => closeModal(isTouch)}
                  className="flex justify-center items-center bg-red-500 text-white px-4 py-2 w-40 bottom-0"
                >
                  閉じる
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <FaBars size={24} onClick={handleClick} />
      )}
      {/* デスクトップサイズのナビゲーションメニュー */}
      <div className="fixed w-full h-16 hidden sm:flex flex-row justify-around items-center bg-slate-500 text-white">
        <div>home</div>
        <div>Portfolio</div>
        <div>技術スタック</div>
      </div>
    </div>
  );
};

export default Navigation;
