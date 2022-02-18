import React, { useRef } from "react";
import { Html } from "@react-three/drei";

const HtmlContent = ({ className, style, children, portal }) => {
  const htmlRef = useRef();
  return (
    <Html
      ref={htmlRef}
      className="content"
      style={style}
      distanceFactor={5}
      portal={portal}
    >
      {children}
    </Html>
  );
};

export default HtmlContent;
