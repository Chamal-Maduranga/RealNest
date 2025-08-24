// components/Icon.js
import { FaHome, FaBuilding, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const icons = {
  home: FaHome,
  properties: FaBuilding,
  offplan: FaProjectDiagram,
  contact: FaEnvelope,
  opener: RiMenuUnfold2Line,
  closer: RiMenuFold2Line,
  backArrowIcon:IoIosArrowRoundBack
};

export default function Icon({ name, size = 24, color = "#1E40AF" }) {
  const IconComponent = icons[name];

  // If icon name is wrong, fallback to a default icon
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Using default FaHome.`);
    return <FaHome size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} />;
}
