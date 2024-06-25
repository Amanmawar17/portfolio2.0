import { useContext } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../../hooks/useModalOpen";

import { IoCloseOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
        } transition-transform duration-300 rounded-t-2xl max-w-5xl bg-accentwhite`}
        style={{ height: "88%" }}
      >
        <div className="grid px-4 pt-6">
          <IoCloseOutline
            className="text-black hover:text-accentblack w-10 h-10 cursor-pointer place-self-end"
            onClick={closeModal}
          />
          <div className="pt-4 grid grid-flow-col gap-10 dark:text-black p-4">
            <div className="max-w-lg">
              <img src={data.img} alt={data.title} className="shadow-xl" />
              <div className="flex justify-between items-center my-6 max-w-md">
                <h2 className="text-start text-3xl font-semibold">{data.title}</h2>
                <ul className="flex justify-end items-center">
                  <li>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <FaGithub className="text-black h-6 w-6 mx-3" />
                    </a>
                  </li>
                  <li className="">
                    <a href={data.live} target="_blank" rel="noreferrer">
                      <BsGlobe className="text-black h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </div>
              {data.tech}
            </div>
            <div className="overflow-y-auto max-h-[74vh]">
              <ul>
              {Array.isArray(data.desc) ? (
              data.desc.map((line, index) => (
                <p key={index} className="mt-2">
                  {line}
                </p>
              ))
            ) : (
              <p className="mt-2">
                {data.desc}
              </p>
            )}
        </ul>
            </div>
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
