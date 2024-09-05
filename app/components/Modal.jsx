"use client";

import { useContext } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../hooks/useModalOpen";

import { IoCloseOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Modal() {
  const { isOpen, closeModal, selectedData: data } = useContext(ModalContext);

  if (!data) return null; // Ensure data is available

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-300 backdrop-blur-sm backdrop-filter bg-opacity-10`}
    >
      <div
        className={`w-full bg-white rounded-t-lg shadow-lg transition-all transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 rounded-t-2xl w-4/5 max-w-screen-2xl bg-accentwhite overflow-y-auto`}
        style={{ height: "80%" }}
      >
        <div className="grid px-8 pt-6">
          <IoCloseOutline
            className="text-black w-10 h-10 cursor-pointer place-self-end"
            onClick={closeModal}
          />
          <div className="pt-4 flex flex-col justify-center items-center dark:text-black gap-5 py-6">
            <Image src={data.img} alt={data.title} className="shadow-xl" />
            <div className="flex justify-start items-center gap-4 w-full">
              <h2 className="text-start text-4xl mb-4 lg:mb-0 lg:text-3xl font-semibold">
                {data.title}
              </h2>
              <a href={data.github} target="_blank" rel="noreferrer">
                <FaGithub className="text-black h-6 w-6 mr-3 lg:mx-3" />
              </a>
              <a href={data.live} target="_blank" rel="noreferrer">
                <BsGlobe className="text-black h-6 w-6" />
              </a>
            </div>
            <div className="w-full flex justify-start">
              {data.tech && (
                <p className="mt-2 text-xl font-mono">{data.tech}</p>
              )}
            </div>
          </div>
          <div className="text-black grid gap-3 pb-10">
            {Array.isArray(data.desc) ? (
              data.desc.map((line, index) => (
                <p key={index} className="text-base font-noto">
                  {line}
                </p>
              ))
            ) : (
              <p className="mt-2">{data.desc}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    tech: PropTypes.string,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.string,
    bestline: PropTypes.string,
    topic: PropTypes.string,
  }),
};
