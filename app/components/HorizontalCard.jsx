"use client"

import { useContext } from "react";
import { ModalContext } from "../hooks/useModalOpen";

import Image from "next/image";

export default function HorizontalCard({ data }) {
  const { openModal } = useContext(ModalContext);
  return (
    <div
      onClick={() => openModal(data)}
      className="grid lg:grid-flow-col grid-flow-row place-content-center gap-4 lg:gap-20 max-w-sm lg:max-w-4xl p-6 rounded-xl dark:bg-foreground dark:text-background shadow-2xl dark:shadow-sm h-fit"
    >
      <div className="">
        <Image
          src={data.img}
          alt="img"
          width={800}
          height={800}
          className="w-auto h-auto "
        />
      </div>
      <div>
        <h3 className="text-2xl">{data.title}</h3>
        <p className="text-lg">{data.tags}</p>
        <p className="text-base">{data.time}</p>
        <p className="line-clamp-3 text-lg">{data.desc}</p>
      </div>
    </div>
  );
}
