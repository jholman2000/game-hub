import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { PlatformIconListProps } from "./PlatformIconList.types";

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  /* Only one style is used for this component, so we can define it once here instead of adding a separate .css file */
  const iconStyle = { color: "#718096", fontSize: "20px" };

  const iconMap: Record<string, JSX.Element> = {
    pc: <FaWindows style={iconStyle} title="PC" />,
    playstation: <FaPlaystation style={iconStyle} title="PlayStation" />,
    xbox: <FaXbox style={iconStyle} title="Xbox" />,
    mac: <FaApple style={iconStyle} title="Mac" />,
    linux: <FaLinux style={iconStyle} title="Linux" />,
    android: <FaAndroid style={iconStyle} title="Android" />,
    ios: <MdPhoneIphone style={iconStyle} title="iOS" />,
    nintendo: <SiNintendo style={iconStyle} title="Nintendo" />,
    "nintendo-switch": (
      <SiNintendoswitch style={iconStyle} title="Nintendo Switch" />
    ),
    web: <BsGlobe style={iconStyle} title="Web" />,
  };

  return (
    <div className="d-flex gap-2">
      {platforms.map((platform) => {
        const slug = platform.platform.slug;
        const Icon = iconMap[slug];

        return Icon ? <span key={slug}>{Icon}</span> : null;
      })}
    </div>
  );
};

export default PlatformIconList;
