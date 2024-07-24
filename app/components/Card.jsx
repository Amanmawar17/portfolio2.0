"use client"

import { useContext } from "react";
import Tilt from "react-parallax-tilt";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { ModalContext } from "../hooks/useModalOpen";
import Image from "next/image";

export default function Card({ data }) {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="lg:m-2 cursor-pointer" onClick={() => openModal(data)}>
      <Tilt
        scale={1.1}
        transitionEasing="0.9"
        glareEnable={true}
        glareMaxOpacity={0.2}
        tiltMaxAngleX={8}
        tiltMaxAngleY={10}
      >
        <div className="flex flex-col justify-evenly w-72 lg:max-w-lg rounded-sm bg-card text-card-foreground shadow-xl dark:shadow-foreground dark:shadow-sm">
          <Image className="object-cover"
            src={data.img}
            alt={`${data.title} image`}
            height={400}
          />
          <div className="py-4">
            <div className="font-bold text-xl mx-5 flex items-center my-2">
              <h2 className="dark:hover:text-extra1">
                {data.title}
              </h2>
              {data.github && (
                <ul className="flex items-center">
                  <li>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <FaGithub className="mx-3" />
                    </a>
                  </li>
                  <li className="">
                    <a href={data.live} target="_blank" rel="noreferrer">
                      <BsGlobe className="" />
                    </a>
                  </li>
                </ul>
              )}
            </div>
              {data.time && (
                <p className="text-sm mx-5">
                  {data.time}
                </p>
              )}
            <div className="mx-5">
              {data.tech && (
                <h3 className="text-sm font-medium ">
                  Tech: <span className="text-primary">{data.tech}</span>
                </h3>
              )}
              {data.topic && (
                <p className="text-sm font-medium inline-flex">
                  {data.topic}
                </p>
              )}
              {data.desc.length > 0 && (
                <p className=" text-base mt-2 line-clamp-5">
                  {data.desc[0]}
                </p>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    topic: PropTypes.string,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    github: PropTypes.string,
    live: PropTypes.string,
    tech: PropTypes.string,
    desc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    time: PropTypes.string,
    bestline: PropTypes.string,
  }).isRequired,
};
