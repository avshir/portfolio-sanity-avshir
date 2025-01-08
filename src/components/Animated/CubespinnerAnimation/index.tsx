import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import "./index.scss";

const CubespinnerAnimation = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FaGitAlt color="#EC4D28" />
        </div>
        <div className="face2">
          <FaHtml5 color="#F06529" />
        </div>
        <div className="face3">
          <FaCss3Alt color="#28A4D9" />
        </div>
        <div className="face4">
          <FaReact color="#5ED4F4" />
        </div>
        <div className="face5">
          <FaJsSquare color="#EFD81D" />
        </div>
        <div className="face6">
          <SiTailwindcss color="#38bdf8" />
        </div>
      </div>
    </div>
  );
};

export default CubespinnerAnimation;
