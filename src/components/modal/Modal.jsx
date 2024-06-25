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
        } transition-transform duration-300 rounded-2xl max-w-5xl bg-accentwhite`}
        style={{ height: "88%" }}
      >
        <div className="p-4">
          <IoCloseOutline
            className="text-black hover:text-accentblack w-8 h-8 cursor-pointer"
            onClick={closeModal}
          />
          <div className="mt-4 flex justify-evenly p-2 dark:text-black">
            <div className="p-2 w-1/2">
              <div>
                <img src={data.img} alt={data.title} className="w-11/12 " />
              </div>
              <div className="flex">
                <h2 className="text-3xl font-semibold">{data.title}</h2>
                <ul className="flex items-center">
                  <li>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <FaGithub className="text-black mx-3" />
                    </a>
                  </li>
                  <li className="">
                    <a href={data.live} target="_blank" rel="noreferrer">
                      <BsGlobe className="text-black" />
                    </a>
                  </li>
                </ul>
              </div>
              {data.tech}
            </div>
            <div className="w-1/2 min-h-[80vh] overflow-y-scroll">
              <p className="mt-2 text-gray-600">{data.desc}</p>
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
    desc: PropTypes.string,
    time: PropTypes.string,
    bestline: PropTypes.string,
    topic: PropTypes.string,
  }),
};
