"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Imageコンポーネントをインポート

interface Information {
  id: string;
  title: string;
  description: string;
  src: string;
  link: string;
}
interface TechnologyStack {
  id: string;
  title: string;
  description: string;
  src: string;
}

interface Data {
  portfolio: Information[];
  technologyStack: TechnologyStack[];
}

const Contents = () => {
  //jsonデータ格納用
  const [datas, setDatas] = useState<Data | undefined>(undefined);

  //情報取得用関数
  const getData = async () => {
    try {
      const response = await fetch("/data/information.json");
      if (!response.ok) {
        throw new Error("ネットワーク応答が正常ではありません");
      }
      const jsonData = await response.json();
      setDatas(jsonData);
    } catch (error) {
      console.error("フェッチエラー:", error);
    }
  };

  // JSONデータをフェッチする処理
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col overflow-y-scroll">
      {/* ポートフォリオ */}
      <div className="border-b-2 border-dashed border-black w-1/4 mt-4">
        My Portfolio
      </div>
      {datas ? (
        datas.portfolio.map((data) => (
          <div key={data.id} className="flex flex-col items-center ">
            <div className="flex flex-col items-center mt-4">{data.title}</div>
            <Image
              src={data.src}
              alt=""
              width={150} // 幅を指定
              height={150} // 高さを指定
              className="w-40 h-40 my-4" // 画像を正方形に表示
            />
            <p className="border-b border-black w-1/2"></p>
          </div>
        ))
      ) : (
        <div>データを読み込んでいます...</div>
      )}
      <p className="border-2 border-dashed border-gray-300 w-full mt-8 mb-"></p>

      {/* 技術スタック */}
      <div className="mb-8">
        <div className="border-b-2 border-dashed border-black w-1/4 mt-4">
          技術スタック
        </div>
        {datas ? (
          datas.technologyStack.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center mt-4">
                {tech.title}
              </div>
              <Image
                src={tech.src}
                alt=""
                width={150} // 幅を指定
                height={150} // 高さを指定
                className="w-40 h-40 my-4" // 画像を正方形に表示
              />
              <p className="border-b border-black w-1/2"></p>
            </div>
          ))
        ) : (
          <div>データを読み込んでいます...</div> // ローディングメッセージ
        )}
      </div>
    </div>
  );
};

export default Contents;
